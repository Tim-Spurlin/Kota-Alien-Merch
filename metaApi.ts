export const generateEventId = () => {
    return 'evt_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
};

export const getFbpCookie = () => {
    const match = document.cookie.match(/(^|;\s*)_fbp=([^;]+)/);
    return match ? match[2] : undefined;
};

export const getFbcCookie = () => {
    const match = document.cookie.match(/(^|;\s*)_fbc=([^;]+)/);
    return match ? match[2] : undefined;
};

export const sendMetaEvent = async (eventName: string, customData = {}, additionalUserData = {}) => {
    try {
        const eventId = generateEventId();

        // 1. Send Browser Event (Meta Pixel)
        if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', eventName, customData, { eventID: eventId });
        }

        // 2. Send Server Event (Conversions API)
        await fetch('/api/meta-event', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                event_name: eventName,
                event_time: Math.floor(Date.now() / 1000),
                event_source_url: window.location.href,
                event_id: eventId,
                user_data: {
                    fbp: getFbpCookie(),
                    fbc: getFbcCookie(),
                    ...additionalUserData
                },
                custom_data: customData
            })
        });
    } catch (error) {
        console.error('Error sending Meta Event:', error);
    }
};
