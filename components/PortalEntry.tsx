import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabase';
import { LogIn } from 'lucide-react';

interface PortalEntryProps {
  onEnter: () => void;
}

const PortalEntry: React.FC<PortalEntryProps> = ({ onEnter }) => {
  const [stage, setStage] = useState<0 | 1 | 2 | 'login'>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      startAnimation();
    } else {
      setLoading(false);
      setStage('login');
    }
  };

  const startAnimation = () => {
    setLoading(false);
    setStage(0);
    // Sequence
    setTimeout(() => setStage(1), 500);
    setTimeout(() => setStage(2), 2500);
    setTimeout(() => onEnter(), 5500);
  };

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin
      }
    });
  };

  if (stage === 'login') {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500">
        <div className="mb-8 flex items-center justify-center">
          {/* Logo (Static) */}
          <div className="relative h-16 w-16 mx-1.5 flex-shrink-0 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-[4px] border-transparent border-t-pacific-500 border-l-pacific-400" style={{ boxShadow: '0 0 25px rgba(14, 165, 233, 0.5)' }}></div>
            <div className="absolute inset-[6px] rounded-full border-[3px] border-transparent border-b-bali-500 border-r-bali-400"></div>
          </div>
        </div>

        <h1 className="font-display text-4xl font-bold text-zinc-900 dark:text-white mb-2">EL PORTAL</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mb-8 font-mono text-sm">Identity & Performance Operating System</p>

        <button
          onClick={handleGoogleLogin}
          className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
        >
          <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
          <span className="font-medium text-zinc-700 dark:text-zinc-200 group-hover:text-pacific-600 dark:group-hover:text-pacific-400">Sign in with Google</span>
        </button>
      </div>
    );
  }

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-transparent ${stage === 2 ? 'pointer-events-none' : ''}`}>

      {/* The "Door" Logic - Two panels splitting */}
      {/* Light Mode: #fafafa (Zinc 50), Dark Mode: #18181b (Zinc 900) */}
      <div
        className={`absolute inset-y-0 left-0 z-20 transition-transform duration-[1500ms] ease-in-out border-r 
        bg-[#fafafa] dark:bg-[#18181b] border-zinc-200 dark:border-zinc-800
        ${stage === 2 ? '-translate-x-full' : 'translate-x-0'}`}
        style={{ width: '50%' }}
      />
      <div
        className={`absolute inset-y-0 right-0 z-20 transition-transform duration-[1500ms] ease-in-out border-l 
        bg-[#fafafa] dark:bg-[#18181b] border-zinc-200 dark:border-zinc-800
        ${stage === 2 ? 'translate-x-full' : 'translate-x-0'}`}
        style={{ width: '50%' }}
      />

      {/* The Central Animation Container */}
      <div className={`relative z-30 flex items-center justify-center transition-all duration-700 ${stage === 2 ? 'scale-125 opacity-0' : 'scale-100 opacity-100'}`}>

        {/* Decorative Lines */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Main Center Line */}
          <div className={`absolute h-[1px] bg-zinc-900 dark:bg-white shadow-[0_0_20px_rgba(0,0,0,0.2)] dark:shadow-[0_0_20px_rgba(255,255,255,0.8)] transition-all duration-1000 ease-out 
              ${stage >= 1 ? 'w-[600px] opacity-100' : 'w-0 opacity-0'}`}
          />

          {/* Top Secondary Line */}
          <div className={`absolute h-[1px] bg-zinc-300 dark:bg-zinc-700 transition-all duration-[1200ms] ease-out delay-100
              ${stage >= 1 ? 'w-[400px] -translate-y-20 opacity-40' : 'w-0 translate-y-0 opacity-0'}`}
          />

          {/* Bottom Secondary Line */}
          <div className={`absolute h-[1px] bg-zinc-300 dark:bg-zinc-700 transition-all duration-[1200ms] ease-out delay-100
              ${stage >= 1 ? 'w-[400px] translate-y-20 opacity-40' : 'w-0 translate-y-0 opacity-0'}`}
          />

          {/* Vertical Scanner Line */}
          <div className={`absolute w-[1px] bg-pacific-500/50 transition-all duration-700 ease-in-out delay-300
              ${stage >= 1 ? 'h-40 opacity-100' : 'h-0 opacity-0'}`}
          />
        </div>

        {/* Logo Replacement - Centered with background to mask lines */}
        <div className={`relative z-10 flex items-center justify-center bg-[#fafafa] dark:bg-[#18181b] px-8 py-4 transition-all duration-1000 delay-300 ${stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* P */}
          <span className="font-display text-8xl font-black tracking-tighter text-zinc-900 dark:text-white leading-none mr-1.5">P</span>

          {/* THE PORTAL "O" */}
          <div className="relative h-16 w-16 mx-1.5 flex-shrink-0 flex items-center justify-center">
            {/* Outer Ring - Pacific */}
            <div className="absolute inset-0 rounded-full border-[4px] border-transparent border-t-pacific-500 border-l-pacific-400 animate-[spin_3s_linear_infinite]" style={{ boxShadow: '0 0 25px rgba(14, 165, 233, 0.5)' }}></div>

            {/* Inner Ring - Bali */}
            <div className="absolute inset-[6px] rounded-full border-[3px] border-transparent border-b-bali-500 border-r-bali-400 animate-[spin_2s_linear_infinite_reverse]"></div>

            {/* Center Singularity */}
            <div className="absolute h-3 w-3 bg-zinc-900 dark:bg-white rounded-full shadow-[0_0_15px_currentColor] animate-pulse"></div>
          </div>

          {/* RTAL */}
          <span className="font-display text-8xl font-black tracking-tighter text-zinc-900 dark:text-white leading-none ml-1.5">RTAL</span>
        </div>
      </div>
    </div>
  );
};

export default PortalEntry;