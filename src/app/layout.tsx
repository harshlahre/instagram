import { Metadata } from "next";
import { DM_Sans as FontSans } from "next/font/google";

import { Navbar, Footer } from "@/components/layout";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { ReactQueryProvider } from "@/components/providers/react-query-provider";

import { cn } from "@/lib/utils";

import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Insta Load - Download Instagram Videos, Reels & IGTV",
  description: "Insta  Load is an Instagram video downloader tool that can be used to download IG videos, reels, and IGTV directly to your mobile or computer.",
  openGraph: {
    title: 'Insta Load - Download Instagram Videos, Reels & IGTV',
    description: 'Insta Load is an Instagram video downloader tool that can be used to download IG videos, reels, and IGTV directly to your mobile or computer.',
    url: 'https://instaload.hindisink.com',
    locale: 'en',
    type: 'website',
    siteName: 'Insta Load',
    images: [
      {
        url: 'http://instaload.hindisink.com/images/instagram-bg.webp',
        width: 654,
        height: 500,
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
          "name": "Insta Load",
          "alternateName": [
              "Instagram Video Downloader",
              "Instaload",
              "Instaloader",
              "ig video downloader",
              "Insta Video Download"
          ],
          "url": "https://instaload.hindisink.com"
      },
      {
          "@type": "WebPage",
          "name": "Insta Load - Download Instagram Videos, Reels & IGTV",
          "speakable": {
              "@type": "SpeakableSpecification",
              "xpath": [
                  "/html/head/title",
                  "/html/head/meta[@name='description']/@content",
                  "/html/body/main//div[1]/h1"
              ]
          },
          "inLanguage": "en",
          "description": "Insta Load is an Instagram video downloader tool that can be used to download IG videos, reels, and IGTV directly to your mobile or computer.",
          "url": "https://instaload.hindisink.com"
      },
      {
          "@type": "Organization",
          "name": "Insta Load",
          "alternateName": "Instagram video downloader",
          "url": "https://instaload.hindisink.com",
          "email": "contact@hindisink.com",
          "logo": "https://instaload.hindisink.com/images/logo.png"
      },
      {
          "@type": "WebApplication",
          "name": "InstaLoad",
          "alternateName": [
              "Instagram Video Downloader",
              "Instaload",
              "Instaloader",
              "ig video downloader",
              "Insta Video Download"
          ],
          "url": "https://instaload.hindisink.com",
          "image": "https://instaload.hindisink.com/images/logo.png",
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
              "ratingValue": "4.83",
              "reviewCount": "1472"
          },
          "offers": {
              "@type": "Offer",
              "price": "0"
          }
      }
  ]
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          fontSans.variable,
          "overflow-x-hidden bg-background font-sans antialiased"
        )}
      >
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
            <main className="relative h-[calc(100vh-6rem)] overflow-y-auto px-2 sm:px-4">
              {children}
            </main>
            <Footer />
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
