import { useEffect } from 'react';
import { Home } from './Home';
import { useScrollDepth } from '@/hooks/useScrollAnimation';
import './App.css';

function App() {
  useScrollDepth();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }
  }, []);

  return <Home />;
}

export default App;
