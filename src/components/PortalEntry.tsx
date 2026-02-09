import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

// Auth Components
import { AuthLayout } from './auth/AuthLayout';
import { LoginForm } from './auth/LoginForm';
import { SignUpForm } from './auth/SignUpForm';
import { GoogleAuthButton } from './auth/GoogleAuthButton';
import { VerificationSentView } from './auth/VerificationSentView';
import { ConflictResolutionView } from './auth/ConflictResolutionView';

interface PortalEntryProps {
  onEnter: () => void;
}

type AuthView = 'login' | 'signup' | 'verification-sent' | 'conflict';
type AnimationStage = 0 | 1 | 2 | 'auth';

const PortalEntry: React.FC<PortalEntryProps> = ({ onEnter }) => {
  const [stage, setStage] = useState<AnimationStage>(0);
  const [loading, setLoading] = useState(true);

  // Auth State
  const [currentView, setCurrentView] = useState<AuthView>('login');
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  // Form Data
  const [verificationEmail, setVerificationEmail] = useState('');
  const [conflictEmail, setConflictEmail] = useState('');
  const [conflictProvider, setConflictProvider] = useState<'google' | 'email'>('google');

  // n8n Webhook URL
  const N8N_WEBHOOK_URL = "https://danitrrga2.app.n8n.cloud/webhook-test/signup";

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      startAnimation();
    } else {
      setLoading(false);
      setStage('auth');
    }
  };

  const startAnimation = () => {
    setLoading(false);
    setStage(0);
    setTimeout(() => setStage(1), 500);
    setTimeout(() => setStage(2), 2500);
    setTimeout(() => onEnter(), 5500);
  };

  // Email/Password Login
  const handleEmailLogin = async (email: string, password: string) => {
    setAuthLoading(true);
    setAuthError(null);

    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
      if (signInError) throw signInError;

      // Success - start animation
      startAnimation();
    } catch (err: any) {
      setAuthError(err.message);
    } finally {
      setAuthLoading(false);
    }
  };

  // Email Sign Up (via n8n)
  const handleEmailSignUp = async (email: string, password: string, name: string) => {
    setAuthLoading(true);
    setAuthError(null);

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name })
      });

      const data = await response.json().catch(() => ({}));
      console.log('n8n Sign Up Response:', response.status, data);

      // Check for error in response body (n8n might return 200 with error in body)
      const errorMessage = data.error || data.message || data.msg || '';
      const isAlreadyRegistered =
        errorMessage.toLowerCase().includes('already been registered') ||
        errorMessage.toLowerCase().includes('already exists') ||
        errorMessage.toLowerCase().includes('user_already_exists') ||
        data.code === 'user_already_exists';

      if (!response.ok || isAlreadyRegistered) {
        // Handle 409 Conflict or "already registered" error
        if (response.status === 409 || isAlreadyRegistered) {
          const existingProvider = data.existingProvider || 'email';
          handleConflict(email, existingProvider);
          return;
        }

        throw new Error(errorMessage || `Sign up failed: ${response.statusText}`);
      }

      // Success - show verification sent view
      setVerificationEmail(email);
      setCurrentView('verification-sent');

    } catch (err: any) {
      setAuthError(err.message);
    } finally {
      setAuthLoading(false);
    }
  };

  // Google OAuth
  const handleGoogleLogin = async () => {
    setAuthError(null);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
          queryParams: {
            prompt: 'select_account'
          }
        }
      });
      if (error) throw error;
    } catch (err: any) {
      setAuthError(err.message);
    }
  };

  // Conflict Handler
  const handleConflict = (email: string, existingProvider: 'google' | 'email') => {
    setConflictEmail(email);
    setConflictProvider(existingProvider);
    setCurrentView('conflict');
    setAuthLoading(false);
  };

  // View Switchers
  const switchToLogin = () => {
    setCurrentView('login');
    setAuthError(null);
  };

  const switchToSignUp = () => {
    setCurrentView('signup');
    setAuthError(null);
  };

  // Loading Screen
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

  // Auth Screen
  if (stage === 'auth') {
    return (
      <AuthLayout>
        {currentView === 'login' && (
          <>
            <LoginForm
              onSubmit={handleEmailLogin}
              loading={authLoading}
              error={authError}
              onSwitchToSignUp={switchToSignUp}
            />

            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/[0.03]"></div>
              <span className="text-[7px] text-white/10 uppercase tracking-[0.5em] font-bold pl-[0.5em]">Network Protocol</span>
              <div className="h-px flex-1 bg-white/[0.03]"></div>
            </div>

            <GoogleAuthButton onClick={handleGoogleLogin} />
          </>
        )}

        {currentView === 'signup' && (
          <>
            <SignUpForm
              onSubmit={handleEmailSignUp}
              loading={authLoading}
              error={authError}
              onConflict={handleConflict}
              onSwitchToLogin={switchToLogin}
            />

            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/[0.03]"></div>
              <span className="text-[7px] text-white/10 uppercase tracking-[0.5em] font-bold pl-[0.5em]">Network Protocol</span>
              <div className="h-px flex-1 bg-white/[0.03]"></div>
            </div>

            <GoogleAuthButton onClick={handleGoogleLogin} />
          </>
        )}

        {currentView === 'verification-sent' && (
          <VerificationSentView
            email={verificationEmail}
            onReturnToLogin={switchToLogin}
          />
        )}

        {currentView === 'conflict' && (
          <ConflictResolutionView
            email={conflictEmail}
            existingProvider={conflictProvider}
            attemptedProvider="email"
            onSignInWithGoogle={handleGoogleLogin}
            onGoBack={switchToSignUp}
          />
        )}
      </AuthLayout>
    );
  }

  // Animation Screen
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-transparent ${stage === 2 ? 'pointer-events-none' : ''}`}>

      {/* The "Door" Logic - Two panels splitting */}
      <div
        className={`absolute inset-y-0 left-0 z-20 transition-transform duration-1500 ease-in-out border-r 
        bg-[#fafafa] dark:bg-[#18181b] border-zinc-200 dark:border-zinc-800
        ${stage === 2 ? '-translate-x-full' : 'translate-x-0'}`}
        style={{ width: '50%' }}
      />
      <div
        className={`absolute inset-y-0 right-0 z-20 transition-transform duration-1500 ease-in-out border-l 
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
          <div className={`absolute h-[1px] bg-zinc-300 dark:bg-zinc-700 transition-all duration-1200 ease-out delay-100
              ${stage >= 1 ? 'w-[400px] -translate-y-20 opacity-40' : 'w-0 translate-y-0 opacity-0'}`}
          />

          {/* Bottom Secondary Line */}
          <div className={`absolute h-[1px] bg-zinc-300 dark:bg-zinc-700 transition-all duration-1200 ease-out delay-100
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