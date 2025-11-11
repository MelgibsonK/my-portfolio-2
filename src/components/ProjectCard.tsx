import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: {
    id: number;
    number: string;
    title: string;
    description: string;
    techstack: string[];
    imageSrc: string; 
    link: string;
    previewUrl?: string;
  };
  index: number; 
}

// --- Optimization 1: Use React.memo ---
// Wrap the component with React.memo. This prevents the component from re-rendering
// if its props (project and index) have not shallowly changed.
const ProjectCard: React.FC<ProjectCardProps> = React.memo(({ project, index }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // Determine the layout pattern based on the index (0, 1, 2, 3 repeats)
  const pattern = index % 4;

  // Define classes for positioning the large project number absolutely
  let numberPositionClasses = '';
  // Define classes for text alignment of the content block
  let contentAlignmentClasses = '';
  // Define order classes for the image and text blocks
  let imageOrderClass = '';
  let textOrderClass = '';


  switch (pattern) {
    case 0: // Pattern 1: Number Top-Left, Text Top-Right, Image Below Text
      numberPositionClasses = 'top-4 left-4'; // Added padding from edge
      contentAlignmentClasses = 'text-right items-end'; // Align text to the right
      textOrderClass = 'order-1'; // Text comes first
      imageOrderClass = 'order-2'; // Image comes second
      break;
    case 1: // Pattern 2: Number Bottom-Left, Text Top-Right, Image Above Text
      numberPositionClasses = 'bottom-4 left-4'; // Added padding from edge
      contentAlignmentClasses = 'text-right items-end'; // Align text to the right
      textOrderClass = 'order-2'; // Text comes second
      imageOrderClass = 'order-1'; // Image comes first
      break;
    case 2: // Pattern 3: Number Top-Right, Text Top-Left, Image Below Text
      numberPositionClasses = 'top-4 right-4'; // Added padding from edge
      contentAlignmentClasses = 'text-left items-start'; // Align text to the left
      textOrderClass = 'order-1'; // Text comes first
      imageOrderClass = 'order-2'; // Image comes second
      break;
    case 3: // Pattern 4: Number Bottom-Right, Text Top-Left, Image Above Text
      numberPositionClasses = 'bottom-4 right-4'; // Added padding from edge
      contentAlignmentClasses = 'text-left items-start'; // Align text to the left
      textOrderClass = 'order-2'; // Text comes second
      imageOrderClass = 'order-1'; // Image comes first
      break;
  }

  // Handle click to redirect
  const handleImageClick = () => {
    if (project.link) {
      window.open(project.link, '_blank');
    }
  };

  // Generate screenshot URL using a screenshot service (using api.screenshotone.com as example)
  const getScreenshotUrl = (url: string) => {
    if (!url) return project.imageSrc;
    // Using screenshotone.com API (free tier available)
    // You can also use other services like api.screenshotmachine.com, etc.
    const encodedUrl = encodeURIComponent(url);
    return `https://api.screenshotone.com/take?access_key=YOUR_API_KEY&url=${encodedUrl}&viewport_width=1280&viewport_height=720&device_scale_factor=1&format=png&image_quality=80&block_ads=true&block_cookie_banners=true&block_banners_by_heuristics=true&block_trackers=true&delay=2&timeout=10`;
  };

  return (
    // Use motion.div for potential future animations (like fade-in on scroll)
    // Add a thin white border and transparent background
    // Use 'relative' for positioning context for the absolute number
    // Use flex-col to stack content vertically, justify-between to space text and image
    // Removed aspect-square to allow height to be determined by content
    <motion.div
      className="relative flex flex-col justify-between py-6 px-6 md:px-8 border border-burnt-brass/30 bg-mist-gray/5 overflow-hidden h-full group hover:border-burnt-brass/60 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      {/* Large Project Number - Absolutely Positioned with vintage style */}
      <div className={`absolute md:text-7xl text-4xl p-6 font-bold text-burnt-brass/10 ${numberPositionClasses} font-serif`}>
        {project.number}
      </div>

      {/* Content Area (Text Block and Image Block) */}
      <div className="flex flex-col justify-between h-full">

        {/* Text Content Block (Title, Category, Description) */}
        <div className={`flex flex-col ${contentAlignmentClasses} ${textOrderClass} z-10 p-4`}>
            {/* Title and Category */}
            <div>
              <h3 className="md:text-2xl text-lg font-bold text-burnt-brass mb-2 group-hover:text-highlight-gold transition-colors">{project.title}</h3>
              <p className="md:text-sm text-xs text-antique-linen/70 mb-3">{project.description}</p>
            </div>
            {/* Tech Stack Icons */}
            <div className="mt-2 flex flex-wrap gap-2">
              {project.techstack.map((icon, idx) => (
                <div key={idx} className="w-6 h-6 relative opacity-70 hover:opacity-100 transition-opacity">
                  <Image 
                    src={icon} 
                    alt={`Tech stack icon ${idx}`} 
                    width={24} 
                    height={24}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
        </div>

        {/* Project Preview Block - Website Preview with Vintage Theme */}
        <motion.div
            className={`relative w-full flex-grow rounded-lg overflow-hidden z-10 ${imageOrderClass} border border-burnt-brass/20 group-hover:border-burnt-brass/50 transition-all duration-300`}
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={handleImageClick}
            onMouseEnter={() => setShowPreview(true)}
            onMouseLeave={() => setShowPreview(false)}
        >
            {/* Website Preview using iframe or screenshot */}
            {project.previewUrl && !imageError ? (
              <div className="relative w-full h-full min-h-[300px] bg-deep-charcoal">
                <iframe
                  src={project.previewUrl}
                  className="w-full h-full border-0"
                  style={{ 
                    transform: 'scale(0.5)',
                    transformOrigin: 'top left',
                    width: '200%',
                    height: '200%',
                    pointerEvents: 'none'
                  }}
                  loading="lazy"
                  onError={() => setImageError(true)}
                />
                {/* Overlay for better vintage look */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-deep-charcoal/20 pointer-events-none" />
              </div>
            ) : (
              <div className="relative w-full h-full min-h-[300px] bg-mist-gray/10 flex items-center justify-center">
                <Image
                  src={project.imageSrc}
                  alt={`${project.title} preview`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  onError={() => setImageError(true)}
                  loading="lazy"
                />
                {/* Vintage overlay effect */}
                <div className="absolute inset-0 bg-burnt-brass/5 pointer-events-none" />
              </div>
            )}
            {/* Visit Website Badge */}
            <div className="absolute bottom-4 right-4 bg-burnt-brass/90 text-deep-charcoal px-3 py-1.5 rounded text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Visit Website →
            </div>
        </motion.div>

      </div> {/* End Content Area */}
    </motion.div>
  );
}); // End of React.memo wrap

ProjectCard.displayName = 'ProjectCard'; // Add a display name for better debugging

export default ProjectCard;