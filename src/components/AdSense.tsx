
const AdSense = () => {

  return (
   <>
      <script 
        defer 
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2008420195999107`}
        crossOrigin="anonymous">
      </script>

      <script
        defer
        src={`https://www.googletagmanager.com/gtag/js?id=G-8YPRPJ0BTG`}
      />
      <script defer id="google-analytics">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-8YPRPJ0BTG');
     `}
      </script>
   </>
  );
};

export default AdSense;
