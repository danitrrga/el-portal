"use client";

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import PortalEntry from '@/components/PortalEntry';
import Layout from '@/components/Layout';

export default function PortalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [hasEntered, setHasEntered] = useState(false);
    const [session, setSession] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkSession = async () => {
            const { data: { session: activeSession } } = await supabase.auth.getSession();
            setSession(activeSession);
            setLoading(false);
        };

        checkSession();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return () => subscription.unsubscribe();
    }, []);

    if (loading) {
        return <div className="h-screen w-full bg-background flex items-center justify-center">
            <div className="animate-pulse text-pacific-500 font-mono text-sm uppercase tracking-widest">Initializing...</div>
        </div>;
    }

    // If not logged in, PortalEntry will handle the login UI.
    // We don't render children yet to prevent unauthorized data fetching attempts.
    if (!session) {
        return <PortalEntry onEnter={() => { }} />; // PortalEntry shows login UI when no session
    }

    // If logged in but hasn't finished the animation
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* 
        PRE-LOADING STRATEGY: 
        Children are rendered immediately so they can start fetching data.
        PortalEntry is rendered OVER them (z-index 50) and handles the split-door animation.
      */}
            <Layout>
                {children}
            </Layout>

            {!hasEntered && (
                <PortalEntry onEnter={() => setHasEntered(true)} />
            )}
        </div>
    );
}
