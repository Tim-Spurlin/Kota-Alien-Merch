import express from 'express';
import Stripe from 'stripe';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import rateLimit from 'express-rate-limit';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const app = express();

const staticFileLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs for catch-all route
});

// Use JSON parser for all non-webhook routes
app.use((req, res, next) => {
    if (req.originalUrl === '/webhook') {
        next();
    } else {
        express.json()(req, res, next);
    }
});

app.use(cors());

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, 'dist')));

// === CREATE CHECKOUT SESSION ===
app.post('/create-checkout-session', async (req, res) => {
    const { client_id, priceId } = req.body;

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price: priceId, // The ID of the price object created in Stripe
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.origin}/cancel`,
            client_reference_id: client_id, // GA4 Client ID passed here
            metadata: { client_id },
        });

        res.json({ url: session.url });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).json({ error: error.message });
    }
});

// === STRIPE WEBHOOK ===
app.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
    const sig = req.headers['stripe-signature'];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

    let event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
        console.error('Webhook signature verification failed:', err.message);
        return res.status(400).json({ error: 'Webhook signature verification failed' });
    }

    // Handle successful checkout
    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;

        const clientId = session.client_reference_id; // GA4 client_id
        if (!clientId) {
            console.log('No client_id found – skipping GA4 event');
            return res.status(200).send('OK');
        }

        // Send purchase event to GA4 Measurement Protocol
        const gaPayload = {
            client_id: clientId,
            events: [{
                name: 'purchase',
                params: {
                    currency: session.currency.toUpperCase(),
                    value: session.amount_total / 100,
                    transaction_id: session.payment_intent || session.id,
                    items: session.line_items?.data?.map(item => ({
                        item_id: item.price?.id,
                        item_name: item.description,
                        price: item.price?.unit_amount / 100,
                        quantity: item.quantity
                    })) || []
                }
            }]
        };

        const measurementId = process.env.GA4_MEASUREMENT_ID;
        const apiSecret = process.env.GA4_API_SECRET;

        if (measurementId && apiSecret) {
            try {
                await fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`, {
                    method: 'POST',
                    body: JSON.stringify(gaPayload)
                });
                console.log(`✅ GA4 purchase sent for client_id ${clientId}`);
            } catch (error) {
                console.error('Error sending to GA4:', error);
            }
        } else {
            console.warn('Missing GA4 credentials, skipping measurement protocol call.');
        }
    }

    res.status(200).send('OK');
});

// Handle React routing, return all requests to React app
app.get('(.*)', staticFileLimiter, (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
