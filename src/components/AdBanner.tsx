"use client";

import React, { useEffect } from 'react';

type AdBannerProps = {
  adClient: string; // Google AdSense client ID
  adSlot: string; // Ad slot ID
  adFormat?: string; // Optional: Ad format (e.g., 'auto')
  fullWidthResponsive?: boolean; // Optional: Full-width responsive ads
  className?: string; // Optional: additional class names for styling
};

const AdBanner: React.FC<AdBannerProps> = ({
  adClient,
  adSlot,
  adFormat = 'auto',
  fullWidthResponsive = true,
  className = '',
}) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('AdSense error:', e);
      }
    }
  }, []);

  return (
    <div className={className} style={{ textAlign: 'center' }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
      ></ins>
    </div>
  );
};

export default AdBanner;