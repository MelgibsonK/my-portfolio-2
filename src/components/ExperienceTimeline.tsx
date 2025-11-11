'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
// Removed unused import
// import { comma } from 'postcss/lib/list';


const experiences = [
  {
    id: 1,
    title: 'Chief Technology Officer (CTO)',
    company: 'Emoh Links Ltd',
    year: '2024 – Present',
    description: `• Lead the company's entire technology ecosystem, including infrastructure, product development, and digital strategy.\n• Architected and deployed high-availability systems powering customer and partner platforms.\n• Implemented automation and analytics frameworks, improving operational efficiency by over 40%.\n• Supervised engineering and product teams to align technology with business growth and customer experience goals.\n• Spearheaded innovation in service delivery, system reliability, and product scalability.`,
    logo: '/logo/emohlinks.png',
  },
  {
    id: 2,
    title: 'Founder & Software Lead',
    company: 'Tayari Careers',
    year: '2024 – Present',
    description: `• Founded and manage a mission-driven EdTech platform connecting students and startups through internships and career readiness tools.\n• Designed and oversaw development using Flutter, Supabase, and Next.js, ensuring a seamless user experience.\n• Built and scaled partnerships with universities, SMEs, and youth-focused organizations across Kenya.\n• Defined strategic goals, product vision, and technology roadmap to ensure measurable growth and sustainability.`,
    logo: '/logo/tayaricareers.png',
  },
  {
    id: 3,
    title: 'Freelance Software Developer & Consultant',
    company: 'Self-Employed',
    year: '2022 – 2023',
    description: `• Delivered full-stack mobile and web applications for SMEs, startups, and NGOs.\n• Provided consulting services in digital transformation, product design, and process automation.\n• Managed distributed development teams using Agile and Scrum methodologies.\n• Specialized in Flutter, Node.js, AWS, and modern cloud-native deployments.`,
    logo: '',
  },
];

const ExperienceTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"] // Adjust offset as needed
  });

  // Smooth the scroll progress value for the line and dot
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    // Increased restDelta slightly. This means the spring animation
    // will consider itself 'at rest' sooner, potentially reducing
    // updates when the dot reaches the end of the scroll.
    restDelta: 0.01
  });

  // Create a motion value for the dot's top position, based on the *sprung* scaleY value
  // We map the scaleY value (which goes from 0 to 1) to the full height of the container (0% to 100%)
  const dotTop = useTransform(scaleY, [0, 1], ['0%', '100%']);

  return (
    <div ref={containerRef} className="relative w-full max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8 mt-10">
      {/* Central Timeline Line - Vintage Theme */}
      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-burnt-brass via-burnt-brass/80 to-burnt-brass/60 transform -translate-x-1/2"
        style={{ scaleY: scaleY, transformOrigin: 'top' }}
      />

      {/* Glowing Dot - Vintage Theme */}
      <motion.div
        className="absolute left-1/2 w-4 h-4 rounded-full bg-burnt-brass shadow-[0_0_15px_5px_rgba(176,141,87,0.5)] transform -translate-x-1/2"
        style={{ top: dotTop }}
      />


      <div className="relative space-y-24">
        {experiences.map((exp, index) => (
          // Changed grid to 2 columns, removed the 'auto' middle column
          <div key={exp.id} className="relative grid grid-cols-1 md:grid-cols-2 items-start gap-x-20 bg-mist-gray/5 rounded-2xl p-6 border border-burnt-brass/20 shadow-lg md:bg-transparent hover:border-burnt-brass/40 transition-all duration-300">
            {/* Side 1: Title, Company, Year, Logo - Conditional Alignment */}
            <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
              <h3 className="md:text-2xl text-xl font-bold text-antique-linen">{exp.title}</h3>

              <p className="text-lg text-burnt-brass mb-1 font-semibold">{exp.company}</p>
              {/* Year */}
              <span
                className="md:text-xl text-md font-regular text-burnt-brass/70 mb-2"
                style={{ letterSpacing: '0.4em' }}
              >
                {exp.year}
              </span>

              {/* Logo */}
              {exp.logo && (
              <div className="w-10 h-10 relative flex items-center justify-center md:my-0 my-5"> {/* Added flex centering for logos */}
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  fill
                  style={{ objectFit: 'contain' }} // Use contain to show the whole logo
                  unoptimized // Keep if necessary for SVGs, but test without if possible
                />
              </div>
              )}
            </div>

            {/* Side 2: Description - Conditional Alignment */}
            <div className={`text-antique-linen/80 md:text-lg text-md ${index % 2 !== 0 ? 'md:text-right' : 'text-left'} ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
              <p className="whitespace-pre-line">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;