import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Redirector = () => {
  const { partnerSlug } = useParams();

  const partnerLinks = {
    'zenithum': 'https://www.zenithummedia.com',
    'another-partner': 'https://example.com'
  };

  useEffect(() => {
    const destination = partnerLinks[partnerSlug];

    if (destination) {
      // 1. Automatic Click Impression Shoot
      console.log(`Tracking Click for: ${partnerSlug}`);
      // fetch(`/api/track-click/${partnerSlug}`); // Send to your backend

      // 2. Perform the Hidden Redirect
      window.location.replace(destination);
    } else {
      // Fallback if the slug doesn't exist
      window.location.replace('/');
    }
  }, [partnerSlug]);

  return null; // Component stays hidden
};

export default Redirector;