
import React, { useState, useEffect } from 'react';
import { Layers, Calendar } from 'lucide-react';
import { db } from '../services/mockDb';
import { CustomDatePicker } from './CustomDatePicker';

interface NewVersionModalProps {
  onClose: () => void;
  onCreate: (data: { title: string; description: string; number: number; startDate: string }) => void;
  suggestedNumber: number;
}

export const NewVersionModal: React.FC<NewVersionModalProps> = ({ onClose, onCreate, suggestedNumber }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [number, setNumber] = useState(suggestedNumber);
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [versionDays, setVersionDays] = useState(90); // Default, will fetch
  const [calculatedEndDate, setCalculatedEndDate] = useState('');

  useEffect(() => {
      // Fetch system settings
      db.getSystemSettings().then(settings => {
          setVersionDays(settings.days);
      });
  }, []);

  useEffect(() => {
      // Auto-calculate end date
      if (!startDate) {
          setCalculatedEndDate('-');
          return;
      }
      const start = new Date(startDate);
      if (isNaN(start.getTime())) {
          setCalculatedEndDate('-');
          return;
      }
      const end = new Date(start);
      end.setDate(start.getDate() + versionDays);
      setCalculatedEndDate(end.toLocaleDateString(undefined, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }));
  }, [startDate, versionDays]);

  const handleSubmit = () => {
      onCreate({ title, description, number, startDate });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-graphite-950/80 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="w-full max-w-lg rounded-2xl bg-white dark:bg-graphite-900 p-8 shadow-2xl animate-in zoom-in-95 duration-200 border border-graphite-200 dark:border-graphite-800" onClick={(e) => e.stopPropagation()}>
        <h2 className="mb-6 text-xl font-bold text-graphite-900 dark:text-white flex items-center gap-2">
            <div className="p-2 bg-pacific-100 text-pacific-600 rounded-lg"><Layers size={20}/></div>
            Initialize New Version
        </h2>
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1.5 block text-xs font-bold text-graphite-500 uppercase tracking-wide">Version ID</label>
                <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))} className="w-full rounded-xl bg-graphite-50 dark:bg-graphite-800 border border-graphite-200 dark:border-graphite-700 p-3 text-graphite-900 dark:text-white focus:border-pacific-500 focus:ring-2 focus:ring-pacific-500/20 focus:outline-none transition-all" />
              </div>
              <div>
                <CustomDatePicker 
                  label="Start Date" 
                  value={startDate} 
                  onChange={setStartDate} 
                />
              </div>
          </div>
          
          {/* Read-only calculation feedback */}
          <div className="p-3 bg-graphite-50 dark:bg-graphite-800/50 rounded-xl border border-graphite-200 dark:border-graphite-700 flex items-center gap-3">
              <Calendar size={16} className="text-pacific-500"/>
              <div className="text-xs">
                  <span className="text-graphite-500 uppercase font-bold tracking-wider">Projected End: </span>
                  <span className="text-graphite-900 dark:text-white font-mono">{calculatedEndDate}</span>
                  <span className="block text-[10px] text-graphite-400 mt-0.5">Based on system tempo of {versionDays} days.</span>
              </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-bold text-graphite-500 uppercase tracking-wide">Identity Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g., The Architect" className="w-full rounded-xl bg-graphite-50 dark:bg-graphite-800 border border-graphite-200 dark:border-graphite-700 p-3 text-graphite-900 dark:text-white focus:border-pacific-500 focus:ring-2 focus:ring-pacific-500/20 focus:outline-none transition-all" />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-bold text-graphite-500 uppercase tracking-wide">Persona Definition</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Define the archetype..." rows={3} className="w-full rounded-xl bg-graphite-50 dark:bg-graphite-800 border border-graphite-200 dark:border-graphite-700 p-3 text-graphite-900 dark:text-white focus:border-pacific-500 focus:ring-2 focus:ring-pacific-500/20 focus:outline-none transition-all resize-none" />
          </div>
          <div className="flex justify-end gap-3 pt-6">
             <button onClick={onClose} type="button" className="rounded-xl px-4 py-2 text-sm font-medium text-graphite-500 hover:text-graphite-800 dark:hover:text-graphite-200 transition-colors">Cancel</button>
             <button onClick={handleSubmit} type="button" className="rounded-xl bg-pacific-600 px-6 py-2.5 text-sm font-bold text-white hover:bg-pacific-500 transition-colors shadow-lg shadow-pacific-500/30">Initialize Version</button>
          </div>
        </div>
      </div>
    </div>
  );
};
