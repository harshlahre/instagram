import { Metadata } from "next";
import { DM_Sans as FontSans } from "next/font/google";
import Script from "next/script";
import { FAQPage, WithContext } from "schema-dts";

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
  description: "Insta Load is an Instagram video downloader tool that can be used to download IG videos, reels, and IGTV directly to your mobile or computer.",
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
