# Security Policy

**Last updated:** February 19, 2026

**Kota Alien Merch** takes the security of our codebase, users, customers, and merch empire extremely seriously. We deeply value the security research community and follow responsible disclosure practices to keep the alien invasion... I mean, our shop... as safe as possible.

## Supported Versions

We actively provide security updates for the following versions:

| Version | Supported          |
|---------|--------------------|
| 5.1.x   | :white_check_mark: |
| 5.0.x   | :x:                |
| 4.0.x   | :white_check_mark: |
| < 4.0   | :x:                |

**Recommendation**: Always run the latest supported version (currently 5.1.x) for the strongest security posture and newest features. Security patches are released promptly for supported branches.

## Reporting a Vulnerability

If you discover a potential security issue in Kota Alien Merch (web app, API, dependencies, checkout flow, etc.), please report it to us **responsibly and privately**.  
**Do NOT** disclose it publicly via GitHub Issues, Discussions, social media, or anywhere else until we have coordinated a fix.

### Preferred Method: GitHub Private Vulnerability Reporting (Recommended)
1. Go to the **Security** tab of this repository.  
2. Click **"Report a vulnerability"**.  
   This opens a private security advisory visible only to maintainers — the most secure and fastest way.

### Alternative: Email
Send your report to: `security@kota-alien-merch.com`

(If you prefer encrypted communication, reply to our acknowledgment and we’ll provide our PGP public key.)

### What to Include (the more details, the faster we can act)
- Clear title and description of the vulnerability
- Affected version(s) / component (e.g., checkout page, API endpoint, dependency)
- Step-by-step reproduction instructions
- Proof-of-concept (PoC) code, screenshots, or video (safe to share)
- Potential impact (e.g., account takeover, data leak, payment fraud, XSS)
- Your preferred name/handle for public credit (or remain anonymous)

## Our Commitment & Timelines

We treat every valid report with urgency and transparency:

| Severity   | Acknowledgment | Triage & Initial Response | Target Fix Time |
|------------|----------------|---------------------------|-----------------|
| Critical   | ≤ 24 hours     | ≤ 3 business days         | ≤ 7–14 days     |
| High       | ≤ 48 hours     | ≤ 5 business days         | ≤ 30 days       |
| Medium/Low | ≤ 72 hours     | ≤ 10 business days        | Next release    |

- You will receive regular status updates (minimum every 7 days).
- We follow [Coordinated Vulnerability Disclosure](https://www.cisa.gov/topics/cyber-threats-and-advisories/vulnerability-management/coordinated-vulnerability-disclosure) guidelines.
- Fix will be prepared privately; public advisory + patch released together (usually within 30–90 days, or sooner if critical).

## Scope

**In scope**
- Any vulnerability in the code published in this repository
- Production website, API, or deployment affecting users/customers
- Issues that could lead to data exposure, unauthorized access, or payment problems

**Out of scope** (please report these to the respective provider)
- Third-party services (Shopify, payment processors like Stripe/PayPal, email providers, etc.) unless you can demonstrate a novel chain through our site
- Social engineering, phishing, or physical attacks
- Denial-of-service without a unique exploit vector
- Previously disclosed or known issues

## Rewards & Recognition

High-quality reports earn public credit in our release notes, GitHub Security Advisories, and on our website.  
Significant or critical findings may also receive:
- Exclusive Kota Alien Merch swag (limited-edition alien tees, stickers, hoodies)
- Cash bounty (case-by-case for high-impact issues)
- Permanent spot in our **Security Hall of Fame**

Serious researchers — we love working with you. Reach out after your first report!

## Security Hall of Fame

*(List of awesome researchers will grow here — be the first!)*

Thank you for helping protect the galaxy of alien merch fans! 👽🚀  
Your responsible disclosure makes Kota Alien Merch safer for everyone.

---

**Questions about this policy?** Open a regular issue labeled `security-policy` or contact the maintainers.
