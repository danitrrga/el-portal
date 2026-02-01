"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session) {
                router.push('/dashboard');
            } else {
                // If no session, we stay here. 
                // However, PortalLayout will handle common portal routes.
                // For the root page, we might want to just show the login or force go to a portal route that shows it.
                router.push('/dashboard'); // PortalLayout handles the login UI if no session
            }
        };
        checkSession();
    }, [router]);

    return (
        <div className="h-screen w-full bg-background flex items-center justify-center">
            <div className="animate-pulse text-pacific-500 font-mono text-sm uppercase tracking-widest">
                Redirecting to Portal...
            </div>
        </div>
    );
}
