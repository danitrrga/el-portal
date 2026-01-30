import React, { useState, useEffect } from 'react';
import { User, X, LogOut } from 'lucide-react';
import { supabaseService } from '../services/supabaseService';
import { supabase } from '../services/supabase';
import { Profile } from '../types';

interface AccountSettingsModalProps {
  onClose: () => void;
}

export const AccountSettingsModal: React.FC<AccountSettingsModalProps> = ({ onClose }) => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    // Fetch Profile
    const fetchProfile = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setEmail(session.user.email || null);
        const p = await supabaseService.getProfile();
        setProfile(p);
      }
    };
    fetchProfile();
  }, []);

  const handleSignOut = async () => {
    await supabaseService.signOut();
    window.location.reload(); // Reload to trigger PortalEntry login check
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-graphite-950/80 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="w-full max-w-md rounded-2xl bg-white dark:bg-graphite-900 p-8 shadow-2xl animate-in zoom-in-95 duration-200 border border-graphite-200 dark:border-graphite-800" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-bold text-graphite-900 dark:text-white flex items-center gap-2">
              <div className="p-2 bg-pacific-100 dark:bg-pacific-900/20 text-pacific-600 dark:text-pacific-400 rounded-lg"><User size={20} /></div>
              Account Settings
            </h2>
            <p className="text-xs text-graphite-500 mt-2">Manage user identity and system data.</p>
          </div>
          <button onClick={onClose} className="text-graphite-400 hover:text-white"><X size={20} /></button>
        </div>

        <div className="space-y-6">
          {profile && (
            <div className="flex items-center gap-4 p-4 bg-graphite-50 dark:bg-graphite-800 rounded-xl border border-graphite-200 dark:border-graphite-700">
              <img src={profile.avatar_url || "https://picsum.photos/200"} className="w-12 h-12 rounded-full bg-graphite-200 object-cover" alt="Avatar" />
              <div>
                <div className="text-sm font-bold text-graphite-900 dark:text-white">{email}</div>
                <div className="text-xs text-graphite-500 font-mono mt-0.5">ID: {profile.id.slice(0, 8)}...</div>
              </div>
            </div>
          )}

          <div className="space-y-3 pt-2">
            <button
              onClick={handleSignOut}
              className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/20 border border-red-100 dark:border-red-900/30 font-bold text-sm transition-colors"
            >
              <LogOut size={16} /> Sign Out
            </button>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button onClick={onClose} className="px-6 py-2 bg-graphite-100 dark:bg-graphite-800 text-graphite-600 dark:text-graphite-300 rounded-xl text-sm font-bold hover:bg-graphite-200 dark:hover:bg-graphite-700 transition-colors">Close</button>
        </div>
      </div>
    </div>
  );
};

