import { Metadata } from "next";
import { DM_Sans as FontSans } from "next/font/google";
import type { Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Navbar, Footer } from "@/components/layout";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ReactQueryProvider } from "@/components/providers/react-query-provider";

import { cn } from "@/lib/utils";

import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  themeColor: "#4285f4",
};

export const metadata: Metadata = {
  title: "Instagram Reels & Video Downloader - iGram Saver",
  description:
    "iGram Saver is an Instagram Downloader tool to download instagram video, reels, and IGTV in 4k HD quality directly to your mobile gallery, tablet or pc.",
  applicationName: "iGram Saver",
  category: "tools and utilities",
  alternates: {
    canonical: "https://igramsaver.io",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" }],
    shortcut: ["/images/logo.png"],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  appleWebApp: {
    title: "iGram Saver",
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    title: "Instagram Reels & Video Downloader - iGram Saver",
    description:
      "iGram Saver is an Instagram Downloader tool to download instagram video, reels, and IGTV in 4k HD quality directly to your mobile gallery, tablet or pc.",
    url: "https://igramsaver.io",
    locale: "en-US",
    type: "website",
    siteName: "iGram.IO",
    images: [
      {
        url: "http://igramsaver.io/images/main-image.webp",
        width: 500,
        height: 420,
        alt: "Instagram Video Saver",
      },
    ],
  },
};

const jsonLd = {
  "@context": "http://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "iGram Saver",
      alternateName: [
        "Instagram Video Saver",
        "iGramSaver",
        "igram io",
        "igram world",
        "Instagram Reels Downloader",
      ],
      url: "https://igramsaver.io",
    },
    {
      "@type": "WebPage",
      name: "Instagram Reels & Video Downloader - iGram Saver",
      speakable: {
        "@type": "SpeakableSpecification",
        xpath: [
          "/html/head/title",
          "/html/body/main//div[1]/h1"
        ],
      },
      inLanguage: "en",
      description:
        "iGram Saver is a Instagram Downloader tool to download instagram video, reels, and IGTV in HD quality directly to your mobile gallery, tablet or pc.",
      url: "https://igramsaver.io",
    },
    {
      "@type": "Organization",
      name: "iGram Saver",
      alternateName: "Instagram video saver",
      url: "https://igramsaver.io",
      email: "support@igramsaver.io",
      logo: "https://igramsaver.io/images/logo.png",
    },
    {
      "@type": "WebApplication",
      name: "iGram Saver",
      alternateName: [
        "Instagram Video Saver",
        "iGram Saver",
        "igram",
        "igram world",
        "Instagram Reels Downloader",
      ],
      url: "https://igramsaver.io",
      image: "https://igramsaver.io/images/logo.png",
      operatingSystem: "Windows, Linux, iOS, Android, OSX, macOS",
      applicationCategory: "UtilitiesApplication",
      featureList: ["Video downloader", "Reel Downloader", "IGTV Downloader"],
      contentRating: "Everyone",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.83",
        reviewCount: "1873",
      },
      offers: {
        "@type": "Offer",
        price: "0",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@id": "https://igramsaver.io",
            name: "Instagram Reels & Video Downloader - iGram Saver",
          },
        },
      ],
    },
  ],
};

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
        <GoogleAnalytics gaId="G-8YPRPJ0BTG" />
      </body>
    </html>
  );
}
