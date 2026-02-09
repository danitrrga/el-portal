'use client';

import React, { useEffect, useState } from 'react';

interface AuthLayoutProps {
    children: React.ReactNode;
}

const StarParticles = ({ count }: { count: number }) => {
    const [particles, setParticles] = useState<{ top: string; left: string; opacity: number }[]>([]);

    useEffect(() => {
        const newParticles = [...Array(count)].map(() => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random()
        }));
        setParticles(newParticles);
    }, [count]);

    if (particles.length === 0) return null;

    return (
        <div className="absolute inset-0 opacity-[0.05]">
            {particles.map((p, i) => (
                <div
                    key={i}
                    className="absolute w-px h-px bg-white rounded-full"
                    style={{
                        top: p.top,
                        left: p.left,
                        opacity: p.opacity
                    }}
                />
            ))}
        </div>
    );
};

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#010101] transition-colors duration-1000 overflow-hidden font-sans select-none">

            {/* Cinematic Background Layers */}
            <div className="absolute inset-0">
                {/* Broad atmospheric Pacific-blue wash at bottom edge */}
                <div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-[100%] h-[60vh] bg-pacific-500/20 blur-[160px] rounded-[100%] opacity-100"></div>
                <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[40vh] bg-pacific-400/10 blur-[120px] rounded-[100%] animate-pulse duration-8000 transition-all"></div>

                {/* Global Film Grain Overlay */}
                <div
                    className="absolute inset-0 opacity-[0.09] mix-blend-overlay pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                    }}
                ></div>

                {/* Parallax Star Particles */}
                <StarParticles count={6} />
            </div>

            <div className="relative z-10 flex flex-col items-center w-full max-w-[440px] px-6 animate-in fade-in zoom-in-95 duration-1000">

                {/* Main Card - Professional Structural Re-architecture */}
                <div className="w-full relative group/card p-[1px] rounded-[34px] bg-gradient-to-br from-white/15 via-white/5 to-white/10 shadow-[0_60px_120px_-30px_rgba(0,0,0,1)]">

                    {/* Layer 2: High-Contrast Specular Highlights (The "Glint") */}
                    <div className="absolute inset-0 rounded-[34px] bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-1500 pointer-events-none group-hover/card:opacity-100"></div>

                    {/* Parent Surface Container (The Core) */}
                    <div className="relative rounded-[33px] bg-zinc-950/40 backdrop-blur-3xl overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">

                        {/* Industrial Mesh Texture (Top Head Section) */}
                        <div
                            className="absolute top-0 left-0 right-0 h-64 opacity-[0.1] mix-blend-soft-light pointer-events-none"
                            style={{
                                backgroundImage: `radial-gradient(circle at 3px 3px, white 1px, transparent 0)`,
                                backgroundSize: '16px 16px',
                                WebkitMaskImage: 'linear-gradient(175deg, black 20%, transparent 100%)',
                                maskImage: 'linear-gradient(175deg, black 20%, transparent 100%)'
                            }}
                        ></div>

                        {/* Internal Rim Lighting (Precision Edge) */}
                        <div className="absolute inset-0 rounded-[33px] border-t border-l border-white/10 pointer-events-none"></div>

                        {/* Card Content Interior */}
                        <div className="relative px-11 py-11">

                            {/* Branding Wordmark (Sidebar Sync) */}
                            <div className="flex flex-col items-center mb-10">
                                <div className="flex items-center justify-center select-none">
                                    <span className="font-sans text-4xl font-black tracking-tighter text-white leading-none mr-[2px]">P</span>
                                    <div className="relative h-8 w-8 mx-[1px] flex-shrink-0 flex items-center justify-center">
                                        <div className="absolute inset-0 rounded-full border-[3.5px] border-transparent border-t-pacific-500 border-l-pacific-400 animate-[spin_3.5s_linear_infinite]" style={{ boxShadow: '0 0 15px rgba(14, 165, 233, 0.3)' }}></div>
                                        <div className="absolute inset-[4px] rounded-full border-[2.5px] border-transparent border-b-bali-500 border-r-bali-400 animate-[spin_2.5s_linear_infinite_reverse]"></div>
                                        <div className="absolute h-1.5 w-1.5 bg-white rounded-full shadow-[0_0_10px_white]"></div>
                                    </div>
                                    <span className="font-sans text-4xl font-black tracking-tighter text-white leading-none ml-[2px]">RTAL</span>
                                </div>
                            </div>

                            {/* Children Content */}
                            {children}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
