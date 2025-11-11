import type { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://melgibsonkennedy.com'),
  title: {
    default: 'Melgibson Kennedy Odari | CTO, Founder & Software Leader',
    template: '%s | Melgibson Kennedy Odari'
  },
  description: 'Melgibson Kennedy Odari - Chief Technology Officer (CTO) at Emoh Links Ltd, Founder of Tayari Careers. Full-stack developer specializing in React, Next.js, Flutter, Node.js, and cloud technologies. Software & Product Leader with expertise in digital transformation and scalable solutions.',
  keywords: [
    'Melgibson Kennedy',
    'Melgibson Kennedy Odari',
    'CTO',
    'Chief Technology Officer',
    'Software Developer',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Flutter Developer',
    'Node.js Developer',
    'Emoh Links',
    'Tayari Careers',
    'Software Leader',
    'Product Leader',
    'Tech Leader',
    'Kenya Developer',
    'African Tech',
    'Digital Transformation',
    'Software Architecture',
    'Web Development',
    'Mobile Development',
    'Cloud Computing',
    'AWS',
    'Vercel',
    'MongoDB',
    'PostgreSQL'
  ],
  authors: [{ name: 'Melgibson Kennedy Odari' }],
  creator: 'Melgibson Kennedy Odari',
  publisher: 'Melgibson Kennedy Odari',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://melgibsonkennedy.com',
    siteName: 'Melgibson Kennedy Odari',
    title: 'Melgibson Kennedy Odari | CTO, Founder & Software Leader',
    description: 'Chief Technology Officer (CTO) at Emoh Links Ltd, Founder of Tayari Careers. Full-stack developer specializing in React, Next.js, Flutter, Node.js, and cloud technologies.',
    images: [
      {
        url: '/photos/melgibsonkennedy.jpg',
        width: 1200,
        height: 630,
        alt: 'Melgibson Kennedy Odari',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Melgibson Kennedy Odari | CTO, Founder & Software Leader',
    description: 'Chief Technology Officer (CTO) at Emoh Links Ltd, Founder of Tayari Careers. Full-stack developer specializing in React, Next.js, Flutter, Node.js, and cloud technologies.',
    images: ['/photos/melgibsonkennedy.jpg'],
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

