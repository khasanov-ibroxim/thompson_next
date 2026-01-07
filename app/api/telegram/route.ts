import { NextResponse } from 'next/server';

const t = "7059423735:AAFgSJIt-KIxB7KB6hGwckuWfWOZ0tbbPYU"
const ch = "-4289057404"
export async function POST(req: Request) {
    try {
        const { name, phone, message  } = await req.json();
        const text = `
    📩 *Yangi murojaat*
    👤 Ism: ${name}
    📞 Telefon: ${phone}
    💬 Xabar: ${message || '-'}
        `;

        const response = await fetch(
            `https://api.telegram.org/bot${t}/sendMessage`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: ch,
                    text,
                    parse_mode: 'Markdown'
                })
            }
        );

        if (!response.ok) throw new Error('Telegram error');

        return NextResponse.json({ success: true });

    } catch (err) {
        console.error(err);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}