
import React, { useState, useEffect } from 'react';
import { Timer, AlertTriangle, Save, X } from 'lucide-react';
import { supabaseService } from '@/lib/supabaseService';

interface TempoSettingsModalProps {
  onClose: () => void;
}

export const TempoSettingsModal: React.FC<TempoSettingsModalProps> = ({ onClose }) => {
  const [days, setDays] = useState(90);
  const [cycles, setCycles] = useState(6);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const settings = await supabaseService.getSystemSettings();
        setDays(settings.days);
        setCycles(settings.cycles);
      } catch (e) {
        console.error("Failed to load settings", e);
      } finally {
        setLoading(false);
      }
    };
    fetchSettings();
  }, []);

  const handleSave = async () => {
    setLoading(true);
    await supabaseService.updateSystemSettings(days, cycles);
    setLoading(false);
    onClose();
  };

  const sprintLength = cycles > 0 ? (days / cycles).toFixed(1) : 0;
  const isCleanDivison = days % cycles === 0;

  if (loading) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-graphite-950/80 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="w-full max-w-md rounded-2xl bg-white dark:bg-graphite-900 p-8 shadow-2xl animate-in zoom-in-95 duration-200 border border-graphite-200 dark:border-graphite-800" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-bold text-graphite-900 dark:text-white flex items-center gap-2">
              <div className="p-2 bg-pacific-100 dark:bg-pacific-900/20 text-pacific-600 dark:text-pacific-400 rounded-lg"><Timer size={20} /></div>
              Tempo & Structure
            </h2>
            <p className="text-xs text-graphite-500 mt-2">Define the rhythm of your versions.</p>
          </div>
          <button onClick={onClose} className="text-graphite-400 hover:text-white"><X size={20} /></button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="mb-1.5 block text-xs font-bold text-graphite-500 uppercase tracking-wide">Total Version Days</label>
            <input
              type="number"
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="w-full rounded-xl bg-graphite-50 dark:bg-graphite-800 border border-graphite-200 dark:border-graphite-700 p-3 text-graphite-900 dark:text-white focus:border-pacific-500 focus:ring-2 focus:ring-pacific-500/20 focus:outline-none transition-all"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-bold text-graphite-500 uppercase tracking-wide">Cycles per Version</label>
            <input
              type="number"
              value={cycles}
              onChange={(e) => setCycles(Number(e.target.value))}
              className="w-full rounded-xl bg-graphite-50 dark:bg-graphite-800 border border-graphite-200 dark:border-graphite-700 p-3 text-graphite-900 dark:text-white focus:border-pacific-500 focus:ring-2 focus:ring-pacific-500/20 focus:outline-none transition-all"
            />
          </div>

          <div className={`p-4 rounded-xl border ${isCleanDivison ? 'bg-pacific-50 dark:bg-pacific-900/10 border-pacific-200 dark:border-pacific-800' : 'bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-800'}`}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold uppercase text-graphite-500">Calculated Sprint Length</span>
              <span className={`text-lg font-bold ${isCleanDivison ? 'text-pacific-600 dark:text-pacific-400' : 'text-red-500'}`}>{sprintLength} Days</span>
            </div>
            {!isCleanDivison && (
              <div className="flex items-start gap-2 mt-2 text-red-500 text-xs font-medium">
                <AlertTriangle size={14} className="shrink-0 mt-0.5" />
                Days must be perfectly divisible by cycles to ensure equal sprint lengths.
              </div>
            )}
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button onClick={onClose} type="button" className="rounded-xl px-4 py-2 text-sm font-medium text-graphite-500 hover:text-graphite-800 dark:hover:text-graphite-200 transition-colors">Cancel</button>
            <button
              onClick={handleSave}
              disabled={!isCleanDivison || days <= 0 || cycles <= 0}
              className="rounded-xl bg-pacific-600 px-6 py-2.5 text-sm font-bold text-white hover:bg-pacific-500 transition-colors shadow-lg shadow-pacific-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Save size={16} /> Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
