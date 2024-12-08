import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'iGram Saver',
    short_name: 'iG Saver',
    description: 'iGramSaver is a Instagram Downloader tool to download instagram video, reels, and IGTV in HD quality directly to your mobile gallery, tablet or pc.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#4285f4',
    icons: [
      {
        src: '/images/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      }
    ],
    related_applications: [],
    prefer_related_applications: false,
    scope: '/',
    orientation: 'portrait',
    lang: 'en-US',
    dir: 'ltr',
    categories: ['Internet'],
  }
}