import React from 'react';
import { AlertCircle } from 'lucide-react';
import { GoogleAuthButton } from './GoogleAuthButton';

interface ConflictResolutionViewProps {
    email: string;
    existingProvider: 'google' | 'email';
    attemptedProvider: 'google' | 'email';
    onSignInWithGoogle: () => Promise<void>;
    onGoBack: () => void;
}

export const ConflictResolutionView: React.FC<ConflictResolutionViewProps> = ({
    email,
    existingProvider,
    attemptedProvider,
    onSignInWithGoogle,
    onGoBack
}) => {
    const getMessage = () => {
        if (existingProvider === 'google' && attemptedProvider === 'email') {
            return `The email ${email} is already registered using Google. Please sign in with Google instead.`;
        }
        if (existingProvider === 'email' && attemptedProvider === 'google') {
            return `The email ${email} is already registered with a password. Please use email login instead.`;
        }
        return `This email is already registered with a different sign-in method.`;
    };

    return (
        <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="h-16 w-16 rounded-full bg-amber-500/10 flex items-center justify-center mb-6 ring-1 ring-amber-500/30">
                <AlertCircle className="w-8 h-8 text-amber-400" />
            </div>

            <h2 className="text-[18px] font-bold text-white tracking-wide mb-3">Account Already Exists</h2>

            <p className="text-white/60 text-xs leading-relaxed max-w-[280px] mb-8">
                {getMessage()}
            </p>

            <div className="w-full space-y-4">
                {existingProvider === 'google' && (
                    <GoogleAuthButton onClick={onSignInWithGoogle} />
                )}

                <button
                    onClick={onGoBack}
                    className="w-full text-xs text-white/40 hover:text-white transition-colors"
                >
                    Try different email
                </button>
            </div>
        </div>
    );
};
