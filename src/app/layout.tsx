import { Metadata } from "next";
import { DM_Sans as FontSans } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from "next/script";
import { Navbar, Footer } from "@/components/layout";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ReactQueryProvider } from "@/components/providers/react-query-provider";
import AdBanner from "@/components/AdBanner";
import { cn } from "@/lib/utils";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Instagram Video Downloader - iGram Saver",
  description: "iGramSaver is a Instagram Downloader tool to download instagram video, reels, and IGTV in HD quality directly to your mobile gallery, tablet or pc.",
  applicationName: 'iGram Saver',
  category: 'tools and utilities',
  alternates: {
    canonical: 'https://igramsaver.io'
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
    shortcut: ['/images/logo.png'],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  appleWebApp: {
    title: 'iGram Saver',
    statusBarStyle: 'black-translucent',
  },
  openGraph: {
    title: 'Instagram Video Downloader - iGram Saver',
    description: 'iGramSaver is a Instagram Downloader tool to download instagram video, reels, and IGTV in HD quality directly to your mobile gallery, tablet or pc.',
    url: 'https://igramsaver.io',
    locale: 'en-US',
    type: 'website',
    siteName: 'iGram Saver',
    images: [
      {
        url: 'http://igramsaver.io/images/main-image.webp',
        width: 500,
        height: 420,
        alt: 'Instagram Video Downloader',
      },
    ],
  }
};
const jsonLd = {
  "@context": "http://schema.org",
  "@graph": [
      {
          "@type": "WebSite",
          "name": "iGram Saver",
          "alternateName": [
              "Instagram Video Downloader",
              "iGramSaver",
              "IG Saver",
              "ig video downloader",
              "Insta Video Download"
          ],
          "url": "https://igramsaver.io"
      },
      {
          "@type": "WebPage",
          "name": "Instagram Video Downloader - iGram Saver",
          "speakable": {
              "@type": "SpeakableSpecification",
              "xpath": [
                  "/html/head/title",
                  "/html/head/meta[@name='description']/@content",
                  "/html/body/main//div[1]/h1"
              ]
          },
          "inLanguage": "en",
          "description": "iGramSaver is a Instagram Downloader tool to download instagram video, reels, and IGTV in HD quality directly to your mobile gallery, tablet or pc.",
          "url": "https://igramsaver.io"
      },
      {
          "@type": "Organization",
          "name": "iGram Saver",
          "alternateName": "Instagram video downloader",
          "url": "https://igramsaver.io",
          "email": "support@igramsaver.io",
          "logo": "https://igramsaver.io/images/logo.png"
      },
      {
          "@type": "WebApplication",
          "name": "iGram Saver",
          "alternateName": [
              "Instagram Video Downloader",
              "iGram Saver",
              "IG Saver",
              "ig video downloader",
              "Insta Video Download"
          ],
          "url": "https://igramsaver.io",
          "image": "https://igramsaver.io/images/logo.png",
          "operatingSystem": "Windows, Linux, iOS, Android, OSX, macOS",
          "applicationCategory": "UtilitiesApplication",
          "featureList": [
              "Video downloader",
              "Reel Downloader",
              "IGTV Downloader"
          ],
          "contentRating": "Everyone",
          "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.84",
              "reviewCount": "1655"
          },
          "offers": {
              "@type": "Offer",
              "price": "0"
          }
      },
      {
          "@type": "BreadcrumbList",
          "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
              "@id": "https://igramsaver.io",
              "name": "Instagram Video Downloader - iGram Saver"
            }
        }
    ]
      }
  ]
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" suppressHydrationWarning>
      <body
        className={cn(
          fontSans.variable,
          "overflow-x-hidden bg-background font-sans antialiased"
        )}
      >
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2008420195999107`}
          crossOrigin="anonymous"
        />
        <section>
      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ... */}
    </section>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryProvider>
            <Navbar />
            <div className="pisco">
        <AdBanner
        dataAdFormat="auto"
        dataFullWidthResponsive={true}
        dataAdSlot="8779273451"
     />
     </div>
            <main className="relative h-[calc(100vh-6rem)] overflow-y-auto px-2 sm:px-4">
              {children}
            </main>
            <Footer />
          </ReactQueryProvider>
        </ThemeProvider>
      <GoogleAnalytics gaId="G-8YPRPJ0BTG" />  
      </body>
    </html>
  );
}
