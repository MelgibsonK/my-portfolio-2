// src/app/Contact.tsx

'use client'; // This page uses client-side interactivity (form, potential animations)

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BlurText from '@/blocks/TextAnimations/BlurText/BlurText'; 
import Squares from '@/blocks/Backgrounds/Squares/Squares';

// Define social media links
const socialLinks = [
    { platform: "GitHub", href: "https://github.com/MelgibsonK", iconPath: "/icons/github_icon.svg" },
    { platform: "LinkedIn", href: "https://www.linkedin.com/in/melgibson-kennedy", iconPath: "/icons/linkedin_icon.svg" },
    { platform: "Gmail", href: "mailto:melgibsonkennedy@gmail.com", iconPath: "/icons/gmail_icon.svg" },
];

// Define contact information
const contactInfo = {
    email: "melgibsonkennedy@gmail.com",
};


export default function Contact() {
  // Updated form submission handler to open mail client with mailto link
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Get form values
    const name = formData.get('name')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const subject = formData.get('subject')?.toString() || '';
    const message = formData.get('message')?.toString() || '';

    // Construct the email body
    const emailBody = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    // Encode subject and body for the mailto link
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(emailBody);

    // Construct the mailto link
    const mailtoLink = `mailto:${contactInfo.email}?subject=${encodedSubject}&body=${encodedBody}`;

    // Open the default email client
    window.location.href = mailtoLink;

    // Optional: You might want to reset the form after opening the mail client
    // form.reset();
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-deep-charcoal">
      {/* Section Title */}
      <div className="text-center mb-12 md:mb-16">
        <BlurText
          text="Get In Touch"
          delay={50}
          animateBy="letters"
          direction="top"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-antique-linen"
        />
      </div>

      {/* Contact Content Container */}
      <div className="w-full max-w-md md:max-w-3xl lg:max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Contact Information Section */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-burnt-brass">Contact Information</h2>
          {contactInfo.email && (
            <div className="flex items-center text-antique-linen/80">
              <span className="mr-2 text-burnt-brass">📧</span>
              <a href={`mailto:${contactInfo.email}`} className="hover:text-burnt-brass hover:underline text-base sm:text-lg transition-colors">{contactInfo.email}</a>
            </div>
          )}
          {/* Add phone and location here if included in contactInfo */}
          {/*
          {contactInfo.phone && (
            <div className="flex items-center text-white/80">
              <span className="mr-2 text-cyan-500">📞</span>
              <a href={`tel:${contactInfo.phone}`} className="hover:underline text-base sm:text-lg">{contactInfo.phone}</a>
            </div>
          )}
          {contactInfo.location && (
            <div className="flex items-center text-white/80">
              <span className="mr-2 text-cyan-500">📍</span>
              <span className="text-base sm:text-lg">{contactInfo.location}</span>
            </div>
          )}
          */}

          {/* Social Media Links */}
          <div className="mt-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-burnt-brass">Connect with Me</h3>
            <div className="flex space-x-4">
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
                    width={30}
                    height={30}
                    className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-burnt-brass">Send a Message</h2>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div>
              <label htmlFor="name" className="block text-antique-linen/80 text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 bg-mist-gray/10 border border-burnt-brass/30 rounded-md focus:outline-none focus:ring-burnt-brass focus:border-burnt-brass text-antique-linen"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-antique-linen/80 text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 bg-mist-gray/10 border border-burnt-brass/30 rounded-md focus:outline-none focus:ring-burnt-brass focus:border-burnt-brass text-antique-linen"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-antique-linen/80 text-sm font-medium mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-3 py-2 bg-mist-gray/10 border border-burnt-brass/30 rounded-md focus:outline-none focus:ring-burnt-brass focus:border-burnt-brass text-antique-linen"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-antique-linen/80 text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 bg-mist-gray/10 border border-burnt-brass/30 rounded-md focus:outline-none focus:ring-burnt-brass focus:border-burnt-brass text-antique-linen"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-burnt-brass text-deep-charcoal font-bold rounded-md hover:bg-highlight-gold focus:outline-none focus:ring-2 focus:ring-burnt-brass focus:ring-offset-2 focus:ring-offset-deep-charcoal transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>

      <div className="absolute top-0 left-0 w-full h-full z-[-5] opacity-10">
      <Squares 
        speed={0.5} 
        squareSize={50}
        direction='diagonal'
        borderColor='#B08D57'
        hoverFillColor='#1F1F1C'
        />
      </div>

      {/* Optional: Add a footer here if this page doesn't use the global layout footer */}
       {/* <footer className="mt-16 text-center text-white/50 text-sm">
         <p>&copy; {new Date().getFullYear()} Lauvigne Lumeda. All rights reserved.</p>
       </footer> */}
    </main>
  );
}
