// app/page.tsx

"use client"

import React, { lazy, Suspense } from "react";
import Image from "next/image";

// Lazy load heavy components for better performance
const BlurText = lazy(() => import("@/blocks/TextAnimations/BlurText/BlurText"));
const TrueFocus = lazy(() => import("@/blocks/TextAnimations/TrueFocus/TrueFocus"));
const Threads = lazy(() => import("@/blocks/Backgrounds/Threads/Threads"));
const CircularText = lazy(() => import("@/blocks/TextAnimations/CircularText/CircularText"));
const TiltedCard = lazy(() => import("@/blocks/Components/TiltedCard/TiltedCard"));
const ExperienceTimeline = lazy(() => import('@/components/ExperienceTimeline'));
const ProjectCard = lazy(() => import('@/components/ProjectCard'));

// Keep SkillTag as regular import (lightweight)
import SkillTag from '@/components/SkillTag';

// Updated projects with new links and website previews
const projects = [
  {
    id: 1,
    number: '01',
    title: 'EmohLinks',
    description: 'Full Stack Developer',
    techstack: [
        '/techstack/nextjs.svg',
        '/techstack/react.svg',
        '/techstack/tailwind.svg',
    ],
    imageSrc: '/proj/projectOne.png', 
    link: 'https://emohlinks.co.ke',
    previewUrl: 'https://emohlinks.co.ke',
  },
  {
    id: 2,
    number: '02',
    title: 'Timely Deals Investments',
    description: 'Full Stack Developer',
    techstack: [
        '/techstack/nextjs.svg',
        '/techstack/react.svg',
        '/techstack/tailwind.svg',
    ],
    imageSrc: '/proj/projectTwo.png',
    link: 'https://timelydealsinvestments.com',
    previewUrl: 'https://timelydealsinvestments.com',
  },
  {
    id: 3,
    number: '03',
    title: 'Tayari Careers',
    description: 'Full Stack Developer',
    techstack: [
        '/techstack/react.svg',
        '/techstack/css.svg',
        '/techstack/javascript.svg',
    ],
    imageSrc: '/proj/projectThree.png',
    link: 'https://tayaricareers.africa',
    previewUrl: 'https://tayaricareers.africa',
  },
  {
    id: 4,
    number: '04',
    title: 'Nairobi Aircon Care',
    description: 'Full Stack Developer',
    techstack: [
        '/techstack/react.svg',
        '/techstack/css.svg',
        '/techstack/javascript.svg',
    ],
    imageSrc: '/proj/projectFour.png',
    link: 'https://nairobiaircorncarecare.autos',
    previewUrl: 'https://nairobiaircorncarecare.autos',
  },
];


// Removed items constant

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

// Updated tech stack
const devSkills = [
  'Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS',
  'React', 'Next.js', 'Framer Motion', 'Redux', 'Node.js', 'Express',
  'MongoDB', 'PostgreSQL', 'REST APIs', 'Firebase', 'AWS', 'Vercel',
  'GitHub Actions', 'Git', 'Postman', 'Agile', 'TDD', 'PWA'
];

export default function Home() {
  return (
    <>
      {/* Main content area */}
      <main className="flex-grow flex flex-col items-center h-full relative" id="about">
        {/* Hero Section - Full Viewport Height with Background Image */}
        <div className="w-full relative flex flex-col items-center justify-center overflow-hidden" style={{ height: '100vh', marginTop: '-64px', paddingTop: '64px' }}>
          {/* Background Image - Covers full viewport including behind header */}
          <div 
            className="absolute w-full bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: 'url(/background/markus-spiske-fFRG_YEaOuE-unsplash.jpg)',
              top: '-64px', // Extend behind header (header is h-16 = 64px)
              left: 0,
              right: 0,
              bottom: 0,
              height: 'calc(100vh + 64px)', // Full viewport + header height
            }}
          >
            {/* Darkish grey overlay - on image only, not covering text */}
            <div 
              className="absolute inset-0" 
              style={{ backgroundColor: 'rgba(60, 60, 60, 0.35)' }}
            ></div>
          </div>
          {/* Optimized Threads - reduced opacity and simplified for performance - Dark Grey */}
          <Suspense fallback={null}>
            <div style={{ width: '100%', height: '600px', position: 'absolute', bottom: '50', pointerEvents: 'none'}} className="hidden md:block opacity-30">
          <Threads
                amplitude={1.5}
            distance={0}
            enableMouseInteraction={false}
            color={[0.235, 0.235, 0.235]} // Dark grey (Graphite #3C3C3C)
          />
        </div>
          </Suspense>

          <Suspense fallback={null}>
            <div style={{ width: '100%', height: '450px', position: 'absolute', bottom: '50', pointerEvents: 'none'}} className="md:hidden opacity-20">
          <Threads
                amplitude={1.5}
            distance={0}
            enableMouseInteraction={false}
            color={[0.235, 0.235, 0.235]} // Dark grey (Graphite #3C3C3C)
          />
        </div>
          </Suspense>

          {/* Hero Content */}
          <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 md:px-0">
            <Suspense fallback={<div className="w-full flex justify-center items-center my-4 md:mt-15 text-center font-bold relative px-4 md:px-0"><h1 className="lg:text-9xl md:text-7xl text-4xl text-center text-antique-linen">Melgibson Kennedy</h1></div>}>
        <div className="w-full flex justify-center items-center my-4 md:mt-15 text-center font-bold relative px-4 md:px-0">
          <BlurText
                  text="Melgibson Kennedy"
            delay={150}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
                  className="lg:text-9xl md:text-7xl text-4xl text-center text-antique-linen drop-shadow-lg"
          />
        </div>
            </Suspense>

            <Suspense fallback={<div className="font-bold text-center mt-1 md:mt-3 text-burnt-brass">Developer Creator Solopreneur</div>}>
        <div className="font-bold text-center opacity-0 animate-fadeIn mt-1 md:mt-3">
          <TrueFocus
            sentence="Developer   Creator   Solopreneur"
                  manualMode={false}
            blurAmount={5}
                  borderColor="#B08D57"
                  animationDuration={0.5}
                  pauseBetweenAnimations={1.5}
                  />
              </div>
            </Suspense>
          </div>
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

        {/* Scroll indicator - positioned at bottom of viewport */}
        <Suspense fallback={null}>
          <div className="w-full items-center absolute bottom-10 left-0 right-0 h-[300px] hidden md:block pointer-events-none">
          <CircularText
            text="SCROLL-DOWN*SCROLL-DOWN*"
            onHover="slowDown"
            spinDuration={5}
            className="absolute left-45 bottom-10"
          />
          <Image
            src="/logo/lauv-logo.svg"
              alt="Logo"
            width={20}
            height={20}
            className="m-10 transition-all duration-300 hover:scale-150 hover:rotate-10 hover:brightness-125 absolute left-44 bottom-9"
              loading="lazy"
          />
        </div>
        </Suspense>

        {/* Content sections below hero - Solid background to cover hero background */}
        <div className="relative z-10 w-full bg-deep-charcoal">
        <div className="flex-grow flex flex-col md:flex-row items-center justify-center w-full md:w-9xl md:mt-35 mt-10 md:space-x-50 space-x-0">
          {/* Tech Stack Section Start */}
             <div className="flex flex-col w-full max-w-lg px-4 md:px-0 mt-10 mb-20 space-y-8">
             {/* DEVELOP Card */}
             {/* custom-corner-border class is kept from previous step */}
             {/* hover:scale-105 on the card wrapper is kept */}
             <div className="relative p-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 custom-corner-border bg-mist-gray/10 border border-burnt-brass/20">
               <h3 className="text-burnt-brass font-bold md:text-2xl text-lg tracking-wide mb-3">
                 DEVELOP
               </h3>
               <p className="text-antique-linen/80 md:text-md text-sm mt-2 leading-relaxed mb-5">
                 Full-stack developer specializing in modern web technologies. Building scalable applications with React, Next.js, Node.js, and cloud platforms.
               </p>
               <h4 className="text-burnt-brass font-semibold mb-3 text-base">
                 Skillset &amp; tools
               </h4>
               <div className="flex flex-wrap gap-2">
                 {devSkills.map(skill => (
                   <SkillTag key={skill} skillName={skill} />
                 ))}
               </div>
             </div>

             {/* CONTENTS Card */}
             {/* custom-corner-border class is kept from previous step */}
             {/* hover:scale-105 on the card wrapper is kept */}
             <div className="relative p-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 custom-corner-border bg-mist-gray/10 border border-burnt-brass/20">
               <h3 className="text-burnt-brass font-bold md:text-2xl text-lg tracking-wide mb-3">
                 TECH STACK
               </h3>
               <p className="text-antique-linen/80 md:text-md text-sm mt-2 leading-relaxed mb-5">
                 Languages: Java, Python, JavaScript (TypeScript), SQL, HTML, CSS. Frontend: React, Next.js, Framer Motion, Redux. Backend: Node.js, Express, MongoDB, PostgreSQL, REST APIs, Firebase. DevOps: AWS, Vercel, GitHub Actions.
               </p>
               <h4 className="text-burnt-brass font-semibold mb-3 text-base">
                 Skillset &amp; Tools
               </h4>
               <div className="flex flex-wrap gap-2">
                 {devSkills.map(skill => (
                   <SkillTag key={skill} skillName={skill} />
                 ))}
               </div>
             </div>
           </div>
           {/* Tech Stack Section End */}


          {/* What I do Section */}
          <div className="flex flex-col">
            <Suspense fallback={<h2 className="md:text-7xl text-3xl font-extrabold text-antique-linen">What I do</h2>}>
            <BlurText
              text="What I do"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
                className="md:text-7xl text-3xl font-extrabold text-antique-linen"
            />
            </Suspense>

            <Suspense fallback={<div className="hidden md:block mt-10 mb-20 w-[500px] h-[600px] bg-mist-gray/10" />}>
            <div className="hidden md:block mt-10 mb-20">
              <TiltedCard
                imageSrc="/photos/tiltedcard.svg"
                altText="Melgibson Kennedy"
                captionText="Melgibson Kennedy" 
                containerHeight="600px"
                containerWidth="500px"
                imageHeight="600px"
                imageWidth="500px"
                rotateAmplitude={10}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent={
                  <p className="bg-transparent px-4 py-2 border-1 border-dashed border-burnt-brass/50 rounded-lg opacity-70 font-bold m-5 absolute top-5 left-85 text-burnt-brass">
                    Melgibson
                  </p>
                }
              />
            </div>
            </Suspense>

            <Suspense fallback={<div className="md:hidden mt-10 mb-20 w-[300px] h-[400px] bg-mist-gray/10" />}>
            <div className="md:hidden mt-10 mb-20">
              <TiltedCard
                imageSrc="/photos/tiltedcard.svg"
                altText="Melgibson Kennedy"
                captionText="Melgibson Kennedy"
                containerHeight="400px"
                containerWidth="300px"
                imageHeight="400px"
                imageWidth="300px"
                rotateAmplitude={10}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent={
                  <p className="bg-transparent px-4 py-2 border-1 border-dashed border-burnt-brass/50 rounded-lg opacity-70 font-bold m-5 absolute text-burnt-brass">
                    Melgibson
                  </p>
                }
              />
            </div>
            </Suspense>

            
          </div>
        </div>

        {/* Experience Section */}
        <div className="flex w-full items-center justify-center p-4 md:mt-25 mt-5" id="experience">
          <Suspense fallback={<h2 className="md:text-7xl text-3xl font-extrabold text-antique-linen">My Experience</h2>}>
          <BlurText
            text=" My Experience"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
              className="md:text-7xl text-3xl font-extrabold text-antique-linen"
          />
          </Suspense>
        </div>
        <Suspense fallback={<div className="w-full max-w-5xl mx-auto py-16 px-4"><div className="h-96 bg-mist-gray/10 rounded-2xl" /></div>}>
        <ExperienceTimeline />
        </Suspense>

        <div className="flex w-full items-center justify-center p-4 md:mt-25 mt-5 font-extrabold" id="projects">
          <Suspense fallback={<h2 className="md:text-7xl text-3xl font-extrabold text-antique-linen">My Projects</h2>}>
          <BlurText
            text=" My Projects"
            delay={150}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
              className="md:text-7xl text-3xl font-extrabold text-antique-linen"
          />
          </Suspense>
        </div>

        {/* Projects Section Start - Vintage Classy Theme */}
        <Suspense fallback={<div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1400px] mx-auto mt-10 gap-6 px-4"><div className="h-96 bg-mist-gray/10 rounded-lg" /><div className="h-96 bg-mist-gray/10 rounded-lg" /></div>}>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1400px] mx-auto mt-10 gap-6 px-4">
             {projects.map((project, index) => (
               <ProjectCard key={project.id} project={project} index={index} />
             ))}
           </div>
        </Suspense>
        {/* Projects Section End */}
        </div>
      </main>


      {/* Footer Section */}
      <footer className="flex w-full items-center justify-center p-4 border-t border-burnt-brass/20 text-antique-linen/60 text-sm font-light mt-20">
        <p>&copy; {new Date().getFullYear()} Melgibson Kennedy. All rights reserved.</p>
      </footer>
    </>
  );
}