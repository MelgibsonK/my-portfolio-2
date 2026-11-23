import type { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://melgibsonkennedy.com'),
  title: {
    default: 'Melgibson Kennedy Odari | CTO, Systems Architect & Tech Entrepreneur',
    template: '%s | Melgibson Kennedy Odari'
  },
  description: 'Melgibson Kennedy Odari - Chief Technology Officer (CTO) at Emoh Links Ltd, Founder of Tayari Careers & Correspond Workspace, Systems Architect at Angavix Systems Ltd. Expert in high-scale SaaS architectures, cross-platform Flutter apps, Next.js, and cloud systems.',
  keywords: [
    'Melgibson Kennedy',
    'Melgibson Kennedy Odari',
    'Melgibson',
    'CTO',
    'Chief Technology Officer',
    'Systems Architect',
    'Software Engineer',
    'Full Stack Engineer',
    'Flutter Developer',
    'Next.js 15',
    'React',
    'Angavix Systems',
    'Emoh Links',
    'Radius One',
    'Tayari Careers',
    'Tayari Correspond',
    'Moringa Healthcare',
    'Excellent Home Health',
    'Rashid Law Advocates',
    'Terravia Farms',
    'Design Triage',
    'African Tech Founder',
    'Kenya Tech Leader',
    'UAV Systems',
    'Enterprise SaaS',
    'Digital Transformation',
    'Cloud Architecture',
    'AWS',
    'Vercel'
  ],
  authors: [{ name: 'Melgibson Kennedy Odari' }],
  creator: 'Melgibson Kennedy Odari',
  publisher: 'Melgibson Kennedy Odari',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://melgibsonkennedy.com',
    siteName: 'Melgibson Kennedy Odari',
    title: 'Melgibson Kennedy Odari | CTO, Systems Architect & Tech Entrepreneur',
    description: 'CTO at Emoh Links, Founder of Tayari Careers & Correspond, Systems Architect at Angavix Systems Ltd. Enterprise SaaS, Flutter Mobile Apps & Modern Web Architectures.',
    images: [
      {
        url: '/photos/me.jpg',
        width: 1200,
        height: 630,
        alt: 'Melgibson Kennedy Odari - CTO & Systems Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Melgibson Kennedy Odari | CTO, Systems Architect & Tech Entrepreneur',
    description: 'CTO at Emoh Links, Founder of Tayari Careers & Correspond, Systems Architect at Angavix Systems Ltd. Enterprise SaaS, Flutter Mobile Apps & Modern Web Architectures.',
    images: ['/photos/me.jpg'],
    creator: '@melgibsonkennedy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://melgibsonkennedy.com',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

