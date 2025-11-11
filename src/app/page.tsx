// app/page.tsx

"use client"

import React, { lazy, Suspense } from "react";

// Lazy load heavy components for better performance
const BlurText = lazy(() => import("@/blocks/TextAnimations/BlurText/BlurText"));
const TrueFocus = lazy(() => import("@/blocks/TextAnimations/TrueFocus/TrueFocus"));
const Threads = lazy(() => import("@/blocks/Backgrounds/Threads/Threads"));
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
    imageSrc: '/proj/emohlinksscreenshot.PNG', 
    link: 'https://emohlinks.co.ke',
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
    imageSrc: '/proj/timelydealsscreenshot.PNG',
    link: 'https://timelydealsinvestments.com',
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
    imageSrc: '/proj/tayaricareersscreenshot.PNG',
    link: 'https://tayaricareers.africa',
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
    imageSrc: '/proj/nairobicarcarescreenshot.PNG',
    link: 'https://nairobiaircorncarcare.autos/',
  },
];


// Removed items constant

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

// Updated tech stack - organized by categories
const techStackCategories = {
  Languages: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'],
  Frameworks: ['React', 'Next.js', 'Flutter', 'Framer Motion', 'Redux', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'Firebase'],
  Tools: ['AWS', 'Vercel', 'GitHub Actions', 'Git', 'Postman', 'Agile', 'TDD', 'PWA']
};

export default function Home() {
  return (
    <>
      {/* Main content area */}
      <main className="flex-grow flex flex-col items-center h-full relative">
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

            <Suspense fallback={<div className="font-bold text-center mt-1 md:mt-3 text-burnt-brass">Chief Technology Officer (CTO) Founder Developer Software & Product Leader Entrepreneur</div>}>
        <div className="font-bold text-center opacity-0 animate-fadeIn mt-1 md:mt-3">
          <TrueFocus
            sentence="Chief Technology Officer (CTO)||Founder||Developer||Software & Product Leader||Entrepreneur"
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

        {/* About Me Section - Creative Vintage Design */}
        <section id="about" className="relative z-10 w-full bg-deep-charcoal py-20 md:py-32 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Section Title */}
            <div className="mb-12 md:mb-16 text-center">
              <Suspense fallback={<h2 className="md:text-6xl text-3xl font-extrabold text-antique-linen">About Me</h2>}>
                <BlurText
                  text="About Me"
                  delay={100}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="md:text-6xl text-3xl font-extrabold text-center text-antique-linen"
                />
              </Suspense>
            </div>

            {/* Content Container - Creative Layout */}
            <div className="relative">
              {/* Decorative Corner Elements */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-burnt-brass/40 hidden md:block"></div>
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-burnt-brass/40 hidden md:block"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-burnt-brass/40 hidden md:block"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-burnt-brass/40 hidden md:block"></div>

              {/* Main Content Card */}
              <div className="relative bg-mist-gray/5 border-2 border-burnt-brass/30 rounded-lg p-8 md:p-12 backdrop-blur-sm">
                {/* Quote/Highlight Section */}
                <div className="mb-8 md:mb-10 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-burnt-brass to-burnt-brass/30 hidden md:block"></div>
                  <p className="text-burnt-brass text-lg md:text-2xl font-semibold italic pl-6 md:pl-8 leading-relaxed">
                    &quot;technology should empower, not complicate&quot;
                  </p>
                </div>

                {/* Main Paragraph */}
                <div className="space-y-6 md:space-y-8">
                  <p className="text-antique-linen/90 text-base md:text-lg leading-relaxed">
                    As the <span className="text-burnt-brass font-semibold">Chief Technology Officer</span> at <span className="text-burnt-brass font-semibold">Emoh Links Ltd</span> and <span className="text-burnt-brass font-semibold">Founder</span> of <span className="text-burnt-brass font-semibold">Tayari Careers</span>, I combine hands-on engineering with strategic leadership, turning ideas into scalable, people-centered solutions. My work spans software architecture, product innovation, and organizational growth, driven by a simple belief, <span className="text-burnt-brass italic">&quot;technology should empower, not complicate&quot;</span>.
                  </p>

                  <p className="text-antique-linen/90 text-base md:text-lg leading-relaxed">
                    Beyond code, I&apos;m deeply interested in how <span className="text-burnt-brass font-semibold">design</span>, <span className="text-burnt-brass font-semibold">data</span>, and <span className="text-burnt-brass font-semibold">empathy</span> shape better digital experiences. I thrive in environments where creativity meets execution whether it&apos;s leading a development team, mentoring young innovators, or building something entirely new from the ground up.
                  </p>

                  <p className="text-antique-linen/90 text-base md:text-lg leading-relaxed">
                    When I&apos;m not working, I enjoy exploring emerging tech, learning from communities, and pushing the boundaries of what&apos;s possible in <span className="text-burnt-brass font-semibold">Africa&apos;s growing tech ecosystem</span>.
                  </p>
                </div>

                {/* Decorative Bottom Accent */}
                <div className="mt-10 md:mt-12 pt-8 border-t border-burnt-brass/20">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="h-px w-16 bg-burnt-brass/40"></div>
                    <div className="w-2 h-2 rounded-full bg-burnt-brass/60"></div>
                    <div className="h-px w-16 bg-burnt-brass/40"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack & What I Do Section - Fresh Redesign */}
        <section className="relative z-10 w-full bg-deep-charcoal py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
              
              {/* Tech Stack Card - Left Side */}
              <div className="w-full md:w-1/2">
                <div className="relative group">
                  {/* Decorative accent line */}
                  <div className="absolute -top-4 left-0 w-24 h-0.5 bg-gradient-to-r from-burnt-brass to-transparent"></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-mist-gray/5 border-2 border-burnt-brass/30 rounded-2xl p-8 md:p-10 backdrop-blur-sm transition-all duration-300 hover:border-burnt-brass/50 hover:shadow-xl hover:shadow-burnt-brass/10">
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-burnt-brass font-bold text-2xl md:text-3xl tracking-wide mb-2">
                        Tech Stack
                      </h3>
                      <p className="text-antique-linen/70 text-sm md:text-base">
                        Technologies & tools I work with
                      </p>
                    </div>

                    {/* Skills by Category */}
                    <div className="space-y-6">
                      {Object.entries(techStackCategories).map(([category, skills]) => (
                        <div key={category}>
                          <h4 className="text-burnt-brass font-semibold text-sm md:text-base mb-3 uppercase tracking-wide">
                            {category}
                          </h4>
                          <div className="flex flex-wrap gap-2.5">
                            {skills.map(skill => (
                              <SkillTag key={skill} skillName={skill} />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* What I Do Section - Right Side */}
              <div className="w-full md:w-1/2 flex items-start">
                <div className="w-full">
                  {/* Title */}
                  <div className="mb-8 md:mb-10">
                    <Suspense fallback={<h2 className="md:text-5xl text-3xl font-extrabold text-antique-linen">What I do</h2>}>
                      <BlurText
                        text="What I do"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        onAnimationComplete={handleAnimationComplete}
                        className="md:text-5xl text-3xl font-extrabold text-antique-linen"
                      />
                    </Suspense>
                  </div>

                  {/* Image - Desktop */}
                  <Suspense fallback={<div className="hidden md:block w-full h-[500px] bg-mist-gray/10 rounded-lg" />}>
                    <div className="hidden md:block w-full">
                      <TiltedCard
                        imageSrc="/photos/melgibsonkennedy.jpg"
                        altText="Melgibson Kennedy"
                        captionText="Melgibson Kennedy" 
                        containerHeight="500px"
                        containerWidth="100%"
                        imageHeight="500px"
                        imageWidth="100%"
                        rotateAmplitude={8}
                        scaleOnHover={1.05}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={false}
                      />
                    </div>
                  </Suspense>

                  {/* Image - Mobile */}
                  <Suspense fallback={<div className="md:hidden w-full h-[350px] bg-mist-gray/10 rounded-lg" />}>
                    <div className="md:hidden w-full">
                      <TiltedCard
                        imageSrc="/photos/melgibsonkennedy.jpg"
                        altText="Melgibson Kennedy"
                        captionText="Melgibson Kennedy"
                        containerHeight="350px"
                        containerWidth="100%"
                        imageHeight="350px"
                        imageWidth="100%"
                        rotateAmplitude={8}
                        scaleOnHover={1.05}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={false}
                      />
                    </div>
                  </Suspense>
                </div>
              </div>

            </div>
          </div>
        </section>

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
      </main>


      {/* Footer Section */}
      <footer className="flex w-full items-center justify-center p-4 border-t border-burnt-brass/20 text-antique-linen/60 text-sm font-light mt-20">
        <p>&copy; {new Date().getFullYear()} Melgibson Kennedy. All rights reserved.</p>
      </footer>
    </>
  );
}