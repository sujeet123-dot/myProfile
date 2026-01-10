import React, { useEffect } from 'react';

const AdBanner = () => {
  useEffect(() => {
    // 1. Define the command queue if it doesn't exist
    window.googletag = window.googletag || { cmd: [] };

    // 2. Push the ad logic to the command queue
    window.googletag.cmd.push(function() {
      // Define the slot
      const slot = window.googletag.defineSlot(
        '/46138097/Third_party_Tracking/TP_300x250_3', 
        [300, 250], 
        'gpt-passback'
      );
      
      if (slot) {
        slot.addService(window.googletag.pubads());
        window.googletag.enableServices();
        // Request the ad for the specific div ID
        window.googletag.display('gpt-passback');
      }
    });
  }, []);

  // Style for the container to hold your image
  const containerStyle = {
    width: '300px',
    height: '250px',
    margin: '0 auto',
    // Replace the URL below with your actual image path
    backgroundImage: 'url("/images/profile.png")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ddd' // Optional: adds a border around your image
  };

  return (
    <div className="ad-wrapper" style={{ textAlign: 'center', padding: '10px' }}>
  <p style={{ fontSize: '12px', color: '#666' }}>Sponsored Content</p>
  
  {/* 1. Wrap the anchor tag AROUND the ad div */}
  <a 
    href="https://www.zenithummedia.com" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ textDecoration: 'none', display: 'inline-block' }} // Added display block to capture clicks
  >
    {/* 2. The Ad renders inside this DIV */}
    <div id="gpt-passback-container" style={containerStyle}>
      {/* GPT will inject the iframe here. 
          If GPT fails, your background image in containerStyle will be clickable. */}
    </div>
  </a>
</div>
  );
};

export default AdBanner;