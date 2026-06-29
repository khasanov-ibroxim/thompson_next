import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, phone, enterprise, location, message } = body;

        // Validate required fields
        if (!name || !phone || !enterprise || !location) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Telegram configuration
        const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "7059423735:AAFgSJIt-KIxB7KB6hGwckuWfWOZ0tbbPYU";
        const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || "-4289057404";

        // Send to Telegram
        const text = `
📩 *Yangi murojaat*

👤 *Ism:* ${name}
📞 *Telefon:* ${phone}
🏢 *Korxona:* ${enterprise}
📍 *Joylashuv:* ${location}
💬 *Xabar:* ${message || '-'}

⏰ *Vaqt:* ${new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Tashkent' })}
        `.trim();

        const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

        const telegramResponse = await fetch(telegramUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: text,
                parse_mode: 'Markdown'
            })
        });

        const telegramData = await telegramResponse.json();

        if (!telegramData.ok) {
            console.error('Telegram Error:', telegramData);
        }

        // Send to Google Sheets
        const GOOGLE_SHEETS_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

        if (GOOGLE_SHEETS_URL) {
            try {
                const timestamp = new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Tashkent' });

                await fetch(GOOGLE_SHEETS_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name,
                        phone,
                        enterprise,
                        location,
                        message: message || '-',
                        timestamp
                    })
                });
            } catch (sheetsError) {
                console.error('Google Sheets Error:', sheetsError);
                // Don't fail the request if Sheets fails
            }
        }

        return NextResponse.json({
            success: true,
            message: 'Contact form submitted successfully'
        });

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
