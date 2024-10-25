import React, { useEffect, useRef, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Home from './components/Home/Home';
import GridLoaderComponent from './components/Home/GridLoaderComponent';
import Playbook from './components/PlayBook/Playbook';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import './App.css';
import ReactGA from 'react-ga'; // Import react-ga
import CookieConsentBanner from "./components/Cookie/CookieConsentBanner"

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const playbookRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handlePageLoad = () => {
      setIsLoading(false); // Hide loader once everything is loaded
    };

    window.addEventListener('load', handlePageLoad);
    return () => {
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);

  const scrollToPlaybook = () => {
    playbookRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // if (isLoading) {
  //   return <GridLoaderComponent />; // Show loader while loading
  // }

  return (
    <HelmetProvider>
      <Helmet>
        <title>Smart Solutions for Industry 4.0</title>
        <meta
          name="description"
          content="Explore innovative solutions for smart factories and cities. Enhance operational efficiency and embrace digital transformation."
        />
        <meta name="keywords" content="Smart Factory, Industry 4.0, Smart City Solutions, Automation Technologies" />
        <meta name="author" content="Vijay Khupse" />
      </Helmet>
      <>
        <Home scrollToPlaybook={scrollToPlaybook} scrollToContact={scrollToContact} />
        <div ref={playbookRef}>
          <Playbook />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
        <Footer />
        <CookieConsentBanner />
      </>
    </HelmetProvider>
  );
}

export default App;
