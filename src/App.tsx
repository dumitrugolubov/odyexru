import React from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/hero/Hero';
import { Features } from './components/features/Features';
import { Partners } from './components/partners/Partners';
import { CookieConsent } from './components/CookieConsent';
import { About } from './pages/About';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';

function App() {
  const path = window.location.pathname;

  const getContent = () => {
    switch (path) {
      case '/about':
        return <About />;
      case '/terms':
        return <Terms />;
      case '/privacy':
        return <Privacy />;
      default:
        return (
          <Layout>
            <Hero />
            <Features />
            <Partners />
            <CookieConsent />
          </Layout>
        );
    }
  };

  return getContent();
}

export default App;