'use client';

import React, { Suspense } from 'react';
import BlurText from '@/blocks/TextAnimations/BlurText/BlurText';

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/files/Resume- Melgibson_Kennedy_Odari.pdf';
    link.download = 'Resume- Melgibson_Kennedy_Odari.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Melgibson Kennedy Odari",
            "alternateName": "Melgibson Kennedy",
            "jobTitle": "Chief Technology Officer (CTO)",
            "worksFor": {
              "@type": "Organization",
              "name": "Emoh Links Ltd",
              "url": "https://emohlinks.co.ke"
            },
            "founder": {
              "@type": "Organization",
              "name": "Tayari Careers",
              "url": "https://tayaricareers.africa"
            },
            "url": "https://melgibsonkennedy.vercel.app/Resume",
            "sameAs": [
              "https://www.linkedin.com/in/melgibson-kennedy",
              "https://github.com/MelgibsonK"
            ],
            "email": "melgibsonkennedy@gmail.com"
          })
        }}
      />
    <main className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-deep-charcoal relative">
      {/* Vintage Paper Container */}
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-8">
          <Suspense fallback={<h1 className="text-3xl md:text-4xl font-bold text-antique-linen">Resume</h1>}>
            <BlurText
              text="Resume"
              delay={50}
              animateBy="letters"
              direction="top"
              className="text-3xl md:text-4xl font-bold text-center text-antique-linen"
            />
          </Suspense>
        </div>

        {/* Vintage Paper Document */}
        <div className="relative vintage-paper bg-soft-white rounded-lg shadow-2xl p-8 md:p-12 border-2 border-burnt-brass/30">
          {/* Download Button - Mobile: top right, Desktop: absolute top right */}
          <div className="absolute top-2 right-2 md:top-4 md:right-4 z-10">
            <button
              onClick={handleDownload}
              className="group px-2 py-1 md:px-4 md:py-2 bg-burnt-brass font-semibold rounded-full hover:bg-highlight-gold transition-all duration-300 flex items-center space-x-1 md:space-x-2 shadow-lg hover:shadow-xl hover:scale-105 text-xs md:text-base"
              style={{ color: '#1F1F1C', border: '2px solid #B08D57' }}
            >
              <span style={{ color: '#1F1F1C', fontWeight: 600 }}>Download</span>
              <svg className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#1F1F1C' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </div>

          {/* Resume Content - Mobile: below download button, Desktop: normal */}
          <div className="relative z-10 resume-content mt-12 md:mt-0" style={{ color: '#1F1F1C', textShadow: 'none', opacity: 1 }}>
            {/* Header */}
            <div className="resume-header text-center mb-8 pb-6 border-b-2 border-burnt-brass/40">
              <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#1F1F1C' }}>Melgibson Kennedy</h1>
              <div className="text-lg md:text-xl font-semibold mb-4" style={{ color: '#B08D57' }}>
                Chief Technology Officer (CTO) | Founder | Software & Product Leader
              </div>
              <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base" style={{ color: '#1F1F1C' }}>
                <span>(+254) 701-178-353</span>
                <span className="text-burnt-brass">|</span>
                <a href="mailto:melgibsonkennedy@gmail.com" className="hover:text-burnt-brass transition-colors">
                  melgibsonkennedy@gmail.com
                </a>
                <span className="text-burnt-brass">|</span>
                <a href="https://github.com/MelgibsonK" target="_blank" rel="noopener noreferrer" className="hover:text-burnt-brass transition-colors">
                  github.com/MelgibsonK
                </a>
                <span className="text-burnt-brass">|</span>
                <a href="https://linkedin.com/in/melgibson-kennedy" target="_blank" rel="noopener noreferrer" className="hover:text-burnt-brass transition-colors">
                  linkedin.com/in/melgibson-kennedy
                </a>
                <span className="text-burnt-brass">|</span>
                <a href="https://melgibsonkennedy.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-burnt-brass transition-colors">
                  melgibsonkennedy.vercel.app
                </a>
              </div>
            </div>

            {/* Profile Section */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-burnt-brass border-b border-burnt-brass/30 pb-2">Profile</h2>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: '#1F1F1C' }}>
                Innovative and results-driven technology leader with a proven track record in software development, business growth, and digital transformation. As <strong>CTO of Emoh Links Ltd</strong> and <strong>Founder of Tayari Careers</strong>, I blend technical excellence with strategic leadership to build scalable products, empower teams, and drive innovation. I excel in fast-paced environments where technology meets impact — leading projects from concept to execution with precision, creativity, and measurable results.
              </p>
            </section>

            {/* Experience Section */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-burnt-brass border-b border-burnt-brass/30 pb-2">Experience</h2>

              {/* Angavix Systems Ltd */}
              <div className="mb-6">
                <div className="flex flex-wrap items-baseline gap-2 mb-2">
                  <h3 className="text-lg md:text-xl font-bold" style={{ color: '#1F1F1C' }}>Software Engineer / Systems Architect (Part-Time)</h3>
                  <span className="text-burnt-brass">|</span>
                  <a href="https://www.angavix.com/" target="_blank" rel="noopener noreferrer" className="text-burnt-brass hover:underline">Angavix Systems Ltd</a>
                  <span className="text-burnt-brass">|</span>
                  <span style={{ color: '#1F1F1C' }}>June 10, 2026 – Present</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base ml-4" style={{ color: '#1F1F1C' }}>
                  <li>Architected and developed <strong>Angavix Hub</strong>, a high-throughput enterprise UAV fleet telemetry, mission dispatch, and flight intelligence platform.</li>
                  <li>Engineered the <strong>Angavix Hub Companion</strong> native Android application for offline-first flight logging, sensor sync, and cockpit field telemetry.</li>
                  <li>Integrated mission compliance audit pipelines and real-time geospatial telemetry mapping with automated airworthiness tracking.</li>
                  <li>Designed and deployed the corporate web platform with Apple-inspired liquid-glass design aesthetics and SEO dominance.</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <div className="flex flex-wrap items-baseline gap-2 mb-2">
                  <h3 className="text-lg md:text-xl font-bold" style={{ color: '#1F1F1C' }}>Chief Technology Officer (CTO)</h3>
                  <span className="text-burnt-brass">|</span>
                  <a href="https://emohlinks.co.ke" target="_blank" rel="noopener noreferrer" className="text-burnt-brass hover:underline">Emoh Links Ltd</a>
                  <span className="text-burnt-brass">|</span>
                  <span style={{ color: '#1F1F1C' }}>2024 – Present</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base ml-4" style={{ color: '#1F1F1C' }}>
                  <li>Lead the company&apos;s entire technology ecosystem, including ISP infrastructure, subscriber billing, and digital growth strategy.</li>
                  <li>Architected and deployed <strong>Radius One</strong>, a scalable ISP subscriber management and automated billing engine.</li>
                  <li>Implemented automation and analytics frameworks, improving operational efficiency by over 40%.</li>
                  <li>Supervised engineering and product teams to align technology with business growth and customer experience goals.</li>
                  <li>Spearheaded innovation in service delivery, system reliability, and product scalability.</li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap items-baseline gap-2 mb-2">
                  <h3 className="text-lg md:text-xl font-bold" style={{ color: '#1F1F1C' }}>Founder & Lead Architect</h3>
                  <span className="text-burnt-brass">|</span>
                  <a href="https://tayaricareers.africa" target="_blank" rel="noopener noreferrer" className="text-burnt-brass hover:underline">Tayari Careers &amp; Correspond Workspace</a>
                  <span className="text-burnt-brass">|</span>
                  <span style={{ color: '#1F1F1C' }}>2024 – Present</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base ml-4" style={{ color: '#1F1F1C' }}>
                  <li>Founded a unified youth empowerment ecosystem combining <strong>Tayari Careers</strong> (talent discovery &amp; career readiness) and <strong>Tayari Correspond</strong> (real-time workspace for student-led startups and entrepreneurship).</li>
                  <li>Engineered cross-platform mobile apps in <strong>Flutter</strong> alongside a collaborative SaaS workspace with live document sync, Kanban boards, and milestone tracking.</li>
                  <li>Built and scaled partnerships with universities, incubators, and SMEs across East Africa to foster youth employment.</li>
                  <li>Defined strategic goals, product vision, and technology roadmap to ensure measurable growth and sustainability.</li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap items-baseline gap-2 mb-2">
                  <h3 className="text-lg md:text-xl font-bold" style={{ color: '#1F1F1C' }}>Freelance Software Developer & Systems Consultant</h3>
                  <span className="text-burnt-brass">|</span>
                  <a href="https://melgibsonkennedy.vercel.app" target="_blank" rel="noopener noreferrer" className="text-burnt-brass hover:underline">Self-Employed</a>
                  <span className="text-burnt-brass">|</span>
                  <span style={{ color: '#1F1F1C' }}>2022 – 2023</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base ml-4" style={{ color: '#1F1F1C' }}>
                  <li>Delivered full-stack mobile and web applications for SMEs, startups, and international healthcare and legal organizations.</li>
                  <li>Provided consulting services in digital transformation, product design, and process automation.</li>
                  <li>Managed distributed development teams using <strong>Agile</strong> and <strong>Scrum</strong> methodologies.</li>
                  <li>Specialized in <strong>Flutter</strong>, <strong>React/Next.js</strong>, <strong>Node.js</strong>, and modern cloud-native deployments.</li>
                </ul>
              </div>
            </section>

            {/* Education Section */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-burnt-brass border-b border-burnt-brass/30 pb-2">Education</h2>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-1" style={{ color: '#1F1F1C' }}>Bachelor of Science, Information Technology</h3>
                <p className="text-sm md:text-base" style={{ color: '#1F1F1C' }}>KCA University, Kenya — 2023 – (Expected 2027)</p>
              </div>
            </section>

            {/* Core Competencies Section */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-burnt-brass border-b border-burnt-brass/30 pb-2">Core Competencies</h2>
              <div className="space-y-3 text-sm md:text-base" style={{ color: '#1F1F1C' }}>
                <p>
                  <strong className="text-burnt-brass">Leadership & Strategy:</strong> Technology Leadership · Product Management · Strategic Planning · Cross-Functional Collaboration · Operational Efficiency · Business Scaling
                </p>
                <p>
                  <strong className="text-burnt-brass">Technical Expertise:</strong> Software Architecture · Mobile App Development (Flutter) · Full-Stack Development · API Design · Cloud Infrastructure (AWS, Vercel) · DevOps Automation
                </p>
                <p>
                  <strong className="text-burnt-brass">Business Acumen:</strong> Digital Transformation · Process Optimization · Data-Driven Decision Making · Innovation Management · Stakeholder Engagement · Client Relations
                </p>
                <p>
                  <strong className="text-burnt-brass">Execution & Delivery:</strong> Agile Project Management · Problem Solving · Analytical Thinking · Performance Optimization · Mentorship & Team Growth
                </p>
              </div>
            </section>

            {/* Selected Projects Section */}
            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-burnt-brass border-b border-burnt-brass/30 pb-2">Selected Key Systems &amp; Platforms</h2>

              <div className="mb-5">
                <h3 className="text-base md:text-lg font-bold mb-1" style={{ color: '#1F1F1C' }}>
                  Angavix Hub &amp; UAV Flight Companion — <a href="https://www.angavix.com/" target="_blank" rel="noopener noreferrer" className="text-burnt-brass hover:underline">angavix.com</a>
                </h3>
                <p className="text-xs md:text-sm text-burnt-brass/80 font-medium mb-1">Next.js 15 · Native Android · Geospatial Maps · Flight Telemetry · High-Availability SaaS</p>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: '#1F1F1C' }}>
                  Enterprise uncrewed aerial vehicle (UAV) fleet management and telemetry synchronization engine. Features real-time GPS tracking, automated flight compliance audits, pilot operations dispatch, and a native Android cockpit companion app for offline field logging.
                </p>
              </div>

              <div className="mb-5">
                <h3 className="text-base md:text-lg font-bold mb-1" style={{ color: '#1F1F1C' }}>
                  Tayari Ecosystem (Careers &amp; Correspond Workspace) — <a href="https://tayaricareers.africa" target="_blank" rel="noopener noreferrer" className="text-burnt-brass hover:underline">tayaricareers.africa</a>
                </h3>
                <p className="text-xs md:text-sm text-burnt-brass/80 font-medium mb-1">Flutter Mobile (iOS &amp; Android) · Supabase Realtime · Next.js · Student Startup Hub</p>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: '#1F1F1C' }}>
                  Dual-purpose youth empowerment ecosystem combining an AI-assisted talent discovery and internship platform with an entrepreneurial workspace (Tayari Correspond) providing real-time document collaboration, Kanban workflows, and venture milestone management for student-led startups.
                </p>
              </div>

              <div className="mb-5">
                <h3 className="text-base md:text-lg font-bold mb-1" style={{ color: '#1F1F1C' }}>
                  Radius One ISP Management Engine (Emoh Links) — <a href="https://www.radiusone.site/" target="_blank" rel="noopener noreferrer" className="text-burnt-brass hover:underline">radiusone.site</a>
                </h3>
                <p className="text-xs md:text-sm text-burnt-brass/80 font-medium mb-1">Next.js · Node.js · Network RADIUS · M-Pesa Gateway · Realtime Metrics</p>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: '#1F1F1C' }}>
                  Next-generation multi-tenant ISP management infrastructure powering subscriber onboarding, automated M-Pesa tariff billing, bandwidth allocation, and live network uptime diagnostics.
                </p>
              </div>

              <div className="mb-5">
                <h3 className="text-base md:text-lg font-bold mb-1" style={{ color: '#1F1F1C' }}>
                  Moringa Integrated Healthcare System — <a href="https://www.moringaclinic.com/" target="_blank" rel="noopener noreferrer" className="text-burnt-brass hover:underline">moringaclinic.com</a>
                </h3>
                <p className="text-xs md:text-sm text-burnt-brass/80 font-medium mb-1">Electronic Health Records (EHR) · Clinical Triage · Pharmacy Inventory · Lab Reporting</p>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: '#1F1F1C' }}>
                  Full-stack healthcare facility operating system facilitating encrypted patient records, clinical consultation workflows, diagnostic lab results dispatch, and dispensary inventory tracking.
                </p>
              </div>

              <div className="mb-5">
                <h3 className="text-base md:text-lg font-bold mb-1" style={{ color: '#1F1F1C' }}>
                  High-Impact Enterprise Web Solutions
                </h3>
                <p className="text-xs md:text-sm text-burnt-brass/80 font-medium mb-1">Next.js · Glassmorphism · SEO Architecture · Performance Engineering</p>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: '#1F1F1C' }}>
                  Engineered bespoke, high-performance web platforms for international clients including <strong>Excellent Home Health LLC</strong> (US healthcare compliance &amp; client onboarding), <strong>Rashid Law Advocates</strong> (premier legal practice portal), <strong>Terravia Farms</strong> (precision agribusiness export showcase), and <strong>Design Triage</strong> (creative agency digital showcase).
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Vintage Paper Styles */}
      <style jsx>{`
        .vintage-paper {
          background: #FAF9F6;
          position: relative;
          box-shadow: 
            0 10px 40px rgba(31, 31, 28, 0.3);
        }

        .resume-content {
          font-family: 'Georgia', 'Times New Roman', serif;
        }

        .resume-content h1,
        .resume-content h2,
        .resume-content h3 {
          font-family: inherit;
        }

        .resume-content a {
          text-decoration: none;
        }

        .resume-content a:hover {
          text-decoration: underline;
        }

        .resume-content ul {
          list-style-type: disc;
        }

        .resume-content li {
          margin-bottom: 0.25rem;
        }

        @media print {
          .vintage-paper {
            box-shadow: none;
            border: 1px solid #B08D57;
          }
        }
      `}</style>
        </main>
      </>
    );
}

