import React, { useEffect } from "react";

const AdvancedAdSlot = () => {
  const targetUrl = "https://www.zenithummedia.com";
  const internalSlug = "/go/zenithum"; // The "Slash Redirect"

  useEffect(() => {
    // 1. AUTOMATIC IMPRESSION SHOOT
    // This fires as soon as the component mounts
    console.log("Impression Captured: Ad was displayed to user.");

    // If you have a tracking pixel or API, fire it here:
    // fetch('https://api.yourdomain.com/track-impression', { method: 'POST', body: { adId: 'zenithum-01' } });

    // 2. GPT SCRIPT INITIALIZATION
    window.googletag = window.googletag || { cmd: [] };
    window.googletag.cmd.push(function () {
      const slot = window.googletag.defineSlot(
        "/46138097/Third_party_Tracking/TP_300x250_3",
        [300, 250],
        "gpt-passback-container"
      );
      if (slot) {
        slot.addService(window.googletag.pubads());
        window.googletag.enableServices();
        window.googletag.display("gpt-passback-container");
      }
    });
  }, []);

  // 3. HIDDEN REDIRECT HANDLER
  const handleAdClick = (e) => {
    // If the click happened on the Google Ad, Google handles it.
    // If it falls through to our container (the photo), we handle it:
    console.log("Click Captured: Redirecting via internal route...");

    // You can log the click to your database here before redirecting
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  const containerStyle = {
    width: "300px",
    height: "250px",
    margin: "0 auto",
    backgroundImage: 'url("/images/your-photo.jpg")',
    backgroundSize: "cover",
    cursor: "pointer",
    position: "relative",
  };

  return (
    <div
      className="ad-wrapper"
      style={{ textAlign: "center", padding: "10px" }}
    >
      <p
        style={{ fontSize: "11px", color: "#999", textTransform: "uppercase" }}
      >
        Sponsored
      </p>

      {/* Clicking this div triggers the 'Hidden' redirect logic */}
      <div
        id="gpt-passback-container"
        style={containerStyle}
        onClick={handleAdClick}
      >
        {/* The Google Ad renders here */}
      </div>
      <div
        onClick={() => window.open(internalSlug, "_blank")}
        style={containerStyle}
      >
        {/* GPT Ad loads here */}
      </div>

      {/* 4. THE SLASH REDIRECT (Clean URL for SEO/Users) */}
      <div style={{ marginTop: "5px" }}>
        <a
          href={internalSlug}
          style={{ fontSize: "12px", color: "#007bff", textDecoration: "none" }}
        >
          {window.location.hostname}
          {internalSlug}
        </a>
      </div>
    </div>
  );
};

export default AdvancedAdSlot;
