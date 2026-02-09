'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { CheckCircle2, XCircle, Loader2, ArrowRight } from 'lucide-react';
import { AuthLayout } from '@/components/auth/AuthLayout';

function VerifyEmailContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const verifyToken = async () => {
            const token = searchParams.get('token');
            const email = searchParams.get('email');

            if (!token || !email) {
                setStatus('error');
                setMessage('Missing verification parameters.');
                return;
            }

            try {
                const { data, error } = await supabase.rpc('verify_token', {
                    p_token: token,
                    p_email: email
                });

                if (error) {
                    throw error;
                }

                if (data && data[0]) {
                    if (data[0].success) {
                        setStatus('success');
                        setMessage(data[0].message);
                    } else {
                        setStatus('error');
                        setMessage(data[0].message);
                    }
                } else {
                    setStatus('error');
                    setMessage('An unexpected error occurred during verification.');
                }
            } catch (err: any) {
                console.error('Verification error:', err);
                setStatus('error');
                setMessage(err.message || 'Something went wrong.');
            }
        };

        verifyToken();
    }, [searchParams]);

    return (
        <AuthLayout>
            <div className="flex flex-col items-center justify-center text-center py-8">
                {status === 'loading' && (
                    <div className="flex flex-col items-center animate-in fade-in duration-500">
                        <div className="relative h-16 w-16 mb-8">
                            <div className="absolute inset-0 rounded-full border-2 border-pacific-500/20"></div>
                            <div className="absolute inset-0 rounded-full border-t-2 border-pacific-500 animate-spin"></div>
                        </div>
                        <h2 className="text-[18px] font-bold text-white tracking-wide mb-2">Decrypting Protocol</h2>
                        <p className="text-white/40 text-[10px] uppercase tracking-[0.4em]">Verifying Authentication Token</p>
                    </div>
                )}

                {status === 'success' && (
                    <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="h-20 w-20 rounded-full bg-pacific-500/10 flex items-center justify-center mb-8 ring-1 ring-pacific-500/30">
                            <CheckCircle2 className="w-10 h-10 text-pacific-400" />
                        </div>
                        <h2 className="text-[20px] font-bold text-white tracking-wide mb-3">Identity Confirmed</h2>
                        <p className="text-white/60 text-xs leading-relaxed max-w-[300px] mb-10">
                            {message}. Your access to the central matrix has been granted.
                        </p>
                        <button
                            onClick={() => router.push('/')}
                            className="w-full h-12 bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 rounded-[18px] text-white font-bold text-xs tracking-[0.2em] transition-all active:scale-[0.98] flex items-center justify-center gap-2 group/btn relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full duration-1000 transition-transform"></div>
                            <span className="pl-[0.15em]">ENTER PORTAL</span>
                            <ArrowRight className="w-3.5 h-3.5 text-pacific-400 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </div>
                )}

                {status === 'error' && (
                    <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="h-20 w-20 rounded-full bg-red-500/5 flex items-center justify-center mb-8 ring-1 ring-red-500/20">
                            <XCircle className="w-10 h-10 text-red-500/50" />
                        </div>
                        <h2 className="text-[20px] font-bold text-white tracking-wide mb-3">Protocol Failure</h2>
                        <p className="text-red-400/60 text-xs leading-relaxed max-w-[300px] mb-10">
                            {message}
                        </p>
                        <button
                            onClick={() => router.push('/')}
                            className="text-xs text-white/30 hover:text-white/60 transition-colors border-b border-white/10 pb-0.5"
                        >
                            Return to Homepage
                        </button>
                    </div>
                )}
            </div>
        </AuthLayout>
    );
}

export default function VerifyEmailPage() {
    return (
        <Suspense fallback={
            <div className="fixed inset-0 flex items-center justify-center bg-[#050505]">
                <Loader2 className="w-6 h-6 animate-spin text-pacific-500" />
            </div>
        }>
            <VerifyEmailContent />
        </Suspense>
    );
}
