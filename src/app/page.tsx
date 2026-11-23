"use client"

import React, { lazy, Suspense, useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { X, Layers, Smartphone, Globe, Server } from "lucide-react";
import { projects, CATEGORIES, CategoryFilter } from "@/data/projects";

const BlurText = lazy(() => import("@/blocks/TextAnimations/BlurText/BlurText"));
const TrueFocus = lazy(() => import("@/blocks/TextAnimations/TrueFocus/TrueFocus"));
const Threads = lazy(() => import("@/blocks/Backgrounds/Threads/Threads"));
const TiltedCard = lazy(() => import("@/blocks/Components/TiltedCard/TiltedCard"));
const ExperienceTimeline = lazy(() => import('@/components/ExperienceTimeline'));
const ProjectCard = lazy(() => import('@/components/ProjectCard'));

import SkillTag from '@/components/SkillTag';

const handleAnimationComplete = () => {
  // Animation complete hook
};

// Updated tech stack - organized by categories
const techStackCategories = {
  Languages: ['TypeScript', 'JavaScript', 'Python', 'Dart', 'Java', 'SQL', 'HTML5', 'CSS3'],
  Frameworks: ['Next.js', 'React', 'Flutter', 'FastAPI', 'Node.js', 'Express', 'Tailwind CSS', 'Framer Motion', 'Prisma', 'PostgreSQL', 'MongoDB', 'Supabase'],
  CloudAndDevOps: ['AWS', 'Vercel', 'Coolify', 'Docker', 'Git', 'GitHub Actions', 'WebSockets', 'REST APIs', 'Postman']
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All Solutions');
  const [lightboxData, setLightboxData] = useState<{ isOpen: boolean; imageSrc: string; title: string }>({
    isOpen: false,
    imageSrc: '',
    title: ''
  });

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All Solutions') return projects;
    return projects.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      'All Solutions': projects.length,
      'Websites & Web Platforms': 0,
      'Mobile Flutter Apps': 0,
      'Enterprise SaaS & Systems': 0,
    };
    projects.forEach(p => {
      if (counts[p.category] !== undefined) {
        counts[p.category]++;
      }
    });
    return counts;
  }, []);

  // Handle escape key to close lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxData({ isOpen: false, imageSrc: '', title: '' });
      }
    };
    if (lightboxData.isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [lightboxData.isOpen]);

  const handleOpenLightbox = (imageSrc: string, title: string) => {
    setLightboxData({
      isOpen: true,
      imageSrc,
      title
    });
  };

  const getCategoryIcon = (category: CategoryFilter) => {
    switch (category) {
      case 'Websites & Web Platforms':
        return <Globe size={15} />;
      case 'Mobile Flutter Apps':
        return <Smartphone size={15} />;
      case 'Enterprise SaaS & Systems':
        return <Server size={15} />;
      default:
        return <Layers size={15} />;
    }
  };

  return (
    <>
      {/* Comprehensive SEO & JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Melgibson Kennedy Odari",
            "alternateName": "Melgibson Kennedy",
            "jobTitle": "Chief Technology Officer (CTO) & Systems Architect",
            "worksFor": [
              {
                "@type": "Organization",
                "name": "Emoh Links Ltd",
                "url": "https://emohlinks.co.ke"
              },
              {
                "@type": "Organization",
                "name": "Angavix Systems Ltd",
                "url": "https://www.angavix.com"
              }
            ],
            "founder": {
              "@type": "Organization",
              "name": "Tayari Careers",
              "url": "https://tayaricareers.africa"
            },
            "url": "https://melgibsonkennedy.vercel.app",
            "sameAs": [
              "https://www.linkedin.com/in/melgibson-kennedy",
              "https://github.com/MelgibsonK"
            ],
            "email": "melgibsonkennedy@gmail.com",
            "telephone": "+254701178353",
            "knowsAbout": [
              "Full-Stack Web Development",
              "Mobile App Development (Flutter)",
              "Enterprise Software Architecture",
              "Next.js & React Applications",
              "Drone Fleet Telemetry Systems",
              "Carrier-Grade ISP Automated Billing",
              "Healthcare Portals (FHIR/HIPAA)",
              "Stalwart Mail & Workspace Systems",
              "Microservices & Cloud Deployments"
            ],
            "description": "Chief Technology Officer at Emoh Links Ltd, Software Engineer at Angavix Systems Ltd, and Founder of Tayari Careers & Correspond. Specializes in Next.js, React, Flutter, and high-availability enterprise systems."
          })
        }}
      />

      {/* Main content area */}
      <main className="flex-grow flex flex-col items-center h-full relative">
        {/* Hero Section - Full Viewport Height with Background Image */}
        <div className="w-full relative flex flex-col items-center justify-center overflow-hidden" style={{ height: '100vh', marginTop: '-64px', paddingTop: '64px' }}>
          {/* Background Image */}
          <div 
            className="absolute w-full bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: 'url(/background/markus-spiske-fFRG_YEaOuE-unsplash.jpg)',
              top: '-64px',
              left: 0,
              right: 0,
              bottom: 0,
              height: 'calc(100vh + 64px)',
            }}
          >
            <div 
              className="absolute inset-0" 
              style={{ backgroundColor: 'rgba(20, 20, 20, 0.45)' }}
            ></div>
          </div>

          {/* GPU-Optimized Responsive Threads Background (Auto-pauses when out of view) */}
          <Suspense fallback={null}>
            <div style={{ width: '100%', height: '550px', position: 'absolute', bottom: '40px', pointerEvents: 'none'}} className="opacity-25">
              <Threads
                amplitude={1.2}
                distance={0}
                enableMouseInteraction={false}
                color={[0.69, 0.55, 0.34]}
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
                  className="lg:text-9xl md:text-7xl text-4xl text-center text-antique-linen drop-shadow-xl"
                />
              </div>
            </Suspense>

            <Suspense fallback={<div className="font-bold text-center mt-1 md:mt-3 text-burnt-brass">Chief Technology Officer (CTO) | Founder | Software & Product Leader | Systems Architect</div>}>
              <div className="font-bold text-center opacity-0 animate-fadeIn mt-1 md:mt-3">
                <TrueFocus
                  sentence="Chief Technology Officer (CTO)||Systems Architect||Founder||Flutter & Full-Stack Engineer||Product Leader"
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

        {/* About Me Section */}
        <section id="about" className="relative z-10 w-full bg-deep-charcoal py-20 md:py-32 px-4 md:px-8 scroll-mt-20 md:scroll-mt-24">
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

            {/* Content Container */}
            <div className="relative">
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-burnt-brass/40 hidden md:block"></div>
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-burnt-brass/40 hidden md:block"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-burnt-brass/40 hidden md:block"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-burnt-brass/40 hidden md:block"></div>

              <div className="relative bg-mist-gray/5 border-2 border-burnt-brass/30 rounded-2xl p-8 md:p-12 backdrop-blur-md">
                <div className="mb-8 md:mb-10 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-burnt-brass to-burnt-brass/30 hidden md:block"></div>
                  <p className="text-burnt-brass text-lg md:text-2xl font-semibold italic pl-6 md:pl-8 leading-relaxed">
                    &quot;Technology should empower, accelerate, and elevate human potential.&quot;
                  </p>
                </div>

                <div className="space-y-6 md:space-y-8">
                  <p className="text-antique-linen/90 text-base md:text-lg leading-relaxed">
                    As the <span className="text-burnt-brass font-semibold">Chief Technology Officer</span> at <span className="text-burnt-brass font-semibold">Emoh Links Ltd</span>, <span className="text-burnt-brass font-semibold">Software Systems Architect</span> at <span className="text-burnt-brass font-semibold">Angavix Systems Ltd</span>, and <span className="text-burnt-brass font-semibold">Founder</span> of <span className="text-burnt-brass font-semibold">Tayari Careers & Correspond</span>, I architect and build enterprise-grade systems bridging hardware, telecom networks, mobile experiences, and modern web platforms.
                  </p>

                  <p className="text-antique-linen/90 text-base md:text-lg leading-relaxed">
                    My engineering ethos combines deep technical rigour with human-centered product strategy. Over the past several years, I have architected carrier-grade automated ISP provisioning backends, autonomous drone telemetry cockpit companion apps, clinical health operating systems, and startup productivity suites.
                  </p>

                  <p className="text-antique-linen/90 text-base md:text-lg leading-relaxed">
                    With an acute focus on youth entrepreneurship through <span className="text-burnt-brass font-semibold">Tayari Correspond</span> and the <span className="text-burnt-brass font-semibold">Tayari Careers</span> talent network, I am committed to empowering the next generation of African builders to transition from ambitious students into thriving startup founders.
                  </p>
                </div>

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

        {/* Tech Stack & What I Do Section */}
        <section className="relative z-10 w-full bg-deep-charcoal py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
              
              {/* Tech Stack Card */}
              <div className="w-full md:w-1/2">
                <div className="relative group">
                  <div className="absolute -top-4 left-0 w-24 h-0.5 bg-gradient-to-r from-burnt-brass to-transparent"></div>
                  
                  <div className="relative bg-mist-gray/5 border-2 border-burnt-brass/30 rounded-2xl p-8 md:p-10 backdrop-blur-sm transition-all duration-300 hover:border-burnt-brass/50 hover:shadow-xl hover:shadow-burnt-brass/10">
                    <div className="mb-6">
                      <h3 className="text-burnt-brass font-bold text-2xl md:text-3xl tracking-wide mb-2">
                        Core Engineering Stack
                      </h3>
                      <p className="text-antique-linen/70 text-sm md:text-base">
                        Specialized languages, frameworks & platforms
                      </p>
                    </div>

                    <div className="space-y-6">
                      {Object.entries(techStackCategories).map(([category, skills]) => (
                        <div key={category}>
                          <h4 className="text-burnt-brass font-semibold text-sm md:text-base mb-3 uppercase tracking-wide">
                            {category === 'CloudAndDevOps' ? 'Cloud, DevOps & Protocols' : category}
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

              {/* What I Do & Profile Showcase */}
              <div className="w-full md:w-1/2 flex items-start">
                <div className="w-full">
                  <div className="mb-8 md:mb-10">
                    <Suspense fallback={<h2 className="md:text-5xl text-3xl font-extrabold text-antique-linen">Engineering Focus</h2>}>
                      <BlurText
                        text="Engineering Focus"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        onAnimationComplete={handleAnimationComplete}
                        className="md:text-5xl text-3xl font-extrabold text-antique-linen"
                      />
                    </Suspense>
                  </div>

                  <Suspense fallback={<div className="hidden md:block w-full h-[500px] bg-mist-gray/10 rounded-lg" />}>
                    <div className="hidden md:block w-full">
                      <TiltedCard
                        imageSrc="/photos/me.jpg"
                        altText="Melgibson Kennedy Odari - Full Stack Developer"
                        captionText="Melgibson Kennedy Odari" 
                        containerHeight="500px"
                        containerWidth="100%"
                        imageHeight="500px"
                        imageWidth="100%"
                        rotateAmplitude={8}
                        scaleOnHover={1.03}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={false}
                      />
                    </div>
                  </Suspense>

                  <Suspense fallback={<div className="md:hidden w-full h-[350px] bg-mist-gray/10 rounded-lg" />}>
                    <div className="md:hidden w-full">
                      <TiltedCard
                        imageSrc="/photos/me.jpg"
                        altText="Melgibson Kennedy Odari - Full Stack Developer"
                        captionText="Melgibson Kennedy Odari"
                        containerHeight="350px"
                        containerWidth="100%"
                        imageHeight="350px"
                        imageWidth="100%"
                        rotateAmplitude={8}
                        scaleOnHover={1.03}
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
        <div className="flex w-full items-center justify-center p-4 md:mt-25 mt-5 scroll-mt-20 md:scroll-mt-24" id="experience">
          <Suspense fallback={<h2 className="md:text-7xl text-3xl font-extrabold text-antique-linen">Professional Experience</h2>}>
            <BlurText
              text="Professional Experience"
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

        {/* Projects Section Header */}
        <div className="flex flex-col w-full items-center justify-center p-4 md:mt-24 mt-10 scroll-mt-20 md:scroll-mt-24" id="projects">
          <Suspense fallback={<h2 className="md:text-7xl text-3xl font-extrabold text-antique-linen">Selected Works</h2>}>
            <BlurText
              text="Selected Works"
              delay={150}
              animateBy="letters"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="md:text-7xl text-3xl font-extrabold text-antique-linen text-center"
            />
          </Suspense>
          <p className="mt-4 text-center text-sm md:text-base text-antique-linen/70 max-w-2xl px-4">
            A comprehensive classification across Corporate & Informative Websites, Mobile Flutter Applications, and Enterprise SaaS & Systems.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mt-8 max-w-4xl px-4">
            {CATEGORIES.map(category => {
              const isSelected = selectedCategory === category;
              const count = categoryCounts[category] || 0;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 border ${
                    isSelected
                      ? 'bg-burnt-brass text-deep-charcoal border-burnt-brass shadow-lg shadow-burnt-brass/25 scale-105'
                      : 'bg-mist-gray/10 hover:bg-mist-gray/20 text-antique-linen/80 hover:text-antique-linen border-burnt-brass/20'
                  }`}
                  type="button"
                >
                  <span className={isSelected ? 'text-deep-charcoal' : 'text-burnt-brass'}>
                    {getCategoryIcon(category)}
                  </span>
                  <span>{category}</span>
                  <span className={`text-[11px] px-1.5 py-0.2 rounded-full font-bold ${
                    isSelected ? 'bg-deep-charcoal/20 text-deep-charcoal' : 'bg-burnt-brass/15 text-burnt-brass'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <Suspense fallback={<div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1400px] mx-auto mt-10 gap-6 px-4"><div className="h-96 bg-mist-gray/10 rounded-lg" /><div className="h-96 bg-mist-gray/10 rounded-lg" /></div>}>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1400px] mx-auto mt-10 gap-6 px-4">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
                onOpenLightbox={handleOpenLightbox}
              />
            ))}
          </div>
        </Suspense>

        {/* Modal Lightbox for High-Resolution Screenshot Inspection */}
        {lightboxData.isOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn"
            onClick={() => setLightboxData({ isOpen: false, imageSrc: '', title: '' })}
          >
            <div 
              className="relative max-w-5xl w-full max-h-[90vh] bg-deep-charcoal rounded-2xl border border-burnt-brass/40 shadow-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-burnt-brass/20 bg-black/30">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-burnt-brass animate-pulse"></span>
                  <h4 className="text-sm md:text-base font-bold text-antique-linen">
                    {lightboxData.title}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => setLightboxData({ isOpen: false, imageSrc: '', title: '' })}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-antique-linen transition-colors"
                  aria-label="Close lightbox"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body Image */}
              <div className="relative w-full h-[65vh] md:h-[75vh] p-4 flex items-center justify-center bg-black/40">
                <Image
                  src={lightboxData.imageSrc}
                  alt={lightboxData.title}
                  fill
                  className="object-contain p-2"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer Section */}
      <footer className="flex flex-col md:flex-row w-full items-center justify-between px-6 md:px-12 py-8 border-t border-burnt-brass/20 text-antique-linen/60 text-sm font-light mt-20 gap-4">
        <p>&copy; {new Date().getFullYear()} Melgibson Kennedy Odari. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/MelgibsonK" target="_blank" rel="noopener noreferrer" className="hover:text-burnt-brass transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/melgibson-kennedy" target="_blank" rel="noopener noreferrer" className="hover:text-burnt-brass transition-colors">LinkedIn</a>
          <a href="mailto:melgibsonkennedy@gmail.com" className="hover:text-burnt-brass transition-colors">Email</a>
        </div>
      </footer>
    </>
  );
}
