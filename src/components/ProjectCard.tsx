"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Smartphone, Tablet, Layers, Eye } from 'lucide-react';
import { ProjectItem } from '@/data/projects';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  onOpenLightbox?: (imageSrc: string, title: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = React.memo(({ project, index, onOpenLightbox }) => {
  const hasDeviceViews = Boolean(project.screenshots.mobile?.length && project.screenshots.tablet?.length);
  const [deviceMode, setDeviceMode] = useState<'mobile' | 'tablet'>('mobile');
  const [activeThumbIndex, setActiveThumbIndex] = useState(0);

  const currentScreenshotList = hasDeviceViews
    ? deviceMode === 'mobile'
      ? project.screenshots.mobile || []
      : project.screenshots.tablet || []
    : project.screenshots.all || [project.imageSrc];

  const currentDisplayImage = currentScreenshotList[activeThumbIndex] || currentScreenshotList[0] || project.imageSrc;

  return (
    <motion.div
      className="relative flex flex-col justify-between p-6 md:p-8 rounded-2xl border border-burnt-brass/25 bg-[#171715] overflow-hidden h-full group hover:border-burnt-brass/60 transition-all duration-300 shadow-xl hover:shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: (index % 2) * 0.08 }}
    >
      <div className="relative z-10 flex flex-col h-full justify-between">
        {/* Top Header Block */}
        <div>
          {/* Category Tag, Project Number & Theme-Matched Status (NO GREEN, NO DOTS) */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-burnt-brass text-xs bg-burnt-brass/15 border border-burnt-brass/35 px-2 py-0.5 rounded-md">
                #{project.number}
              </span>
              <span className="text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-burnt-brass/15 border border-burnt-brass/35 text-burnt-brass font-semibold">
                {project.category}
              </span>
            </div>

            {project.status && (
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-burnt-brass/10 border border-burnt-brass/30 text-highlight-gold font-medium tracking-wide">
                {project.status}
              </span>
            )}
          </div>

          {/* Ecosystem Tag if bundled */}
          {project.ecosystem && (
            <div className="mb-3 px-3 py-1.5 rounded-lg bg-burnt-brass/10 border border-burnt-brass/30 text-xs text-highlight-gold font-medium flex items-center gap-2">
              <Layers size={13} className="text-burnt-brass" />
              <span>{project.ecosystem}</span>
            </div>
          )}

          {/* Project Title & Tagline */}
          <h3 className="text-xl md:text-2xl font-bold text-antique-linen group-hover:text-highlight-gold transition-colors mb-1.5">
            {project.title}
          </h3>
          <p className="text-xs md:text-sm font-medium text-burnt-brass/90 mb-3 italic">
            {project.tagline}
          </p>

          {/* Description */}
          <p className="text-xs md:text-sm text-antique-linen/75 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Highlights bullet points */}
          <ul className="mb-4 space-y-1 text-xs text-antique-linen/60">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="text-burnt-brass font-bold">›</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Media / Screenshot Showcase Area */}
        <div className="mt-auto pt-4 border-t border-burnt-brass/15">
          {/* Device Switcher Header if both views exist */}
          {hasDeviceViews && (
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-xs font-semibold text-antique-linen/60">View Mode:</span>
              <div className="flex items-center gap-1 bg-deep-charcoal border border-burnt-brass/30 rounded-lg p-0.5">
                <button
                  type="button"
                  onClick={() => {
                    setDeviceMode('mobile');
                    setActiveThumbIndex(0);
                  }}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium transition-all ${
                    deviceMode === 'mobile'
                      ? 'bg-burnt-brass text-deep-charcoal shadow font-semibold'
                      : 'text-antique-linen/70 hover:text-antique-linen'
                  }`}
                >
                  <Smartphone size={13} />
                  <span>iPhone 17 Pro</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setDeviceMode('tablet');
                    setActiveThumbIndex(0);
                  }}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium transition-all ${
                    deviceMode === 'tablet'
                      ? 'bg-burnt-brass text-deep-charcoal shadow font-semibold'
                      : 'text-antique-linen/70 hover:text-antique-linen'
                  }`}
                >
                  <Tablet size={13} />
                  <span>iPad Air</span>
                </button>
              </div>
            </div>
          )}

          {/* Main Visual Display */}
          <div 
            className="relative w-full h-[260px] md:h-[300px] rounded-xl overflow-hidden border border-burnt-brass/20 bg-black/40 cursor-pointer group/img"
            onClick={() => onOpenLightbox?.(currentDisplayImage, `${project.title} (${hasDeviceViews ? deviceMode : 'Preview'})`)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentDisplayImage}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative w-full h-full flex items-center justify-center p-2"
              >
                <Image
                  src={currentDisplayImage}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-contain drop-shadow-md rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </motion.div>
            </AnimatePresence>

            {/* Hover Inspect Overlay */}
            <div className="absolute inset-0 bg-deep-charcoal/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <div className="px-3.5 py-1.5 rounded-full bg-burnt-brass text-deep-charcoal text-xs font-bold flex items-center gap-1.5 shadow-lg">
                <Eye size={14} />
                <span>Enlarge View</span>
              </div>
            </div>
          </div>

          {/* Thumbnail Selector Strip (if multiple in current view) */}
          {currentScreenshotList.length > 1 && (
            <div className="flex items-center gap-2 mt-3 overflow-x-auto pb-1 scrollbar-thin">
              {currentScreenshotList.map((thumb, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveThumbIndex(idx)}
                  className={`relative w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden border transition-all ${
                    activeThumbIndex === idx
                      ? 'border-burnt-brass ring-2 ring-burnt-brass/40 scale-105'
                      : 'border-burnt-brass/20 opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={thumb}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Bottom Controls: Tech Stack & Live Links */}
          <div className="flex items-center justify-between gap-3 mt-4 pt-3 border-t border-burnt-brass/10">
            {/* Tech stack icons */}
            <div className="flex items-center gap-2">
              {project.techstack.map((icon, idx) => (
                <div key={idx} className="w-6 h-6 relative opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src={icon}
                    alt={`Tech stack ${idx}`}
                    width={22}
                    height={22}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-burnt-brass/20 hover:bg-burnt-brass text-antique-linen hover:text-deep-charcoal text-xs font-semibold border border-burnt-brass/40 transition-all shadow-sm"
                >
                  <span>{project.liveUrl ? 'Visit Website' : 'Explore Platform'}</span>
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
