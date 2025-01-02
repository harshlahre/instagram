"use client";

import React, { useEffect } from "react";

const AdBanner = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense script error:", e);
    }
  }, []);

  return (
    <>
      <ins
        className="adsbygoogle"
        style={{ display: "inline-block", width: "300px", height: "250px" }}
        data-ad-client="ca-pub-2008420195999107"
        data-ad-slot="3897612512"
      ></ins>
      <script>
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </script>
    </>
  );
};

export default AdBanner;