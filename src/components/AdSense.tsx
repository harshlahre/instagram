import Script from "next/script";

const AdSense = () => {

  return (
   <>
      <script 
        defer 
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2008420195999107`}
        crossOrigin="anonymous">
      </script>

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-8YPRPJ0BTG`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-8YPRPJ0BTG');
     `}
      </Script>
   </>
  );
};

export default AdSense;
