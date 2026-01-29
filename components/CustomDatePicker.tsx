
import React, { useState, useEffect, useRef } from 'react';
import { Calendar, ChevronLeft, ChevronRight, X, Clock } from 'lucide-react';

interface CustomDatePickerProps {
  label: string;
  value: string;
  onChange: (date: string) => void;
}

export const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ label, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Default to today if no value, otherwise parse the YYYY-MM-DD string
  const [viewDate, setViewDate] = useState(() => {
      if (value) {
          // Parse "YYYY-MM-DD" explicitly to avoid timezone shifts
          const parts = value.split('-').map(Number);
          if (parts.length === 3 && !isNaN(parts[0])) {
             return new Date(parts[0], parts[1] - 1, parts[2]);
          }
      }
      return new Date();
  });
  
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Sync view if value changes externally, but only if widely different to allow browsing
  useEffect(() => {
      if (value) {
          const parts = value.split('-').map(Number);
          const date = new Date(parts[0], parts[1] - 1, parts[2]);
          if (!isNaN(date.getTime())) {
              if (date.getMonth() !== viewDate.getMonth() || date.getFullYear() !== viewDate.getFullYear()) {
                 setViewDate(date);
              }
          }
      }
  }, [value]);

  const formatDate = (dateStr: string) => {
    if (!dateStr) return 'Select Date';
    const parts = dateStr.split('-').map(Number);
    const date = new Date(parts[0], parts[1] - 1, parts[2]);
    if (isNaN(date.getTime())) return 'Select Date';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const changeMonth = (offset: number) => {
    const newDate = new Date(viewDate);
    newDate.setMonth(newDate.getMonth() + offset);
    setViewDate(newDate);
  };

  const handleDayClick = (day: number, type: 'prev' | 'current' | 'next') => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    
    let targetDate: Date;
    if (type === 'prev') {
        targetDate = new Date(year, month - 1, day);
    } else if (type === 'next') {
        targetDate = new Date(year, month + 1, day);
    } else {
        targetDate = new Date(year, month, day);
    }

    // Format to YYYY-MM-DD manually
    const y = targetDate.getFullYear();
    const m = String(targetDate.getMonth() + 1).padStart(2, '0');
    const d = String(targetDate.getDate()).padStart(2, '0');
    
    onChange(`${y}-${m}-${d}`);
    setIsOpen(false);
    setViewDate(targetDate);
  };

  const handleToday = () => {
      const today = new Date();
      const y = today.getFullYear();
      const m = String(today.getMonth() + 1).padStart(2, '0');
      const d = String(today.getDate()).padStart(2, '0');
      onChange(`${y}-${m}-${d}`);
      setViewDate(today);
      setIsOpen(false);
  };

  const handleClear = () => {
      onChange('');
      setIsOpen(false);
  };

  // Grid Generation Logic
  const generateGrid = () => {
      const year = viewDate.getFullYear();
      const month = viewDate.getMonth();
      
      const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0-6
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const daysInPrevMonth = new Date(year, month, 0).getDate();
      
      const days = [];
      
      // Prev Month Padding
      for (let i = firstDayOfMonth - 1; i >= 0; i--) {
          days.push({ day: daysInPrevMonth - i, type: 'prev' as const });
      }
      
      // Current Month
      for (let i = 1; i <= daysInMonth; i++) {
          days.push({ day: i, type: 'current' as const });
      }
      
      // Next Month Padding (Fill to 42 cells for 6 rows)
      const remaining = 42 - days.length;
      for (let i = 1; i <= remaining; i++) {
          days.push({ day: i, type: 'next' as const });
      }
      
      return days;
  };

  const grid = generateGrid();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  const isSelected = (day: number, type: string) => {
      if (!value) return false;
      const parts = value.split('-').map(Number);
      const selected = new Date(parts[0], parts[1] - 1, parts[2]);
      if (isNaN(selected.getTime())) return false;
      
      // Calculate the actual date of the cell
      const year = viewDate.getFullYear();
      const month = viewDate.getMonth();
      let checkDate: Date;
      
      if (type === 'prev') checkDate = new Date(year, month - 1, day);
      else if (type === 'next') checkDate = new Date(year, month + 1, day);
      else checkDate = new Date(year, month, day);

      return checkDate.getTime() === selected.getTime();
  };

  const isToday = (day: number, type: string) => {
      const today = new Date();
      // Normalize today
      today.setHours(0,0,0,0);
      
      const year = viewDate.getFullYear();
      const month = viewDate.getMonth();
      let checkDate: Date;
      
      if (type === 'prev') checkDate = new Date(year, month - 1, day);
      else if (type === 'next') checkDate = new Date(year, month + 1, day);
      else checkDate = new Date(year, month, day);

      return checkDate.getTime() === today.getTime();
  };

  return (
    <div className="relative" ref={containerRef}>
      <label className="mb-1.5 block text-xs font-bold text-graphite-500 uppercase tracking-wide">{label}</label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between rounded-xl bg-graphite-50 dark:bg-graphite-800 border p-3 text-sm transition-all
          ${isOpen ? 'border-pacific-500 ring-2 ring-pacific-500/20' : 'border-graphite-200 dark:border-graphite-700 hover:border-pacific-500/50'}
          ${value ? 'text-graphite-900 dark:text-white' : 'text-graphite-400'}
        `}
      >
        <span className="font-medium">{formatDate(value)}</span>
        <Calendar size={16} className="text-pacific-500" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full min-w-[300px] bg-white dark:bg-graphite-900 border border-graphite-200 dark:border-graphite-700 rounded-xl shadow-2xl z-50 p-4 animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <button type="button" onClick={() => changeMonth(-1)} className="p-1 hover:bg-graphite-100 dark:hover:bg-graphite-800 rounded-lg text-graphite-500 dark:text-graphite-400 transition-colors">
              <ChevronLeft size={20} />
            </button>
            <span className="text-sm font-bold text-graphite-900 dark:text-white">
              {monthNames[viewDate.getMonth()]} {viewDate.getFullYear()}
            </span>
            <button type="button" onClick={() => changeMonth(1)} className="p-1 hover:bg-graphite-100 dark:hover:bg-graphite-800 rounded-lg text-graphite-500 dark:text-graphite-400 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Weekdays */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
              <div key={d} className="text-center text-[10px] font-bold text-graphite-400 uppercase">
                {d}
              </div>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-1">
            {grid.map((cell, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleDayClick(cell.day, cell.type)}
                className={`
                  aspect-square flex items-center justify-center rounded-lg text-sm font-medium transition-all
                  ${isSelected(cell.day, cell.type) 
                    ? 'bg-pacific-500 text-white shadow-lg shadow-pacific-500/30' 
                    : isToday(cell.day, cell.type)
                        ? 'text-pacific-500 font-bold bg-pacific-50 dark:bg-pacific-900/10 hover:bg-pacific-100 dark:hover:bg-pacific-900/30'
                        : cell.type === 'current'
                            ? 'text-graphite-700 dark:text-graphite-300 hover:bg-graphite-100 dark:hover:bg-graphite-800'
                            : 'text-graphite-400/30 dark:text-graphite-600/30 hover:bg-graphite-50 dark:hover:bg-graphite-800/50'
                  }
                `}
              >
                {cell.day}
              </button>
            ))}
          </div>

          {/* Footer Actions */}
          <div className="mt-3 pt-3 border-t border-graphite-100 dark:border-graphite-800 flex items-center justify-between px-1">
             <button
               type="button"
               onClick={handleClear}
               className="flex items-center gap-1.5 text-xs font-bold text-graphite-400 hover:text-red-500 transition-colors"
             >
               <X size={14} /> Clear
             </button>
             <button
               type="button"
               onClick={handleToday}
               className="flex items-center gap-1.5 text-xs font-bold text-pacific-600 dark:text-pacific-400 hover:text-pacific-500 transition-colors"
             >
               <Clock size={14} /> Today
             </button>
          </div>
        </div>
      )}
    </div>
  );
};
