import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Insta Load - Download Instagram Videos, Reels & IGTV',
    short_name: 'Insta Load',
    description: 'Insta Load is an Instagram video downloader tool that can be used to download IG videos, reels, and IGTV directly to your mobile or computer.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    
    icons: [
    {
      src: '/images/android-chrome-192x192.png',
      type: 'image/png',
      sizes: '192x192'
    },
    {
      src: '/images/android-chrome-512x512.png',
      type: 'image/png',
      sizes: '512x512'
    }
  ]
  }
}