import React, { useState, useEffect } from 'react';
import { X, LogOut, Pencil, Loader2 } from 'lucide-react';
import { supabaseService } from '@/lib/supabaseService';
import { supabase } from '@/lib/supabase';
import { Profile } from '@/types/types';

interface AccountSettingsModalProps {
  onClose: () => void;
}

export const AccountSettingsModal: React.FC<AccountSettingsModalProps> = ({ onClose }) => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [userData, setUserData] = useState<{ name?: string, email?: string, googleAvatar?: string } | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUserData({
          name: session.user.user_metadata?.full_name,
          email: session.user.email,
          googleAvatar: session.user.user_metadata?.avatar_url || session.user.user_metadata?.picture
        });
        const p = await supabaseService.getProfile();
        setProfile(p);
      }
    };
    fetchUserData();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      const publicUrl = await supabaseService.uploadAvatar(file);
      await supabaseService.updateProfile({ avatar_url: publicUrl });

      // Update local state
      setProfile((prev: Profile | null) => prev ? { ...prev, avatar_url: publicUrl } : null);
    } catch (error) {
      console.error('Error uploading avatar:', error);
      alert('Failed to upload avatar. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const currentAvatar = profile?.avatar_url || userData?.googleAvatar || `https://ui-avatars.com/api/?name=${userData?.name || 'User'}&background=0ea5e9&color=fff`;

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const fallback = `https://ui-avatars.com/api/?name=${userData?.name || 'User'}&background=0ea5e9&color=fff`;
    if (e.currentTarget.src !== fallback) {
      e.currentTarget.src = fallback;
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-graphite-950/80 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="w-full max-w-sm rounded-[2rem] bg-white dark:bg-graphite-900 shadow-2xl animate-in zoom-in-95 duration-300 border border-graphite-200 dark:border-graphite-800 p-8 pt-10" onClick={(e) => e.stopPropagation()}>

        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />

        <div className="flex justify-between items-start mb-10">
          <div>
            <h2 className="text-xl font-display font-black text-graphite-900 dark:text-white">
              Account Settings
            </h2>
          </div>
          <button onClick={onClose} className="p-2 text-graphite-400 hover:bg-graphite-100 dark:hover:bg-white/5 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="flex justify-between items-center mb-10 gap-6">
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-display font-bold text-graphite-900 dark:text-white tracking-tight truncate">
              {userData?.name || 'Authorized User'}
            </h3>
            <p className="text-xs font-medium text-graphite-500 dark:text-graphite-400 font-mono mt-1 truncate">
              {userData?.email}
            </p>
          </div>

          <div className="relative group cursor-pointer shrink-0" onClick={handleAvatarClick}>
            <div className="absolute inset-0 bg-pacific-500/20 blur-xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10">
              <img
                src={currentAvatar}
                className="w-16 h-16 rounded-full border-2 border-pacific-500/30 object-cover shadow-2xl transition-all duration-500 group-hover:brightness-75"
                alt=""
                onError={handleImageError}
              />

              {/* Pencil Overlay */}
              <div className="absolute top-0 right-0 p-1 bg-white dark:bg-graphite-800 rounded-full shadow-lg border border-graphite-100 dark:border-graphite-700 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100 translate-x-1/4 -translate-y-1/4">
                <Pencil size={10} className="text-pacific-500" />
              </div>

              {/* Uploading Overlay */}
              {uploading && (
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 rounded-full backdrop-blur-[2px]">
                  <Loader2 size={16} className="text-white animate-spin" />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={handleSignOut}
            className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-600 border border-red-100 dark:border-red-900/20 font-bold text-sm transition-all duration-300 group"
          >
            <LogOut size={18} className="transition-transform group-hover:-translate-x-1" />
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};
