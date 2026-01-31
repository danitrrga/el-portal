
import React from 'react';

interface CycleProgressDonutProps {
  startDate?: string;
  endDate?: string;
  sprintNumber?: number;
}

export const CycleProgressDonut: React.FC<CycleProgressDonutProps> = ({ startDate, endDate, sprintNumber }) => {
  if (!startDate || !endDate) return null;

  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  const now = new Date().getTime();

  const totalDuration = end - start;
  const elapsed = now - start;
  
  // Calculate percentage passed
  const percentage = totalDuration > 0 
    ? Math.min(100, Math.max(0, (elapsed / totalDuration) * 100)) 
    : 0;
  
  const daysRemaining = Math.max(0, Math.ceil((end - now) / (1000 * 60 * 60 * 24)));

  // SVG Config
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-graphite-900 border border-graphite-200 dark:border-graphite-800 p-4 shadow-sm group h-full flex flex-col items-center justify-center">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-bali-50/50 via-white to-bali-50/20 dark:from-bali-900/10 dark:to-bali-900/5 opacity-100 dark:opacity-50 transition-all duration-1000"></div>
        
        <div className="relative z-10 flex flex-col items-center">
            <div className="text-[10px] font-bold uppercase tracking-wider text-bali-600 dark:text-bali-400 mb-2 flex items-center gap-1.5">
               Cycle {sprintNumber}
            </div>
            
            <div className="relative w-24 h-24 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                    {/* Background Ring */}
                    <circle 
                        className="text-graphite-100 dark:text-graphite-800" 
                        strokeWidth="8" 
                        stroke="currentColor" 
                        fill="transparent" 
                        r={radius} cx="50" cy="50" 
                    />
                    {/* Progress Ring */}
                    <circle
                        className="text-bali-500 transition-all duration-1000 ease-out drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]"
                        strokeWidth="8"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r={radius} cx="50" cy="50"
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
                    <span className="text-3xl font-display font-bold text-graphite-900 dark:text-white tracking-tighter">{daysRemaining}</span>
                    <span className="text-[8px] font-bold uppercase text-graphite-400 mt-1">Days Left</span>
                </div>
            </div>
        </div>
    </div>
  );
};
