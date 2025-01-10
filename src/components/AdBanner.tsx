"use client";

import React, { useEffect } from "react";

const AdBanner = () => {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {}
      );
    } catch (error: any) {
      console.log(error.message);
    }
  }, []);

  return (
    <>
      <script
       async
       src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2008420195999107`}
       crossOrigin="anonymous">
      </script>
      <ins
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-client="ca-pub-2008420195999107"
        data-ad-slot="3897612512"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
};

export default AdBanner;