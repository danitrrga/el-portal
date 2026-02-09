import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, XCircle, Loader2, User } from 'lucide-react';

interface SignUpFormProps {
    onSubmit: (email: string, password: string, name: string) => Promise<void>;
    loading: boolean;
    error: string | null;
    onConflict: (email: string, existingProvider: 'google' | 'email') => void;
    onSwitchToLogin: () => void;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({
    onSubmit,
    loading,
    error,
    onConflict,
    onSwitchToLogin
}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [validationError, setValidationError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setValidationError(null);

        // Client-side validation
        if (password !== confirmPassword) {
            setValidationError("Passwords do not match.");
            return;
        }

        if (password.length < 6) {
            setValidationError("Password must be at least 6 characters.");
            return;
        }

        await onSubmit(email, password, name);
    };

    const displayError = validationError || error;

    return (
        <>
            <div className="mb-9 text-center">
                <h2 className="text-[18px] font-bold text-white tracking-wide mb-1.5">Sign Up</h2>
                <p className="text-white/40 text-[10px] leading-relaxed max-w-[220px] mx-auto">Create your secure encrypted performance hub.</p>
            </div>

            {displayError && (
                <div className="mb-6 p-4 rounded-2xl bg-red-500/5 border border-red-500/15 flex items-center gap-3 animate-in slide-in-from-top-2">
                    <XCircle className="w-3.5 h-3.5 text-red-500/50 shrink-0" />
                    <p className="text-red-400/70 text-[10px] leading-tight">{displayError}</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">

                {/* Name Input */}
                <div className="relative h-[54px] group/input animate-in slide-in-from-top-2 fade-in duration-300">
                    <div className="absolute left-[18px] top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-10 h-4 w-4">
                        <User className="w-full h-full text-white/20 group-focus-within/input:text-pacific-400 transition-colors" />
                    </div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full Name"
                        required
                        className="w-full h-full bg-black/40 border border-white/5 rounded-[18px] pl-[52px] pr-5 text-white placeholder:text-white/20 text-xs focus:outline-none focus:border-pacific-500/30 focus:bg-black/60 transition-all shadow-[inset_0_1px_6px_rgba(0,0,0,0.6)]"
                    />
                </div>

                {/* Email Input Field */}
                <div className="relative h-[54px] group/input">
                    <div className="absolute left-[18px] top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-10 h-4 w-4">
                        <Mail className="w-full h-full text-white/20 group-focus-within/input:text-pacific-400 transition-colors" />
                    </div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email address"
                        required
                        className="w-full h-full bg-black/40 border border-white/5 rounded-[18px] pl-[52px] pr-5 text-white placeholder:text-white/20 text-xs focus:outline-none focus:border-pacific-500/30 focus:bg-black/60 transition-all shadow-[inset_0_1px_6px_rgba(0,0,0,0.6)]"
                    />
                </div>

                {/* Password Input Field */}
                <div className="relative h-[54px] group/input">
                    <div className="absolute left-[18px] top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-10 h-4 w-4">
                        <Lock className="w-full h-full text-white/20 group-focus-within/input:text-pacific-400 transition-colors" />
                    </div>
                    <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        className="w-full h-full bg-black/40 border border-white/5 rounded-[18px] pl-[52px] pr-[52px] text-white placeholder:text-white/20 text-xs focus:outline-none focus:border-pacific-500/30 focus:bg-black/60 transition-all shadow-[inset_0_1px_6px_rgba(0,0,0,0.6)]"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-[18px] top-1/2 -translate-y-1/2 flex items-center justify-center text-white/10 hover:text-white/30 transition-colors z-20 h-5 w-5"
                    >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                </div>

                {/* Confirm Password Input */}
                <div className="relative h-[54px] group/input animate-in slide-in-from-top-2 fade-in duration-300">
                    <div className="absolute left-[18px] top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-10 h-4 w-4">
                        <Lock className="w-full h-full text-white/20 group-focus-within/input:text-pacific-400 transition-colors" />
                    </div>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm Password"
                        required
                        className="w-full h-full bg-black/40 border border-white/5 rounded-[18px] pl-[52px] pr-5 text-white placeholder:text-white/20 text-xs focus:outline-none focus:border-pacific-500/30 focus:bg-black/60 transition-all shadow-[inset_0_1px_6px_rgba(0,0,0,0.6)]"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 rounded-[18px] text-white font-bold text-xs tracking-[0.2em] transition-all active:scale-[0.98] flex items-center justify-center gap-2 group/btn relative overflow-hidden mt-3 shadow-lg"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full duration-1000 transition-transform"></div>
                    {loading ? (
                        <Loader2 className="w-4 h-4 animate-spin text-pacific-400" />
                    ) : (
                        <span className="pl-[0.15em]">INITIALIZE</span>
                    )}
                </button>
            </form>

            <div className="mt-9 text-center">
                <button
                    onClick={onSwitchToLogin}
                    className="text-white/15 text-[8.5px] uppercase tracking-[0.5em] font-bold hover:text-pacific-400 transition-colors pl-[0.5em]"
                >
                    Already have an account? Log in
                </button>
            </div>
        </>
    );
};
