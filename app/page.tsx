// app/page.tsx - FIXED VERSION
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { i18n } from '@/i18n-config';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Client-side redirect to default locale
    router.replace(`/${i18n.defaultLocale}/`);
  }, [router]);

  return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
  );
}