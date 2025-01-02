"use client";

import { useEffect } from "react";
import Script from "next/script";

const AdBanner = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense loading error:", e);
    }
  }, []);

  return (
    <div>
      <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2008420195999107`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
    <ins
      className="adsbygoogle"
      style={{ display: "block", textAlign: "center" }}
      data-ad-client="ca-pub-2008420195999107"
      data-ad-slot="8779273451"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
    <script>
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </script>
      </div>
  );
};

export default AdBanner;