import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { LogIn, Mail, Lock, Eye, EyeOff, XCircle, Loader2, Apple } from 'lucide-react';

interface PortalEntryProps {
  onEnter: () => void;
}

const PortalEntry: React.FC<PortalEntryProps> = ({ onEnter }) => {
  const [stage, setStage] = useState<0 | 1 | 2 | 'login'>(0);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

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

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setError(null);

    try {
      if (isSignUp) {
        const { error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: window.location.origin,
          }
        });
        if (signUpError) throw signUpError;
        setError("Account created! Check your email to confirm.");
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
        if (signInError) throw signInError;
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setAuthLoading(false);
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
        redirectTo: window.location.origin,
        queryParams: {
          prompt: 'select_account'
        }
      }
    });
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]">
        <div className="relative flex flex-col items-center">
          <div className="h-12 w-12 rounded-full border-t-2 border-pacific-500 animate-spin mb-4"></div>
          <div className="text-white/20 font-mono text-[10px] uppercase tracking-[0.5em] animate-pulse">
            Verifying System Identity
          </div>
        </div>
      </div>
    );
  }

  if (stage === 'login') {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#010101] transition-colors duration-1000 overflow-hidden font-sans select-none">

        {/* Cinematic Background Layers */}
        <div className="absolute inset-0">
          {/* Broad atmospheric Pacific-blue wash at bottom edge */}
          <div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-[100%] h-[60vh] bg-pacific-500/20 blur-[160px] rounded-[100%] opacity-100"></div>
          <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[40vh] bg-pacific-400/10 blur-[120px] rounded-[100%] animate-pulse duration-[8s] transition-all"></div>

          {/* Global Film Grain Overlay */}
          <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }}>
          </div>

          {/* Parallax Star Particles */}
          <div className="absolute inset-0 opacity-[0.02]">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-px h-px bg-white rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random()
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center w-full max-w-[440px] px-6 animate-in fade-in zoom-in-95 duration-1000">

          {/* Main Login Card - Professional Structural Re-architecture */}
          <div className="w-full relative group/card p-[1px] rounded-[34px] bg-gradient-to-br from-white/15 via-white/5 to-white/10 shadow-[0_60px_120px_-30px_rgba(0,0,0,1)]">

            {/* Layer 2: High-Contrast Specular Highlights (The "Glint") */}
            <div className="absolute inset-0 rounded-[34px] bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-[1.5s] pointer-events-none"></div>

            {/* Parent Surface Container (The Core) */}
            <div className="relative rounded-[33px] bg-zinc-950/40 backdrop-blur-3xl overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">

              {/* Industrial Mesh Texture (Top Head Section) */}
              <div className="absolute top-0 left-0 right-0 h-48 opacity-[0.08] mix-blend-soft-light pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '16px 16px'
                }}>
              </div>

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

                <div className="mb-9 text-center">
                  <h2 className="text-[18px] font-bold text-white tracking-wide mb-1.5">{isSignUp ? "Initialize Identity" : "Authorize Access"}</h2>
                  <p className="text-white/20 text-[10px] leading-relaxed max-w-[220px] mx-auto">Access your secure encrypted performance hub.</p>
                </div>

                {error && (
                  <div className="mb-6 p-4 rounded-2xl bg-red-500/5 border border-red-500/15 flex items-center gap-3 animate-in slide-in-from-top-2">
                    <XCircle className="w-3.5 h-3.5 text-red-500/50 shrink-0" />
                    <p className="text-red-400/70 text-[10px] leading-tight">{error}</p>
                  </div>
                )}

                <form onSubmit={handleEmailAuth} className="space-y-4">
                  {/* Email Input Field */}
                  <div className="relative h-[54px] group/input">
                    <div className="absolute left-[18px] top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-10 h-4 w-4">
                      <Mail className="w-full h-full text-white/10 group-focus-within/input:text-pacific-400 transition-colors" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email address"
                      required
                      className="w-full h-full bg-black/40 border border-white/5 rounded-[18px] pl-[52px] pr-5 text-white placeholder:text-white/10 text-xs focus:outline-none focus:border-pacific-500/30 focus:bg-black/60 transition-all shadow-[inset_0_1px_6px_rgba(0,0,0,0.6)]"
                    />
                  </div>

                  {/* Password Input Field */}
                  <div className="relative h-[54px] group/input">
                    <div className="absolute left-[18px] top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-10 h-4 w-4">
                      <Lock className="w-full h-full text-white/10 group-focus-within/input:text-pacific-400 transition-colors" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      required
                      className="w-full h-full bg-black/40 border border-white/5 rounded-[18px] pl-[52px] pr-[52px] text-white placeholder:text-white/10 text-xs focus:outline-none focus:border-pacific-500/30 focus:bg-black/60 transition-all shadow-[inset_0_1px_6px_rgba(0,0,0,0.6)]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-[18px] top-1/2 -translate-y-1/2 flex items-center justify-center text-white/10 hover:text-white/30 transition-colors z-20 h-5 w-5"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>

                  <button
                    type="submit"
                    disabled={authLoading}
                    className="w-full h-12 bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 rounded-[18px] text-white font-bold text-xs tracking-[0.2em] transition-all active:scale-[0.98] flex items-center justify-center gap-2 group/btn relative overflow-hidden mt-3 shadow-lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full duration-1000 transition-transform"></div>
                    {authLoading ? (
                      <Loader2 className="w-4 h-4 animate-spin text-pacific-400" />
                    ) : (
                      <span className="pl-[0.15em]">{isSignUp ? "INITIALIZE" : "AUTHENTICATE"}</span>
                    )}
                  </button>
                </form>

                <div className="my-7 flex items-center gap-4">
                  <div className="h-px flex-1 bg-white/[0.03]"></div>
                  <span className="text-[7px] text-white/10 uppercase tracking-[0.5em] font-bold pl-[0.5em]">Network Protocol</span>
                  <div className="h-px flex-1 bg-white/[0.03]"></div>
                </div>

                <button
                  onClick={handleGoogleLogin}
                  className="w-full flex items-center justify-center gap-3.5 h-11 bg-black/30 hover:bg-black/50 border border-white/5 rounded-[18px] transition-all active:scale-[0.98] hover:border-pacific-500/20"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 opacity-70">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  <span className="text-white/30 text-[9px] font-bold tracking-widest uppercase pl-[0.1em]">Log in with Google</span>
                </button>

                <div className="mt-9 text-center">
                  <button
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="text-white/15 text-[8.5px] uppercase tracking-[0.5em] font-bold hover:text-pacific-400 transition-colors pl-[0.5em]"
                  >
                    {isSignUp ? "Identity Exists? Access" : "Request Portal Access"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
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