"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function YandexMetrika() {
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window !== "undefined" && (window as any).ym) {
            (window as any).ym(106173768, "hit", pathname);
        }
    }, [pathname]);

    return null;
}
