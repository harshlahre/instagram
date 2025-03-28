"use client"

import { useEffect } from "react";
import Script from "next/script";

const AdSense = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense script error:", e);
    }
  }, []);

  return (
      <Script 
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2295806962223513`}
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />
  );
};

export default AdSense;
