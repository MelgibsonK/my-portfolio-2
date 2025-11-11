// src/app/Contact/page.tsx

'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BlurText from '@/blocks/TextAnimations/BlurText/BlurText'; 
import Squares from '@/blocks/Backgrounds/Squares/Squares';

// Define social media links
const socialLinks = [
  { platform: "GitHub", href: "https://github.com/MelgibsonK", iconPath: "/icons/github_icon.svg", label: "GitHub" },
  { platform: "LinkedIn", href: "https://www.linkedin.com/in/melgibson-kennedy", iconPath: "/icons/linkedin_icon.svg", label: "LinkedIn" },
  { platform: "Gmail", href: "mailto:melgibsonkennedy@gmail.com", iconPath: "/icons/gmail_icon.svg", label: "Email" },
];

// Define contact information
const contactInfo = {
  email: "melgibsonkennedy@gmail.com",
};

export default function Contact() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get('name')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const subject = formData.get('subject')?.toString() || '';
    const message = formData.get('message')?.toString() || '';

    const emailBody = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(emailBody);
    const mailtoLink = `mailto:${contactInfo.email}?subject=${encodedSubject}&body=${encodedBody}`;

    window.location.href = mailtoLink;
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-deep-charcoal relative overflow-hidden">
      {/* Background Pattern with Enhanced Breathing Animation */}
      <div className="absolute top-0 left-0 w-full h-full z-0 breathing-animation">
        <div className="breathing-layer-1">
          <Squares 
            speed={0.5} 
            squareSize={50}
            direction='diagonal'
            borderColor='#B08D57'
            hoverFillColor='#1F1F1C'
          />
        </div>
        <div className="breathing-layer-2">
          <Squares 
            speed={0.3} 
            squareSize={60}
            direction='diagonal'
            borderColor='#B08D57'
            hoverFillColor='#1F1F1C'
          />
        </div>
        
        {/* Bold Highlighted Squares - 7 random bright squares */}
        <div className="highlighted-squares">
          <div className="highlight-square square-1"></div>
          <div className="highlight-square square-2"></div>
          <div className="highlight-square square-3"></div>
          <div className="highlight-square square-4"></div>
          <div className="highlight-square square-5"></div>
          <div className="highlight-square square-6"></div>
          <div className="highlight-square square-7"></div>
        </div>
      </div>
      
      {/* Enhanced Breathing Animation Styles */}
      <style jsx>{`
        @keyframes breathe {
          0% {
            transform: scale(1) rotate(0deg);
            opacity: 0.02;
          }
          25% {
            transform: scale(1.12) rotate(0.5deg);
            opacity: 0.05;
          }
          50% {
            transform: scale(1.2) rotate(0deg);
            opacity: 0.08;
          }
          75% {
            transform: scale(1.12) rotate(-0.5deg);
            opacity: 0.05;
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.02;
          }
        }
        
        @keyframes breatheReverse {
          0% {
            transform: scale(1) rotate(0deg);
            opacity: 0.03;
          }
          25% {
            transform: scale(0.92) rotate(-0.5deg);
            opacity: 0.06;
          }
          50% {
            transform: scale(0.85) rotate(0deg);
            opacity: 0.09;
          }
          75% {
            transform: scale(0.92) rotate(0.5deg);
            opacity: 0.06;
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.03;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            filter: blur(0px);
          }
          50% {
            filter: blur(1px);
          }
        }
        
        .breathing-animation {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .breathing-layer-1 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          animation: breathe 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          transform-origin: center center;
          animation-delay: 0s;
        }
        
        .breathing-layer-2 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          animation: breatheReverse 4.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          transform-origin: center center;
          animation-delay: 0.5s;
          mix-blend-mode: overlay;
        }
        
        .highlighted-squares {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .highlight-square {
          position: absolute;
          width: 50px;
          height: 50px;
          border: 2px solid #B08D57;
          background: rgba(176, 141, 87, 0.15);
          box-shadow: 0 0 20px rgba(176, 141, 87, 0.6), 
                      0 0 40px rgba(176, 141, 87, 0.4),
                      inset 0 0 10px rgba(176, 141, 87, 0.3);
          animation: squarePulse 3s ease-in-out infinite;
        }
        
        .square-1 {
          top: 15%;
          left: 10%;
          animation: squarePulse 3s ease-in-out infinite, moveSquare1 12s ease-in-out infinite;
          animation-delay: 0s;
        }
        
        .square-2 {
          top: 35%;
          right: 15%;
          animation: squarePulse 3s ease-in-out infinite, moveSquare2 15s ease-in-out infinite;
          animation-delay: 0.4s;
        }
        
        .square-3 {
          top: 60%;
          left: 20%;
          animation: squarePulse 3s ease-in-out infinite, moveSquare3 14s ease-in-out infinite;
          animation-delay: 0.8s;
        }
        
        .square-4 {
          bottom: 25%;
          right: 25%;
          animation: squarePulse 3s ease-in-out infinite, moveSquare4 13s ease-in-out infinite;
          animation-delay: 1.2s;
        }
        
        .square-5 {
          top: 10%;
          left: 50%;
          animation: squarePulse 3s ease-in-out infinite, moveSquare5 16s ease-in-out infinite;
          animation-delay: 1.6s;
        }
        
        .square-6 {
          bottom: 15%;
          left: 5%;
          animation: squarePulse 3s ease-in-out infinite, moveSquare6 11s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .square-7 {
          top: 45%;
          right: 5%;
          animation: squarePulse 3s ease-in-out infinite, moveSquare7 17s ease-in-out infinite;
          animation-delay: 2.4s;
        }
        
        @keyframes squarePulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
            box-shadow: 0 0 20px rgba(176, 141, 87, 0.6), 
                        0 0 40px rgba(176, 141, 87, 0.4),
                        inset 0 0 10px rgba(176, 141, 87, 0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
            box-shadow: 0 0 30px rgba(176, 141, 87, 0.9), 
                        0 0 60px rgba(176, 141, 87, 0.7),
                        inset 0 0 15px rgba(176, 141, 87, 0.5);
          }
        }
        
        @keyframes moveSquare1 {
          0% { top: 15%; left: 10%; }
          25% { top: 25%; left: 30%; }
          50% { top: 60%; left: 50%; }
          75% { top: 40%; left: 20%; }
          100% { top: 15%; left: 10%; }
        }
        
        @keyframes moveSquare2 {
          0% { top: 35%; right: 15%; }
          25% { top: 50%; right: 5%; }
          50% { top: 20%; right: 40%; }
          75% { top: 70%; right: 25%; }
          100% { top: 35%; right: 15%; }
        }
        
        @keyframes moveSquare3 {
          0% { top: 60%; left: 20%; }
          25% { top: 30%; left: 60%; }
          50% { top: 80%; left: 10%; }
          75% { top: 45%; left: 40%; }
          100% { top: 60%; left: 20%; }
        }
        
        @keyframes moveSquare4 {
          0% { bottom: 25%; right: 25%; }
          25% { bottom: 40%; right: 10%; }
          50% { bottom: 15%; right: 50%; }
          75% { bottom: 50%; right: 35%; }
          100% { bottom: 25%; right: 25%; }
        }
        
        @keyframes moveSquare5 {
          0% { top: 10%; left: 50%; }
          25% { top: 30%; left: 70%; }
          50% { top: 50%; left: 30%; }
          75% { top: 20%; left: 80%; }
          100% { top: 10%; left: 50%; }
        }
        
        @keyframes moveSquare6 {
          0% { bottom: 15%; left: 5%; }
          25% { bottom: 35%; left: 25%; }
          50% { bottom: 10%; left: 45%; }
          75% { bottom: 50%; left: 15%; }
          100% { bottom: 15%; left: 5%; }
        }
        
        @keyframes moveSquare7 {
          0% { top: 45%; right: 5%; }
          25% { top: 25%; right: 30%; }
          50% { top: 65%; right: 15%; }
          75% { top: 35%; right: 50%; }
          100% { top: 45%; right: 5%; }
        }
        
        /* Social Link Animations */
        .social-link {
          transform: translateY(0);
        }
        
        .social-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(176, 141, 87, 0.2);
        }
        
        .social-link:active {
          transform: translateY(0) scale(0.98);
        }
        
        @keyframes iconBounce {
          0%, 100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.15) rotate(5deg);
          }
        }
        
        .social-link:hover .icon-container {
          animation: iconBounce 0.6s ease-in-out;
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .social-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(176, 141, 87, 0.15), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        
        .social-link:hover::before {
          left: 100%;
          opacity: 1;
          animation: shimmer 0.6s ease-in-out;
        }
      `}</style>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-10">
          <Suspense fallback={<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-antique-linen">Get In Touch</h1>}>
        <BlurText
          text="Get In Touch"
          delay={50}
          animateBy="letters"
          direction="top"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-antique-linen"
        />
          </Suspense>
          <p className="mt-3 text-antique-linen/60 text-sm md:text-base max-w-xl mx-auto">
            Let's create something amazing together.
          </p>
      </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
          
          {/* Left Column - Contact Information & Social */}
          <div className="flex flex-col space-y-4">
            {/* Contact Card */}
            <div className="relative p-4 rounded-lg custom-corner-border bg-mist-gray/5 border border-burnt-brass/20 hover:border-burnt-brass/40 transition-all duration-300">
              <h2 className="text-lg md:text-xl font-bold mb-4 text-burnt-brass flex items-center">
                <span className="w-0.5 h-4 bg-burnt-brass mr-2 rounded-full"></span>
                Contact
              </h2>
              
              <div className="space-y-3">
                {/* Email Card */}
                <div className="group relative p-3 rounded-lg bg-mist-gray/5 border border-burnt-brass/10 hover:border-burnt-brass/30 hover:bg-burnt-brass/5 transition-all duration-300">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-burnt-brass/20 flex items-center justify-center mr-3 group-hover:bg-burnt-brass/30 transition-colors">
                      <span className="text-base">✉</span>
                    </div>
                    <div>
                      <a 
                        href={`mailto:${contactInfo.email}`} 
                        className="text-antique-linen hover:text-burnt-brass text-sm font-medium transition-colors group-hover:underline"
                      >
                        {contactInfo.email}
                      </a>
            </div>
            </div>
            </div>

                {/* Social Media Section */}
                <div className="pt-2">
                  <h3 className="text-sm md:text-base font-bold mb-3 text-burnt-brass flex items-center">
                    <span className="w-0.5 h-3 bg-burnt-brass mr-2 rounded-full"></span>
                    Connect
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
              {socialLinks.map((link) => (
                <Link
                  key={link.platform}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                        className="social-link group relative px-4 py-1.5 rounded-full bg-mist-gray/5 border border-burnt-brass/10 hover:border-burnt-brass/40 hover:bg-burnt-brass/5 transition-all duration-300 flex items-center overflow-hidden"
                >
                        {/* Animated background on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-burnt-brass/10 via-burnt-brass/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Icon container with rotation */}
                        <div className="icon-container w-5 h-5 rounded-full bg-burnt-brass/20 flex items-center justify-center mr-2 group-hover:bg-burnt-brass/30 group-hover:rotate-12 group-active:rotate-[-12deg] transition-all duration-300 relative z-10">
                  <Image
                            src={link.iconPath}
                    alt={`${link.platform} icon`}
                            width={14}
                            height={14}
                            className="w-3.5 h-3.5 object-contain group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        
                        {/* Text content */}
                        <div className="flex-1 relative z-10">
                          <p className="text-antique-linen text-xs font-medium group-hover:text-burnt-brass transition-colors duration-300">
                            {link.label}
                          </p>
                        </div>
                        
                        {/* Arrow with slide animation */}
                        <span className="text-burnt-brass/50 group-hover:text-burnt-brass group-hover:translate-x-1 transition-all duration-300 text-xs relative z-10 ml-1">→</span>
                        
                        {/* Ripple effect on click */}
                        <span className="absolute inset-0 rounded-full bg-burnt-brass/20 scale-0 group-active:scale-100 opacity-0 group-active:opacity-100 transition-all duration-200"></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="relative">
            <div className="relative p-4 rounded-lg custom-corner-border bg-mist-gray/5 border border-burnt-brass/20 hover:border-burnt-brass/40 transition-all duration-300">
              <h2 className="text-lg md:text-xl font-bold mb-4 text-burnt-brass flex items-center">
                <span className="w-0.5 h-4 bg-burnt-brass mr-2 rounded-full"></span>
                Message
              </h2>
              
              <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
                    <label htmlFor="name" className="block text-antique-linen/70 text-xs font-medium mb-1">
                      Name <span className="text-burnt-brass">*</span>
                    </label>
              <input
                type="text"
                id="name"
                name="name"
                      className="w-full px-3 py-2 text-sm bg-mist-gray/10 border border-burnt-brass/30 rounded-md focus:outline-none focus:ring-1 focus:ring-burnt-brass/50 focus:border-burnt-brass text-antique-linen placeholder-antique-linen/40 transition-all duration-200"
                      placeholder="Your name"
                required
              />
            </div>
            <div>
                    <label htmlFor="email" className="block text-antique-linen/70 text-xs font-medium mb-1">
                      Email <span className="text-burnt-brass">*</span>
                    </label>
              <input
                type="email"
                id="email"
                name="email"
                      className="w-full px-3 py-2 text-sm bg-mist-gray/10 border border-burnt-brass/30 rounded-md focus:outline-none focus:ring-1 focus:ring-burnt-brass/50 focus:border-burnt-brass text-antique-linen placeholder-antique-linen/40 transition-all duration-200"
                      placeholder="your.email@example.com"
                required
              />
            </div>
                </div>
                
            <div>
                  <label htmlFor="subject" className="block text-antique-linen/70 text-xs font-medium mb-1">
                    Subject
                  </label>
              <input
                type="text"
                id="subject"
                name="subject"
                    className="w-full px-3 py-2 text-sm bg-mist-gray/10 border border-burnt-brass/30 rounded-md focus:outline-none focus:ring-1 focus:ring-burnt-brass/50 focus:border-burnt-brass text-antique-linen placeholder-antique-linen/40 transition-all duration-200"
                    placeholder="What's this about?"
              />
            </div>
                
            <div>
                  <label htmlFor="message" className="block text-antique-linen/70 text-xs font-medium mb-1">
                    Message <span className="text-burnt-brass">*</span>
                  </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                    className="w-full px-3 py-2 text-sm bg-mist-gray/10 border border-burnt-brass/30 rounded-md focus:outline-none focus:ring-1 focus:ring-burnt-brass/50 focus:border-burnt-brass text-antique-linen placeholder-antique-linen/40 resize-none transition-all duration-200"
                    placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>
                
            <button
              type="submit"
                  className="group relative w-full px-4 py-2.5 bg-burnt-brass text-deep-charcoal font-semibold text-sm rounded-md hover:bg-highlight-gold focus:outline-none focus:ring-2 focus:ring-burnt-brass focus:ring-offset-2 focus:ring-offset-deep-charcoal transition-all duration-300"
            >
                  <span className="relative z-10 flex items-center justify-center">
              Send Message
                    <span className="ml-1.5 group-hover:translate-x-0.5 transition-transform text-xs">→</span>
                  </span>
            </button>
          </form>
        </div>
          </div>
      </div>
      </div>
    </main>
  );
}
