// src/app/Resume/page.tsx

'use client';

import React, { Suspense } from 'react';
import BlurText from '@/blocks/TextAnimations/BlurText/BlurText';

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/files/melgibsone.pdf';
    link.download = 'Resume-Melgibson_Kennedy_Odari.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
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
                <a href="https://melgibsonkennedy.com" target="_blank" rel="noopener noreferrer" className="hover:text-burnt-brass transition-colors">
                  melgibsonkennedy.com
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
              
              <div className="mb-6">
                <div className="flex flex-wrap items-baseline gap-2 mb-2">
                  <h3 className="text-lg md:text-xl font-bold" style={{ color: '#1F1F1C' }}>Chief Technology Officer (CTO)</h3>
                  <span className="text-burnt-brass">|</span>
                  <a href="https://emohlinks.co.ke" target="_blank" rel="noopener noreferrer" className="text-burnt-brass hover:underline">Emoh Links Ltd</a>
                  <span className="text-burnt-brass">|</span>
                  <span style={{ color: '#1F1F1C' }}>2024 – Present</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base ml-4" style={{ color: '#1F1F1C' }}>
                  <li>Lead the company&apos;s entire technology ecosystem, including infrastructure, product development, and digital strategy.</li>
                  <li>Architected and deployed high-availability systems powering customer and partner platforms.</li>
                  <li>Implemented automation and analytics frameworks, improving operational efficiency by over 40%.</li>
                  <li>Supervised engineering and product teams to align technology with business growth and customer experience goals.</li>
                  <li>Spearheaded innovation in service delivery, system reliability, and product scalability.</li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap items-baseline gap-2 mb-2">
                  <h3 className="text-lg md:text-xl font-bold" style={{ color: '#1F1F1C' }}>Founder & Software Lead</h3>
                  <span className="text-burnt-brass">|</span>
                  <a href="https://tayaricareers.africa" target="_blank" rel="noopener noreferrer" className="text-burnt-brass hover:underline">Tayari Careers</a>
                  <span className="text-burnt-brass">|</span>
                  <span style={{ color: '#1F1F1C' }}>2024 – Present</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base ml-4" style={{ color: '#1F1F1C' }}>
                  <li>Founded and manage a mission-driven EdTech platform connecting students and startups through internships and career readiness tools.</li>
                  <li>Designed and oversaw development using <strong>Flutter</strong>, <strong>Supabase</strong>, and <strong>Next.js</strong>, ensuring a seamless user experience.</li>
                  <li>Built and scaled partnerships with universities, SMEs, and youth-focused organizations across Kenya.</li>
                  <li>Defined strategic goals, product vision, and technology roadmap to ensure measurable growth and sustainability.</li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap items-baseline gap-2 mb-2">
                  <h3 className="text-lg md:text-xl font-bold" style={{ color: '#1F1F1C' }}>Freelance Software Developer & Consultant</h3>
                  <span className="text-burnt-brass">|</span>
                  <a href="https://melgibsonkennedy.com" target="_blank" rel="noopener noreferrer" className="text-burnt-brass hover:underline">Self-Employed</a>
                  <span className="text-burnt-brass">|</span>
                  <span style={{ color: '#1F1F1C' }}>2022 – 2023</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base ml-4" style={{ color: '#1F1F1C' }}>
                  <li>Delivered full-stack mobile and web applications for SMEs, startups, and NGOs.</li>
                  <li>Provided consulting services in digital transformation, product design, and process automation.</li>
                  <li>Managed distributed development teams using <strong>Agile</strong> and <strong>Scrum</strong> methodologies.</li>
                  <li>Specialized in <strong>Flutter</strong>, <strong>Node.js</strong>, <strong>AWS</strong>, and modern cloud-native deployments.</li>
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
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-burnt-brass border-b border-burnt-brass/30 pb-2">Selected Projects</h2>
              
              <div className="mb-6">
                <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: '#1F1F1C' }}>Emoh Links Digital Infrastructure Modernization</h3>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: '#1F1F1C' }}>
                  Architected and led modernization of Emoh Links&apos; service management systems — implementing automated billing, monitoring, and real-time reporting dashboards. Resulted in improved scalability, data accuracy, and user experience.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: '#1F1F1C' }}>Career Development & Internship Platform — Tayari Careers</h3>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: '#1F1F1C' }}>
                  Built a modern cloud-based career development platform connecting students with verified internships and attachments. Designed and implemented end-to-end systems for opportunity matching, progress tracking, and performance analytics to support both students and startup employers.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: '#1F1F1C' }}>
                  Personal Portfolio & Tech Ecosystem — <a href="https://melgibsonkennedy.com" target="_blank" rel="noopener noreferrer" className="text-burnt-brass hover:underline">melgibsonkennedy.com</a>
                </h3>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: '#1F1F1C' }}>
                  Showcases professional projects, leadership work, and community contributions. Includes web and AI-driven tools demonstrating technical innovation and product strategy insight.
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
  );
}

