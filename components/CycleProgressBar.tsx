
import React from 'react';

interface CycleProgressBarProps {
  startDate: string;
  endDate: string;
  cycleNumber: number;
}

export const CycleProgressBar: React.FC<CycleProgressBarProps> = ({ startDate, endDate, cycleNumber }) => {
  if (!startDate || !endDate) return null;

  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  const now = new Date().getTime();

  const total = end - start;
  const current = now - start;
  
  const percentage = total > 0 ? Math.min(100, Math.max(0, (current / total) * 100)) : 0;
  
  const daysTotal = Math.max(1, Math.ceil(total / (1000 * 60 * 60 * 24)));
  const daysPassed = Math.min(daysTotal, Math.max(1, Math.ceil(current / (1000 * 60 * 60 * 24))));
  const daysRemaining = Math.max(0, Math.ceil((end - now) / (1000 * 60 * 60 * 24)));

  const formatDate = (dateStr: string) => {
      if (!dateStr) return '';
      const parts = dateStr.split('-').map(Number);
      const date = new Date(parts[0], parts[1] - 1, parts[2]);
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const getUrgencyColor = (days: number) => {
    if (days <= 3) return 'text-red-500 dark:text-red-400';
    if (days <= 7) return 'text-amber-500 dark:text-amber-400';
    return 'text-graphite-900 dark:text-white';
  };

  return (
    <div className="w-full mb-8 animate-in fade-in slide-in-from-top-2 duration-500">
      {/* Header Info */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-graphite-400">
             <div className="flex items-center gap-2 text-pacific-600 dark:text-pacific-400">
                <span className="w-1.5 h-1.5 rounded-full bg-pacific-500 animate-pulse"></span>
                Cycle {cycleNumber}
             </div>
             <span className="text-graphite-300 dark:text-graphite-700">|</span>
             <span className="font-mono text-graphite-500 dark:text-graphite-400">{formatDate(startDate)} — {formatDate(endDate)}</span>
        </div>
        <div className="text-[10px] font-bold uppercase tracking-widest text-graphite-400">
             Day {daysPassed} <span className="text-graphite-300 dark:text-graphite-700">/</span> {daysTotal}
        </div>
      </div>

      {/* Progress Section */}
      <div className="flex items-center gap-6">
        {/* Bar */}
        <div className="flex-1 h-3 bg-graphite-100 dark:bg-graphite-800 rounded-full overflow-hidden relative">
             <div 
              className="h-full bg-gradient-to-r from-pacific-500 to-bali-500 transition-all duration-1000 ease-out rounded-full shadow-[0_0_10px_rgba(14,165,233,0.3)] relative" 
              style={{ width: `${percentage}%` }}
             >
                <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]" style={{backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)'}}></div>
             </div>
        </div>

        {/* Days Left - Redesigned to be cleaner/thematic */}
        <div className="flex items-center gap-3 pl-6 border-l-2 border-graphite-100 dark:border-graphite-800/50">
            <div className={`text-3xl font-display font-bold leading-none tracking-tight ${getUrgencyColor(daysRemaining)}`}>
                {daysRemaining}
            </div>
            <div className="flex flex-col justify-center">
                <span className="text-[9px] font-bold uppercase text-graphite-400 leading-tight">Days</span>
                <span className="text-[9px] font-bold uppercase text-graphite-400 leading-tight">Left</span>
            </div>
        </div>
      </div>
    </div>
  );
};
