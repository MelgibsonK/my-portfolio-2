// app/page.tsx (or wherever your page file is)

"use client"

import React from "react";

// Import your components and blocks
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import TrueFocus from "@/blocks/TextAnimations/TrueFocus/TrueFocus";
import Threads from "@/blocks/Backgrounds/Threads/Threads";
import ExperienceTimeline from '@/components/ExperienceTimeline';
import SkillTag from '@/components/SkillTag';
import ProjectCard from '@/components/ProjectCard';

// data/projects.ts
// Define your projects array (add your actual project data here)
const projects = [
  {
    id: 1,
    number: '01',
    title: 'Emoh Links Digital Infrastructure Modernization',
    description: 'CTO & Lead Architect',
    techstack: [
        '/techstack/javascript.svg',
        '/techstack/python.svg',
        '/techstack/gcp.svg',
        '/techstack/nextjs.svg',
    ],
    imageSrc: '/proj/projectOne.png', 
    link: 'https://melgibsonkennedy.com',
  },
  {
    id: 2,
    number: '02',
    title: 'AI-Powered Career Path Platform — Tayari Careers',
    description: 'Founder & Software Lead',
    techstack: [
        '/techstack/flutter.svg',
        '/techstack/nextjs.svg',
        '/techstack/python.svg',
    ],
    imageSrc: '/proj/projectTwo.png',
    link: 'https://melgibsonkennedy.com',
  },
  {
    id: 3,
    number: '03',
    title: 'Personal Portfolio & Tech Ecosystem',
    description: 'Web & AI Developer',
    techstack: [
        '/techstack/nextjs.svg',
        '/techstack/react.svg',
        '/techstack/tailwind.svg',
        '/techstack/javascript.svg',
    ],
    imageSrc: '/proj/projectThree.png',
    link: 'https://melgibsonkennedy.com',
  },
];


// Removed items constant

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

// Define your skill arrays (you could also move these to a data file if they get long)
const devSkills = [
  'Flutter', 'Next.js', 'React', 'Node.js', 'Python', 'TypeScript',
  'JavaScript', 'AWS', 'Vercel', 'Supabase', 'Firebase', 'PostgreSQL',
  'API Design', 'Software Architecture', 'DevOps', 'Agile', 'Scrum'
];

export default function Home() {
  // Removed mobileMenuOpen state
  return (
    // The cursor: 'none' style is now applied globally in layout.tsx
    // Removed outer div as layout.tsx now handles the main structure
    // <div className="flex flex-col min-h-screen bg-[#101112] font-gilroy"> // Removed this line
    <> {/* Added React Fragment wrapper */}
      {/* Main content area */}
      <main className="flex-grow flex flex-col items-center h-full relative pt-20"> {/* Added padding top to account for fixed header */}
        <div style={{ width: '100%', height: '600px', position: 'absolute', bottom: '50'}} className="hidden md:block">
          <Threads
            amplitude={2.5}
            distance={0}
            enableMouseInteraction={false}
          />
        </div>

        <div style={{ width: '100%', height: '600px', position: 'absolute', bottom: '50'}} className="md:hidden opacity-10">
          <Threads
            amplitude={2.5}
            distance={0}
            enableMouseInteraction={false}
          />
        </div>

        {/* ... other main content elements ... */}
        <div className="w-full flex justify-center items-center my-4 md:mt-15 text-center font-bold relative px-4 md:px-0">
          <BlurText
            text="Melgibson Kennedy"
            delay={150}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="lg:text-9xl md:text-7xl text-4xl text-center"
          />
        </div>

        <div className="font-bold text-center opacity-0 animate-fadeIn mt-1 md:mt-3">
          <TrueFocus
            sentence="Chief Technology Officer   Founder   Software & Product Leader"
            manualMode={true}
            blurAmount={5}
            borderColor="cyan"
            animationDuration={0.3}
            pauseBetweenAnimations={1}
            />
          </div>

        {/* Contact Information */}
        <div className="text-center text-gray-400 text-sm md:text-base mt-4 opacity-0 animate-fadeIn">
          <p>(+254) 701-178-353 | melgibsonkennedy@gmail.com</p>
          <p className="mt-2">github.com/MelgibsonK | linkedin.com/in/melgibson-kennedy | melgibsonkennedy.com</p>
        </div>

        {/* style jsx block is fine */}
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
            animation-delay: 0.8s;
          }
        `}</style>

        {/* Profile Section */}
        <div className="w-full max-w-4xl mx-auto px-4 md:px-8 mt-12 mb-8 opacity-0 animate-fadeIn">
          <div className="bg-black/40 border border-white/10 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Profile</h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Innovative and results-driven technology leader with a proven track record in software development,
              business growth, and digital transformation. As CTO of Emoh Links Ltd and Founder of Tayari Careers, I
              blend technical excellence with strategic leadership to build scalable products, empower teams, and drive
              innovation. I excel in fast-paced environments where technology meets impact — leading projects from
              concept to execution with precision, creativity, and measurable results.
            </p>
          </div>
        </div>

        {/* Core Competencies Section */}
        <div className="w-full max-w-6xl mx-auto px-4 md:px-8 mt-12 mb-8">
          <BlurText
            text="Core Competencies"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="md:text-7xl text-3xl font-extrabold text-center mb-10"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Leadership & Strategy Card */}
            <div className="relative p-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 custom-corner-border">
              <h3 className="text-white font-bold md:text-2xl text-lg tracking-wide mb-3">
                Leadership & Strategy
              </h3>
              <p className="text-gray-400 md:text-md text-sm mt-2 leading-relaxed mb-5">
                Technology Leadership · Product Management · Strategic Planning · Cross-Functional Collaboration · Operational Efficiency · Business Scaling
              </p>
            </div>

            {/* Technical Expertise Card */}
            <div className="relative p-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 custom-corner-border">
              <h3 className="text-white font-bold md:text-2xl text-lg tracking-wide mb-3">
                Technical Expertise
              </h3>
              <p className="text-gray-400 md:text-md text-sm mt-2 leading-relaxed mb-5">
                Software Architecture · Mobile App Development (Flutter) · Full-Stack Development · API Design · Cloud Infrastructure (AWS, Vercel) · DevOps Automation
              </p>
              <h4 className="text-cyan-300 font-semibold mb-3 text-base">
                Skillset &amp; Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {devSkills.map(skill => (
                  <SkillTag key={skill} skillName={skill} />
                ))}
              </div>
            </div>

            {/* Business Acumen Card */}
            <div className="relative p-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 custom-corner-border">
              <h3 className="text-white font-bold md:text-2xl text-lg tracking-wide mb-3">
                Business Acumen
              </h3>
              <p className="text-gray-400 md:text-md text-sm mt-2 leading-relaxed mb-5">
                Digital Transformation · Process Optimization · Data-Driven Decision Making · Innovation Management · Stakeholder Engagement · Client Relations
              </p>
            </div>

            {/* Execution & Delivery Card */}
            <div className="relative p-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 custom-corner-border">
              <h3 className="text-white font-bold md:text-2xl text-lg tracking-wide mb-3">
                Execution & Delivery
              </h3>
              <p className="text-gray-400 md:text-md text-sm mt-2 leading-relaxed mb-5">
                Agile Project Management · Problem Solving · Analytical Thinking · Performance Optimization · Mentorship & Team Growth
              </p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="flex w-full items-center justify-center p-4 md:mt-25 mt-5">
          <BlurText
            text="Experience"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="md:text-7xl text-3xl font-extrabold"
          />
        </div>
        <ExperienceTimeline />

        {/* Education Section */}
        <div className="flex w-full items-center justify-center p-4 md:mt-25 mt-5">
          <BlurText
            text="Education"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="md:text-7xl text-3xl font-extrabold"
          />
        </div>
        <div className="w-full max-w-4xl mx-auto px-4 md:px-8 mt-8 mb-12">
          <div className="bg-black/40 border border-white/10 rounded-lg p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Bachelor of Science, Information Technology</h3>
            <p className="text-cyan-400 text-lg md:text-xl mb-2">KCA University, Kenya</p>
            <p className="text-gray-400 text-base">2023 – (Expected 2027)</p>
          </div>
        </div>

        <div className="flex w-full items-center justify-center p-4 md:mt-25 mt-5 font-extrabold">
          <BlurText
            text="Selected Projects"
            delay={150}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="md:text-7xl text-3xl font-extrabold"
          />
        </div>

        {/* Projects Section Start */}
        {/* Modified this div to use a grid layout for two columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-[1400px] mx-auto mt-10">
             {/* Now mapping over the imported projects array */}
             {projects.map((project, index) => (
               <ProjectCard key={project.id} project={project} index={index} />
             ))}
           </div>
        {/* Projects Section End */}
      </main>


      {/* Footer Section - Consider moving this to layout.tsx as well for consistency */}
      <footer className="flex w-full items-center justify-center p-4 border-t border-white/[.15] text-white/50 text-sm font-light mt-20"> {/* Added margin top */}
        <p>&copy; {new Date().getFullYear()} Melgibson Kennedy. All rights reserved.</p>
      </footer>
    </> // Closed React Fragment wrapper
    // </div> // Removed this closing tag
  );
}