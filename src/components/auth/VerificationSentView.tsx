import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface VerificationSentViewProps {
    email: string;
    onReturnToLogin: () => void;
}

export const VerificationSentView: React.FC<VerificationSentViewProps> = ({ email, onReturnToLogin }) => {
    return (
        <div className="flex flex-col items-center justify-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="h-16 w-16 rounded-full bg-pacific-500/10 flex items-center justify-center mb-6 ring-1 ring-pacific-500/30">
                <CheckCircle2 className="w-8 h-8 text-pacific-400" />
            </div>
            <h2 className="text-[18px] font-bold text-white tracking-wide mb-3">Verification Sent</h2>
            <p className="text-white/60 text-xs leading-relaxed max-w-[280px] mb-8">
                We've sent a verification link to <span className="text-pacific-300 font-medium">{email}</span>.
                Please check your inbox to activate your account.
            </p>
            <button
                onClick={onReturnToLogin}
                className="text-xs text-white/40 hover:text-white transition-colors"
            >
                Return to Login
            </button>
        </div>
    );
};
