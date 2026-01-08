// app/page.tsx
import { redirect } from 'next/navigation';
import { i18n } from '@/i18n-config';

export default function RootPage() {
    // ✅ Server-side redirect (works with Vercel)
    redirect(`/${i18n.defaultLocale}/`);
}