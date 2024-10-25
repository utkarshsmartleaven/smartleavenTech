import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import ReactGA from 'react-ga'; // Import react-ga here

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if the cookie consent has been accepted
    const consent = Cookies.get('cookieConsent');
    if (consent) {
      setIsVisible(false); // If consent cookie exists, hide the banner
      ReactGA.initialize('Enter here you GA ID'); // Initialize GA here if consent is present
      ReactGA.pageview(window.location.pathname + window.location.search); // Send initial pageview
    }
  }, []);

  const handleAccept = () => {
    // Set the cookie only when the user accepts
    Cookies.set('cookieConsent', 'accepted', { expires: 365 }); // Set cookie for 365 days
    setIsVisible(false); // Hide the banner
    ReactGA.initialize('Enter here you GA ID'); // Initialize GA here on accept
    ReactGA.pageview(window.location.pathname + window.location.search); // Send pageview after consent
  };

  const handleDecline = () => {
    // Set the cookie when the user declines
    Cookies.set('cookieConsent', 'declined', { expires: 365 }); // Set cookie for 365 days
    setIsVisible(false); // Hide the banner
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 flex flex-col md:flex-row md:justify-between items-center shadow-lg z-50">
          <div className="mb-2 md:mb-0">
            <span className="text-sm">
              This website uses cookies to ensure you get the best experience. 
              <a href="/privacy-policy" className="underline ml-1 hover:text-blue-400">Learn more</a>
            </span>
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={handleAccept} 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-3 rounded transition duration-200"
            >
              Accept
            </button>
            <button 
              onClick={handleDecline} 
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-1 px-3 rounded transition duration-200"
            >
              Decline
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsentBanner;
