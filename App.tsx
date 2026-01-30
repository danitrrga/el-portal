import React, { useState, useEffect } from 'react';
import PortalEntry from './components/PortalEntry';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Lab from './pages/Lab';
import HistoryPage from './pages/HistoryPage';
import Cinema from './pages/Cinema';
import Archives from './pages/Archives';
import DatabasePage from './pages/DatabasePage';
import { ThemeProvider } from './contexts/ThemeContext';
// import { Profile } from './types'; // Unused for now in App level if PortalEntry handles auth gate

const App: React.FC = () => {
  const [hasEntered, setHasEntered] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');

  // Manual Hash Routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '');
      if (hash) {
        setActivePage(hash);
      } else {
        // Default route
        setActivePage('dashboard');
        window.location.hash = '#/dashboard';
      }
    };

    // Initialize
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePortalEnter = () => {
    setHasEntered(true);
  };

  const handleNavigate = (page: string) => {
    setActivePage(page);
    window.location.hash = `#/${page}`;
  };

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard': return <Dashboard />;
      case 'lab': return <Lab />;
      case 'history': return <HistoryPage />;
      case 'archives': return <Archives />;
      case 'cinema': return <Cinema />;
      case 'database': return <DatabasePage />;
      case 'settings': return <div className="text-zinc-500 p-8 font-display">System Configuration Placeholder</div>;
      default: return <Dashboard />;
    }
  };

  return (
    <ThemeProvider>
      {!hasEntered && <PortalEntry onEnter={handlePortalEnter} />}

      {/* 
        Only render the main layout functionality if we have entered.
        However, to keep the DOM stable during animation, we might want to render it hidden behind.
        But standard behavior is fine. 
      */}
      {hasEntered && (
        <div className="h-screen w-full animate-in fade-in duration-1000">
          <Layout activePage={activePage} onNavigate={handleNavigate}>
            {renderContent()}
          </Layout>
        </div>
      )}
    </ThemeProvider>
  );
};

export default App;