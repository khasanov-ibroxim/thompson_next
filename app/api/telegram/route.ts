// app/api/telegram/route.ts
import { NextResponse } from 'next/server';

// ✅ Environment variables bilan ishlash
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "7059423735:AAFgSJIt-KIxB7KB6hGwckuWfWOZ0tbbPYU";
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || "-4289057404";

// ✅ CORS headerlar qo'shish
export async function OPTIONS(req: Request) {
    return new NextResponse(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}

export async function POST(req: Request) {
    try {
        // ✅ Request body ni to'g'ri parse qilish
        const body = await req.json();
        const { name, phone, message } = body;

        // ✅ Validatsiya
        if (!name || !phone) {
            return NextResponse.json(
                { success: false, error: 'Name and phone are required' },
                { status: 400 }
            );
        }

        // ✅ Telegram message formati
        const text = `
📩 *Yangi murojaat*

👤 *Ism:* ${name}
📞 *Telefon:* ${phone}
💬 *Xabar:* ${message || '-'}

⏰ *Vaqt:* ${new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Tashkent' })}
        `.trim();

        // ✅ Telegram API ga so'rov
        const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

        const response = await fetch(telegramUrl, {
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

        const data = await response.json();

        // ✅ Telegram API javobini tekshirish
        if (!response.ok || !data.ok) {
            console.error('Telegram API error:', data);
            return NextResponse.json(
                { success: false, error: 'Failed to send message to Telegram', details: data },
                { status: 500 }
            );
        }

        // ✅ Muvaffaqiyatli javob
        return NextResponse.json(
            { success: true, message: 'Message sent successfully' },
            {
                status: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            }
        );

    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json(
            {
                success: false,
                error: 'Internal server error',
                details: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}