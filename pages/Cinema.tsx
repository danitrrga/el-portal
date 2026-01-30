import React, { useEffect, useState, useRef } from 'react';
import { supabaseService } from '../services/supabaseService';
import { Slide, SlideCategory } from '../types';
import { Film, X, Edit3, ChevronLeft, ChevronRight, User, Heart, Briefcase, Users, Car, Upload, Image as ImageIcon } from 'lucide-react';

const Cinema: React.FC = () => {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ image_url: '', caption: '', gallery_images: [] as string[] });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const categoryOrder = [SlideCategory.ME, SlideCategory.HER, SlideCategory.PURPOSE, SlideCategory.SOCIAL, SlideCategory.MATERIAL];

  const getIconForCategory = (cat: SlideCategory) => {
    switch (cat) {
      case SlideCategory.ME: return <User size={18} />;
      case SlideCategory.HER: return <Heart size={18} />;
      case SlideCategory.PURPOSE: return <Briefcase size={18} />;
      case SlideCategory.SOCIAL: return <Users size={18} />;
      case SlideCategory.MATERIAL: return <Car size={18} />;
      default: return <Film size={18} />;
    }
  };

  useEffect(() => {
    supabaseService.getSlides().then(fetchedSlides => {
      const mergedSlides = categoryOrder.map(cat => {
        const existing = fetchedSlides.find(s => s.category === cat);
        return existing || {
          id: `temp-${cat}`,
          category: cat,
          image_url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1080',
          caption: `# ${cat} Vision\n\nDefine your vision for this area of life.`
        };
      });
      setSlides(mergedSlides);
    });
  }, []);

  const handleOpenSlide = (index: number) => {
    setActiveIndex(index);
    const slide = slides[index];
    setEditForm({ image_url: slide.image_url, caption: slide.caption, gallery_images: slide.gallery_images || [] });
    setIsEditing(false);
  };

  const handleCloseSlide = () => { setActiveIndex(null); setIsEditing(false); };
  const handleNext = () => { if (activeIndex !== null && activeIndex < slides.length - 1) handleOpenSlide(activeIndex + 1); };
  const handlePrev = () => { if (activeIndex !== null && activeIndex > 0) handleOpenSlide(activeIndex - 1); };

  const handleSave = async () => {
    if (activeIndex !== null) {
      const activeSlide = slides[activeIndex];
      const updatedSlide = { ...activeSlide, ...editForm };
      await supabaseService.updateSlide(updatedSlide);
      setSlides(prev => prev.map((s, i) => i === activeIndex ? updatedSlide : s));
      setIsEditing(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditForm(prev => ({ ...prev, image_url: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const activeSlide = activeIndex !== null ? slides[activeIndex] : null;

  const renderMarkdown = (text: string) => {
    return text.split('\n').map((line, i) => {
      if (line.startsWith('# ')) return <h1 key={i} className="text-3xl font-bold mb-4 text-graphite-900 dark:text-white tracking-tight">{line.replace('# ', '')}</h1>;
      if (line.startsWith('## ')) return <h2 key={i} className="text-xl font-bold mb-3 text-pacific-600 dark:text-pacific-300">{line.replace('## ', '')}</h2>;
      if (line.startsWith('- ')) return <li key={i} className="ml-4 mb-2 text-graphite-600 dark:text-graphite-300 list-none flex gap-3 items-start"><span className="text-pacific-500 mt-1.5 h-1.5 w-1.5 rounded-full bg-pacific-500 block flex-shrink-0"></span>{line.replace('- ', '')}</li>;
      if (line.trim() === '') return <br key={i} />;
      return <p key={i} className="mb-3 text-graphite-600 dark:text-graphite-300 leading-relaxed text-base">{line}</p>;
    });
  };

  return (
    <div className="min-h-full">
      <header className="mb-8">
        <h2 className="text-xs font-bold uppercase tracking-widest text-graphite-500 mb-1">Visualization Engine</h2>
        <h1 className="text-3xl font-display font-bold text-graphite-900 dark:text-white">The Cinema</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {slides.map((slide, idx) => (
          <div
            key={slide.category}
            onClick={() => handleOpenSlide(idx)}
            className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl bg-white dark:bg-graphite-900 shadow-md hover:shadow-xl dark:shadow-xl border border-graphite-200 dark:border-graphite-800 transition-all hover:scale-[1.02] hover:border-pacific-500/30"
          >
            <div className="absolute inset-0">
              <img src={slide.image_url} alt={slide.category} className="h-full w-full object-cover opacity-90 dark:opacity-80 transition-all duration-700 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent dark:from-graphite-950 dark:via-graphite-950/20 dark:to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="mb-2 flex items-center gap-2">
                <span className="flex items-center gap-2 rounded-lg bg-white/80 dark:bg-graphite-900/40 backdrop-blur-md px-3 py-1 text-xs font-bold text-graphite-900 dark:text-white uppercase border border-graphite-200 dark:border-white/10">
                  {getIconForCategory(slide.category)} {slide.category}
                </span>
              </div>
              <div className="text-xl font-bold text-graphite-900 dark:text-white line-clamp-1">
                {slide.caption.split('\n')[0].replace(/#/g, '').trim()}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ZEN MODE (Overlay) */}
      {activeSlide && (
        <div className="fixed inset-0 z-[100] flex bg-white/95 dark:bg-graphite-950/95 backdrop-blur-md animate-in fade-in duration-300">
          {activeIndex !== null && activeIndex > 0 && <button onClick={handlePrev} className="absolute left-6 top-1/2 -translate-y-1/2 z-50 p-4 text-graphite-400 hover:text-graphite-900 dark:text-white/50 dark:hover:text-white hover:bg-graphite-100 dark:hover:bg-white/10 rounded-full transition-all"><ChevronLeft size={32} /></button>}
          {activeIndex !== null && activeIndex < slides.length - 1 && <button onClick={handleNext} className="absolute right-6 top-1/2 -translate-y-1/2 z-50 p-4 text-graphite-400 hover:text-graphite-900 dark:text-white/50 dark:hover:text-white hover:bg-graphite-100 dark:hover:bg-white/10 rounded-full transition-all"><ChevronRight size={32} /></button>}

          {/* Mobile Close Button (Absolute) */}
          <button onClick={handleCloseSlide} className="md:hidden absolute top-6 right-6 z-50 text-graphite-400 hover:text-graphite-900 dark:text-white/50 dark:hover:text-white p-2 hover:bg-graphite-100 dark:hover:bg-white/10 rounded-full transition-all"><X size={24} /></button>

          <div className="flex w-full h-full flex-col md:flex-row">
            {/* Visuals */}
            <div className="flex-1 relative flex flex-col items-center justify-center p-8 overflow-hidden bg-graphite-50 dark:bg-black/40">
              <img src={activeSlide.image_url} className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl border border-graphite-200 dark:border-white/5" />
              {(activeSlide.gallery_images && activeSlide.gallery_images.length > 0) && (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 h-20 flex gap-2 overflow-x-auto p-2 bg-white/60 dark:bg-graphite-900/60 backdrop-blur-xl rounded-xl border border-graphite-200 dark:border-white/10 shadow-lg">
                  {activeSlide.gallery_images.map((url, i) => (
                    <div key={i} className="h-full aspect-square rounded-lg overflow-hidden cursor-pointer border border-graphite-300 dark:border-white/20 hover:border-pacific-500 dark:hover:border-white opacity-70 hover:opacity-100 transition-all">
                      <img src={url} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Narrative Panel */}
            <div className="w-full md:w-[450px] bg-white dark:bg-graphite-900 border-l border-graphite-200 dark:border-graphite-800 flex flex-col h-full shadow-2xl">
              {/* Panel Header - Fixed Height & Alignment */}
              <div className="flex items-center justify-between p-8 pb-6 shrink-0 bg-white dark:bg-graphite-900 z-10 border-b border-transparent">
                <span className="flex items-center gap-2 font-bold text-xs text-pacific-600 dark:text-pacific-400 uppercase tracking-widest">
                  {getIconForCategory(activeSlide.category)} {activeSlide.category}
                </span>
                <div className="flex items-center gap-4">
                  <button onClick={() => setIsEditing(!isEditing)} className="text-xs font-bold text-graphite-500 hover:text-pacific-600 dark:hover:text-white flex items-center gap-1.5 transition-colors py-1">
                    {isEditing ? 'Cancel' : 'Edit'} <Edit3 size={14} />
                  </button>
                  {/* Desktop Close Button - Vertically Aligned */}
                  <button onClick={handleCloseSlide} className="hidden md:flex text-graphite-400 hover:text-graphite-900 dark:text-white/50 dark:hover:text-white transition-colors p-1">
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto px-8 pb-8">
                {isEditing ? (
                  <div className="space-y-5 animate-in fade-in slide-in-from-right-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase text-graphite-400">Visual Source</label>
                      <div className="flex gap-2">
                        <input
                          value={editForm.image_url}
                          onChange={e => setEditForm({ ...editForm, image_url: e.target.value })}
                          className="flex-1 bg-graphite-50 dark:bg-graphite-800 border border-graphite-200 dark:border-graphite-700 p-3 rounded-xl text-graphite-900 dark:text-white text-sm focus:border-pacific-500 focus:outline-none"
                          placeholder="Image URL..."
                        />
                        <input
                          type="file"
                          ref={fileInputRef}
                          className="hidden"
                          accept="image/*"
                          onChange={handleFileUpload}
                        />
                        <button
                          onClick={() => fileInputRef.current?.click()}
                          className="p-3 bg-graphite-100 dark:bg-graphite-800 border border-graphite-200 dark:border-graphite-700 rounded-xl text-graphite-500 hover:text-pacific-500 hover:border-pacific-500 transition-all"
                          title="Upload Image"
                        >
                          <Upload size={18} />
                        </button>
                      </div>
                      <p className="text-[10px] text-graphite-400 flex items-center gap-1"><ImageIcon size={10} /> Paste a URL or upload a local file.</p>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase text-graphite-400">Narrative Protocol</label>
                      <textarea
                        value={editForm.caption}
                        onChange={e => setEditForm({ ...editForm, caption: e.target.value })}
                        className="w-full h-80 bg-graphite-50 dark:bg-graphite-800 border border-graphite-200 dark:border-graphite-700 p-4 rounded-xl text-graphite-900 dark:text-white text-sm focus:border-pacific-500 focus:outline-none resize-none leading-relaxed"
                        placeholder="# Title..."
                      />
                    </div>
                    <button onClick={handleSave} className="w-full py-4 bg-pacific-600 text-white font-bold text-sm rounded-xl hover:bg-pacific-500 transition-colors shadow-lg shadow-pacific-500/20">Save Changes</button>
                  </div>
                ) : (
                  <div className="prose prose-sm max-w-none prose-neutral dark:prose-invert">
                    {renderMarkdown(activeSlide.caption)}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cinema;