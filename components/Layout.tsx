
import React, { useState, useEffect, useRef } from 'react';
import { 
  LayoutDashboard, 
  Target, 
  TrendingUp, 
  Library, 
  Film, 
  Settings,
  Moon,
  Sun,
  Database,
  ChevronLeft,
  PanelLeft,
  Timer,
  User
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { TempoSettingsModal } from './TempoSettingsModal';
import { AccountSettingsModal } from './AccountSettingsModal';

interface LayoutProps {
  children: React.ReactNode;
  activePage: string;
  onNavigate: (page: string) => void;
}

const NavItem: React.FC<{ 
  icon: React.ReactNode; 
  label: string; 
  active: boolean; 
  collapsed: boolean;
  onClick: () => void 
}> = ({ icon, label, active, collapsed, onClick }) => (
  <button
    onClick={onClick}
    title={collapsed ? label : undefined}
    className={`group flex items-center rounded-xl py-3 text-sm font-semibold transition-all duration-300 border border-transparent relative overflow-hidden ${
      active 
        ? 'bg-graphite-100 dark:bg-white/5 text-pacific-700 dark:text-pacific-400 border-pacific-200/50 dark:border-pacific-500/10' 
        : 'text-graphite-500 hover:bg-graphite-50 hover:text-graphite-900 dark:text-graphite-400 dark:hover:bg-white/5 dark:hover:text-graphite-200'
    } ${collapsed ? 'w-full justify-center px-2 gap-0' : 'w-full px-4 gap-3'}`}
  >
    {active && <div className={`absolute top-0 bottom-0 w-1 bg-pacific-500 rounded-r-full transition-all duration-300 ${collapsed ? 'left-0 h-full rounded-none' : 'left-0'}`}></div>}
    <span className={`${active ? 'text-pacific-600 dark:text-pacific-400' : 'text-graphite-400 group-hover:text-pacific-500 dark:group-hover:text-pacific-400 transition-colors'}`}>
      {icon}
    </span>
    <span className={`whitespace-nowrap transition-all duration-300 ${collapsed ? 'w-0 opacity-0 overflow-hidden' : 'w-auto opacity-100'}`}>
      {label}
    </span>
  </button>
);

const Layout: React.FC<LayoutProps> = ({ children, activePage, onNavigate }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [showTempoModal, setShowTempoModal] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();

  // Sidebar State
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setIsSettingsOpen(false);
      }
    }
    if (isSettingsOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSettingsOpen]);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background text-graphite-900 dark:text-graphite-50 font-sans transition-colors duration-500 flex-row">
      
      {/* Sidebar - Rich Graphite */}
      <aside className={`${isCollapsed ? 'w-[80px] px-3' : 'w-[280px] px-6'} flex-shrink-0 border-graphite-200 dark:border-graphite-800 bg-white dark:bg-graphite-900 py-6 flex flex-col relative z-20 transition-all duration-300 ease-in-out border-r`}>
        
        {/* LOGO REDESIGN */}
        <div className={`mb-10 transition-all duration-300 ${isCollapsed ? 'flex justify-center mt-6' : 'pl-6 mt-8'}`}>
          {!isCollapsed ? (
            <div className="group flex items-center justify-start select-none cursor-pointer">
              {/* P */}
              <span className="font-display text-3xl font-black tracking-tighter text-graphite-900 dark:text-white leading-none mr-[2px]">P</span>
              
              {/* THE PORTAL "O" */}
              <div className="relative h-7 w-7 mx-[1px] flex-shrink-0 flex items-center justify-center transition-transform duration-500 group-hover:rotate-180">
                 {/* Ambient Glow */}
                 <div className="absolute inset-[-6px] bg-pacific-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 
                 {/* Outer Ring - Pacific */}
                 <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-pacific-500 border-l-pacific-400 animate-[spin_3s_linear_infinite]" style={{boxShadow: '0 0 10px rgba(14, 165, 233, 0.1)'}}></div>
                 
                 {/* Inner Ring - Bali */}
                 <div className="absolute inset-[3px] rounded-full border-[2.5px] border-transparent border-b-bali-500 border-r-bali-400 animate-[spin_2s_linear_infinite_reverse]"></div>
                 
                 {/* Center Singularity */}
                 <div className="absolute h-1.5 w-1.5 bg-graphite-900 dark:bg-white rounded-full shadow-[0_0_8px_currentColor] animate-pulse"></div>
              </div>

              {/* RTAL */}
              <span className="font-display text-3xl font-black tracking-tighter text-graphite-900 dark:text-white leading-none ml-[2px]">RTAL</span>
            </div>
          ) : (
              /* Collapsed Icon - Just the Portal */
              <div className="relative h-10 w-10 flex items-center justify-center group cursor-pointer">
                  <div className="absolute inset-0 bg-pacific-500/20 blur-lg rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute inset-0 border-[3px] border-pacific-500 border-t-transparent border-l-transparent rounded-full animate-[spin_3s_linear_infinite]"></div>
                  <div className="absolute inset-[5px] border-[2.5px] border-bali-500 border-b-transparent border-r-transparent rounded-full animate-[spin_2s_linear_infinite_reverse]"></div>
                  <div className="absolute h-2 w-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
              </div>
          )}
        </div>

        <nav className="space-y-1.5 flex-1">
          <NavItem collapsed={isCollapsed} icon={<LayoutDashboard size={20} />} label="Dashboard" active={activePage === 'dashboard'} onClick={() => onNavigate('dashboard')} />
          <NavItem collapsed={isCollapsed} icon={<Target size={20} />} label="The Lab" active={activePage === 'lab'} onClick={() => onNavigate('lab')} />
          <NavItem collapsed={isCollapsed} icon={<TrendingUp size={20} />} label="History" active={activePage === 'history'} onClick={() => onNavigate('history')} />
          <NavItem collapsed={isCollapsed} icon={<Library size={20} />} label="Archives" active={activePage === 'archives'} onClick={() => onNavigate('archives')} />
          <NavItem collapsed={isCollapsed} icon={<Film size={20} />} label="Cinema" active={activePage === 'cinema'} onClick={() => onNavigate('cinema')} />
          <NavItem collapsed={isCollapsed} icon={<Database size={20} />} label="Database" active={activePage === 'database'} onClick={() => onNavigate('database')} />
        </nav>

        <div className="border-t border-graphite-200 dark:border-graphite-800 pt-6 space-y-2">
           {/* Sidebar Controls */}
           <div className={`flex items-center mb-2 ${isCollapsed ? 'justify-center' : 'justify-end px-2'}`}>
              <button 
                onClick={toggleSidebar}
                className="p-2 text-graphite-400 hover:text-graphite-900 dark:hover:text-white transition-colors rounded-lg hover:bg-graphite-50 dark:hover:bg-white/5"
                title={isCollapsed ? "Expand" : "Collapse"}
              >
                 {isCollapsed ? <PanelLeft size={18}/> : <ChevronLeft size={18}/>}
              </button>
           </div>

           <div className="relative" ref={settingsRef}>
             {isSettingsOpen && (
               <div className={`absolute bottom-full mb-3 rounded-2xl border border-graphite-200 dark:border-graphite-700 bg-white dark:bg-graphite-800 shadow-2xl p-2 animate-in slide-in-from-bottom-2 fade-in zoom-in-95 z-50 ${isCollapsed ? 'left-full ml-2 w-48' : 'left-0 right-0'}`}>
                  
                  {/* Tempo Settings */}
                  <button 
                    onClick={() => { setShowTempoModal(true); setIsSettingsOpen(false); }}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-graphite-600 dark:text-graphite-300 hover:bg-graphite-50 dark:hover:bg-graphite-700/50 transition-colors mb-1"
                  >
                    <Timer size={16} className="text-pacific-500"/>
                    Tempo & Structure
                  </button>

                  {/* Theme Toggle */}
                  <button 
                    onClick={toggleTheme}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-graphite-600 dark:text-graphite-300 hover:bg-graphite-50 dark:hover:bg-graphite-700/50 transition-colors mb-1"
                  >
                    <span className="flex items-center gap-2">
                       {theme === 'dark' ? <Moon size={16} className="text-pacific-400"/> : <Sun size={16} className="text-bali-500"/>}
                       Theme
                    </span>
                    <span className="text-xs font-bold uppercase text-graphite-400">{theme}</span>
                  </button>

                  {/* Account Settings - At the bottom of dropdown */}
                  <button 
                    onClick={() => { setShowAccountModal(true); setIsSettingsOpen(false); }}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-graphite-600 dark:text-graphite-300 hover:bg-graphite-50 dark:hover:bg-graphite-700/50 transition-colors"
                  >
                    <User size={16} className="text-pacific-500"/>
                    Account Settings
                  </button>
               </div>
             )}
             
             <button
               onClick={() => setIsSettingsOpen(!isSettingsOpen)}
               className={`flex items-center rounded-xl py-3 text-sm font-semibold text-graphite-500 hover:bg-graphite-50 hover:text-graphite-900 dark:text-graphite-400 dark:hover:bg-white/5 dark:hover:text-graphite-200 transition-all ${isCollapsed ? 'w-full justify-center px-0 gap-0' : 'w-full px-4 gap-3'}`}
               title="Settings"
             >
               <Settings size={20} className={`transition-transform duration-500 ${isSettingsOpen ? 'rotate-90 text-pacific-500' : 'group-hover:rotate-45'}`} />
               <span className={`whitespace-nowrap transition-all duration-300 ${isCollapsed ? 'w-0 opacity-0 overflow-hidden' : 'w-auto opacity-100'}`}>
                 Settings
               </span>
             </button>
           </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-graphite-50 dark:bg-graphite-950 p-6 lg:p-10 relative">
        <div className="mx-auto max-w-7xl h-full">
          {children}
        </div>
      </main>

      {showTempoModal && <TempoSettingsModal onClose={() => setShowTempoModal(false)} />}
      {showAccountModal && <AccountSettingsModal onClose={() => setShowAccountModal(false)} />}
    </div>
  );
};

export default Layout;
