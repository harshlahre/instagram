import { useEffect } from "react";

const AdSense = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense loading error:", e);
    }
  }, []);

  return (
    <script 
      defer 
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2008420195999107`}
      crossOrigin="anonymous">
    </script>
  );
};

export default AdSense;
