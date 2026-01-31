import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Timer as TimerIcon, Zap } from 'lucide-react';

interface DeepWorkTimerProps {
  className?: string;
}

export const DeepWorkTimer: React.FC<DeepWorkTimerProps> = ({ className }) => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // Default 25m
  const [isActive, setIsActive] = useState(false);
  const [initialTime, setInitialTime] = useState(25 * 60);
  
  useEffect(() => {
    let interval: any = null;
    
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      // Optional: Play sound or notification here
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft]);

  const toggleTimer = () => setIsActive(!isActive);
  
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(initialTime);
  };

  const setPreset = (minutes: number) => {
    const seconds = minutes * 60;
    setInitialTime(seconds);
    setTimeLeft(seconds);
    setIsActive(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = initialTime > 0 ? ((initialTime - timeLeft) / initialTime) * 100 : 0;

  return (
    <div className={`rounded-2xl bg-white dark:bg-graphite-900 border border-graphite-200 dark:border-graphite-800 p-4 shadow-sm flex flex-col gap-3 relative overflow-hidden ${className || ''}`}>
      {/* Background Progress Bar (Subtle) */}
      <div className="absolute bottom-0 left-0 h-1 bg-pacific-500/20 w-full">
         <div className="h-full bg-pacific-500 transition-all duration-1000" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between">
         <div className="flex items-center gap-2 text-pacific-500">
            <Zap size={16} className={isActive ? "fill-pacific-500 animate-pulse" : ""} />
            <h3 className="text-xs font-bold uppercase tracking-wider">Deep Work</h3>
         </div>
         <button onClick={resetTimer} className="text-graphite-400 hover:text-graphite-600 dark:hover:text-white transition-colors" title="Reset">
            <RotateCcw size={14}/>
         </button>
      </div>

      {/* Main Control Row */}
      <div className="flex items-center gap-3">
          {/* Digital Display */}
          <div className="flex-1 flex items-center justify-center h-12 bg-graphite-50 dark:bg-graphite-950 rounded-xl border border-graphite-100 dark:border-graphite-800 relative">
             <span className={`font-mono text-3xl font-bold tracking-widest ${isActive ? 'text-graphite-900 dark:text-white' : 'text-graphite-400 dark:text-graphite-600'}`}>
                 {formatTime(timeLeft)}
             </span>
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={toggleTimer}
            className={`h-12 w-12 flex-shrink-0 flex items-center justify-center rounded-xl text-white shadow-md transition-all ${
                isActive
                ? 'bg-amber-500 hover:bg-amber-600 shadow-amber-500/20'
                : 'bg-pacific-600 hover:bg-pacific-500 shadow-pacific-500/20'
            }`}
          >
              {isActive ? <Pause size={20} fill="currentColor"/> : <Play size={20} fill="currentColor" className="ml-1"/>}
          </button>
      </div>

      {/* Presets - Compact Row */}
      <div className="grid grid-cols-4 gap-2">
          {[25, 45, 60, 90].map(m => (
              <button
                key={m}
                onClick={() => setPreset(m)}
                className="py-1 rounded-lg border border-graphite-200 dark:border-graphite-700 text-[10px] font-bold text-graphite-500 hover:text-pacific-500 hover:border-pacific-500 hover:bg-pacific-50 dark:hover:bg-pacific-900/10 transition-all"
              >
                  {m}m
              </button>
          ))}
      </div>
    </div>
  );
};