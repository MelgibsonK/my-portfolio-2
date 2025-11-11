'use client';

import React, { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import Image from "next/image";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { gilroy } from "@/fonts/fonts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const items = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "My Projects", href: "#projects" },
  { label: "Resume", href: "/Resume" },
  { label: "Contact", href: "/Contact" },
];

const socialLinks = [
  { platform: "GitHub", href: "https://github.com/MelgibsonK", iconPath: "/icons/github_icon.svg" },
  { platform: "LinkedIn", href: "https://www.linkedin.com/in/melgibson-kennedy", iconPath: "/icons/linkedin_icon.svg" },
  { platform: "Gmail", href: "mailto:melgibsonkennedy@gmail.com", iconPath: "/icons/gmail_icon.svg" },
];


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const updateActiveIndex = () => {
      if (typeof window === 'undefined') return;
      
      const currentHash = window.location.hash;
      const currentPath = window.location.pathname;
      
      if (currentHash) {
        const hashIndex = items.findIndex(item => item.href === currentHash);
        if (hashIndex !== -1) {
          setActiveIndex(hashIndex);
          return;
        }
      }
      
      const pathIndex = items.findIndex(item => item.href === currentPath);
      if (pathIndex !== -1) {
        setActiveIndex(pathIndex);
        return;
      }
      
      if (currentPath === '/' || currentPath === '') {
        setActiveIndex(0);
        return;
      }
    };

    updateActiveIndex();

    const handleHashChange = () => {
      updateActiveIndex();
    };

    window.addEventListener('hashchange', handleHashChange);
    
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setIsScrolled(window.scrollY > 50);
      }
      
      if (pathname === '/') {
        const sections = ['#about', '#experience', '#projects'];
        const scrollPosition = window.scrollY + 200;
        
        for (let i = sections.length - 1; i >= 0; i--) {
          const element = document.querySelector(sections[i]);
          if (element) {
            const elementTop = (element as HTMLElement).offsetTop;
            if (scrollPosition >= elementTop) {
              const sectionIndex = items.findIndex(item => item.href === sections[i]);
              if (sectionIndex !== -1) {
                setActiveIndex(sectionIndex);
                return;
              }
            }
          }
        }
        if (scrollPosition < 300) {
          setActiveIndex(0);
        }
      }
    };

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [pathname]);

  const lenis = useRef<Lenis | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      lenis.current = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      function raf(time: number) {
        lenis.current?.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.current?.destroy();
      };
    }
  }, []);


  useEffect(() => {
    const getPageMetadata = () => {
      const baseUrl = 'https://melgibsonkennedy.com';
      const baseDescription = 'Melgibson Kennedy Odari - Chief Technology Officer (CTO) at Emoh Links Ltd, Founder of Tayari Careers. Full-stack developer specializing in React, Next.js, Flutter, Node.js, and cloud technologies.';
      
      if (pathname === '/Resume') {
        return {
          title: 'Resume | Melgibson Kennedy Odari',
          description: 'Download the resume of Melgibson Kennedy Odari - CTO, Founder, and Software Leader. View professional experience, skills, and achievements.',
          url: `${baseUrl}/Resume`,
        };
      }
      if (pathname === '/Contact') {
        return {
          title: 'Contact | Melgibson Kennedy Odari',
          description: 'Get in touch with Melgibson Kennedy Odari - CTO at Emoh Links Ltd, Founder of Tayari Careers. Available for collaborations and opportunities.',
          url: `${baseUrl}/Contact`,
        };
      }
      return {
        title: 'Melgibson Kennedy Odari | CTO, Founder & Software Leader',
        description: baseDescription,
        url: baseUrl,
      };
    };

    const pageMeta = getPageMetadata();
    
    const metaTags = [
      { name: 'theme-color', content: '#1F1F1C' },
      { name: 'description', content: pageMeta.description },
      { name: 'keywords', content: 'Melgibson Kennedy, Melgibson Kennedy Odari, CTO, Chief Technology Officer, Software Developer, Full Stack Developer, React Developer, Next.js Developer, Flutter Developer, Node.js Developer, Emoh Links, Tayari Careers, Software Leader, Product Leader, Tech Leader, Kenya Developer, African Tech' },
      { name: 'author', content: 'Melgibson Kennedy Odari' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: pageMeta.url },
      { property: 'og:title', content: pageMeta.title },
      { property: 'og:description', content: pageMeta.description },
      { property: 'og:image', content: 'https://melgibsonkennedy.com/photos/melgibsonkennedy.jpg' },
      { property: 'og:site_name', content: 'Melgibson Kennedy Odari' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: pageMeta.title },
      { name: 'twitter:description', content: pageMeta.description },
      { name: 'twitter:image', content: 'https://melgibsonkennedy.com/photos/melgibsonkennedy.jpg' },
    ];

    metaTags.forEach(tag => {
      const existingTag = document.querySelector(
        tag.name ? `meta[name="${tag.name}"]` : `meta[property="${tag.property}"]`
      );
      if (existingTag) {
        existingTag.setAttribute('content', tag.content);
      } else {
        const meta = document.createElement('meta');
        if (tag.name) meta.setAttribute('name', tag.name);
        if (tag.property) meta.setAttribute('property', tag.property);
        meta.setAttribute('content', tag.content);
        document.head.appendChild(meta);
      }
    });

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', pageMeta.url);
    
    let titleTag = document.querySelector('title');
    if (!titleTag) {
      titleTag = document.createElement('title');
      document.head.appendChild(titleTag);
    }
    titleTag.textContent = pageMeta.title;

    let meLink = document.querySelector('link[rel="me"]');
    if (!meLink) {
      meLink = document.createElement('link');
      meLink.setAttribute('rel', 'me');
      document.head.appendChild(meLink);
    }
    meLink.setAttribute('href', 'https://www.linkedin.com/in/melgibson-kennedy');
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1F1F1C" />
        <title>Melgibson Kennedy Odari | CTO, Founder & Software Leader</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gilroy.variable} antialiased font-gilroy bg-deep-charcoal`}
        >
        <header 
          className={`sticky z-50 flex items-center justify-center transition-all duration-300 ${
            isScrolled 
              ? 'md:top-4 md:left-16 md:right-16 md:rounded-full md:px-6 md:py-2 md:bg-black/30 md:backdrop-blur-lg md:shadow-2xl md:w-fit md:mx-auto' 
              : 'top-0 w-full px-4 py-2 md:px-6 md:py-2 bg-deep-charcoal/30 backdrop-blur-md'
          } h-14 md:h-16`}
        >
          <div className="hidden md:flex items-center justify-center font-medium">
            <nav className="flex items-center gap-6 lg:gap-8">
              {items.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={`relative px-3 py-2 text-base lg:text-lg font-bold transition-all duration-300 ${
                      isActive 
                        ? 'text-mist-gray' 
                        : 'text-antique-linen/80 hover:text-burnt-brass'
                    }`}
                  >
                    {item.label}
                    {/* Extended circle with rounded corners for active item */}
                    {isActive && (
                      <span 
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 rounded-full"
            style={{
                          width: 'calc(100% + 16px)',
                          backgroundColor: '#D9D9D6',
                          boxShadow: '0 0 10px rgba(176, 141, 87, 0.8)'
                        }}
                      ></span>
                    )}
                    {!isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-burnt-brass/50 opacity-0 hover:opacity-100 scale-x-0 hover:scale-x-100 transition-all duration-300 origin-left"></span>
                    )}
            </Link>
                );
              })}
            </nav>
          </div>

          <button
            className="md:hidden fixed top-2.5 right-3 z-[60] p-1.5 focus:outline-none bg-soft-white rounded-md border border-deep-charcoal shadow-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            style={{ backgroundColor: '#FAF9F6' }}
          >
            <div className={`w-5 h-0.5 bg-deep-charcoal mb-1.5 transition-all duration-300 ease-in-out rounded ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ backgroundColor: '#1F1F1C' }}></div>
            <div className={`w-5 h-0.5 bg-deep-charcoal mb-1.5 transition-all duration-300 ease-in-out rounded ${mobileMenuOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: '#1F1F1C' }}></div>
            <div className={`w-5 h-0.5 bg-deep-charcoal transition-all duration-300 ease-in-out rounded ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ backgroundColor: '#1F1F1C' }}></div>
          </button>
        </header>

        {mobileMenuOpen && (
          <div className="md:hidden bg-deep-charcoal/98 backdrop-blur-lg border-t border-burnt-brass/40 fixed top-14 right-0 left-0 z-40 p-4 shadow-lg">
            <nav className="flex flex-col space-y-1">
              {items.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                <Link
                  key={index}
                  href={item.href}
                    className={`relative py-3 px-4 font-bold text-lg rounded-md transition-all duration-300 ${
                      isActive
                        ? 'text-mist-gray'
                        : 'text-antique-linen hover:text-burnt-brass border-transparent hover:border-burnt-brass/50 hover:bg-burnt-brass/10'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                    {/* Extended circle with rounded corners for active item */}
                    {isActive && (
                      <span 
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                        style={{
                          width: 'calc(100% - 16px)',
                          height: 'calc(100% - 8px)',
                          backgroundColor: 'rgba(217, 217, 214, 0.15)',
                          border: '2px solid #D9D9D6',
                          boxShadow: '0 0 10px rgba(176, 141, 87, 0.8)'
                        }}
                      ></span>
                    )}
                </Link>
                );
              })}
            </nav>
          </div>
        )}

        {children}

        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 bg-black/30 border border-burnt-brass/40 border-dashed rounded-full p-2 md:p-4 flex flex-col items-center space-y-7 md:space-y-5 backdrop-blur-lg">
          {socialLinks.map((link) => (
            <Link
              key={link.platform}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-110"
            >
              <Image
                src={link.iconPath}
                alt={`${link.platform} icon`}
                width={20}
                height={20}
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
              />
            </Link>
          ))}
          <button
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/files/Resume- Mlegibson_Kennedy_Odari.pdf';
              link.download = 'Resume- Mlegibson_Kennedy_Odari.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="transition-transform duration-200 hover:scale-110"
            aria-label="Download Resume"
          >
            <Image
              src="/icons/resume-portfolio-svgrepo-com.svg"
              alt="Resume icon"
              width={20}
              height={20}
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain filter brightness-0 invert"
            />
          </button>
        </div>
      </body>
    </html>
  );
}
