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

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
      {/* This ID must match the one in defineSlot and display */}
      <div id="gpt-passback" style={{ width: '300px', height: '250px' }}></div>
    </div>
  );
};

export default AdBanner;