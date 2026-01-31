"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.push('/dashboard');
    }, [router]);

    return (
        <div className="h-screen w-full bg-background flex items-center justify-center">
            <div className="animate-pulse text-pacific-500 font-mono text-sm uppercase tracking-widest">
                Redirecting to Portal...
            </div>
        </div>
    );
}
