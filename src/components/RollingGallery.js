import React, { useEffect, useRef, useState } from "react";
import "./RollingGallery.css";

const IMGS = [
  {src: "/Blogposts/blog1.png", url: "https://ieee-tems-blogs.medium.com/mastering-css-media-queries-the-ultimate-guide-to-responsive-design-da5bbd414766"},
  {src: "/Blogposts/blog2.png", url:"https://ieee-tems-blogs.medium.com/mastering-flexbox-a-fun-yet-powerful-css-journey-a7e045d399b8"},
  {src: "/Blogposts/blog3.png", url:"https://ieee-tems-blogs.medium.com/navigating-the-frontend-landscape-lessons-learned-and-resources-that-work-8e835c61f51a"},
  {src: "/Blogposts/blog4.png", url:"https://ieee-tems-blogs.medium.com/git-101-8193542d7f2c"},
  {src: "/Blogposts/blog5.png", url:"https://ieee-tems-blogs.medium.com/mastering-flexbox-a-fun-yet-powerful-css-journey-a7e045d399b8"},
  {src: "/Blogposts/blog6.png", url:"https://ieee-tems-blogs.medium.com/from-code-to-cloud-deploying-maven-projects-on-aws-3733e60a52ef"},
  {src:"/Blogposts/blog7.png", url:"https://ieee-tems-blogs.medium.com/the-linux-weatherman-crafting-accurate-reports-from-scratch-8887a0b32a77"}
];

const RollingGallery = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const animationRef = useRef(null);
  const containerRef = useRef(null);

  const images = IMGS;
  const faceCount = images.length;
  
  // Responsive cylinder dimensions
  const cylinderWidth = isMobile ? 1200 : 2400;
  const radius = cylinderWidth / (2 * Math.PI);
  const faceWidth = cylinderWidth / faceCount;

  // Auto-rotation
  useEffect(() => {
    const animate = () => {
      if (!isDragging) {
        setRotation(prev => prev - 0.1);
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDragging]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mouse/Touch handlers
  const handleStart = (clientX) => {
    setIsDragging(true);
    setStartX(clientX);
    setCurrentX(clientX);
  };

  const handleMove = (clientX) => {
    if (!isDragging) return;
    setCurrentX(clientX);
    const deltaX = (clientX - startX) * 0.5;
    setRotation(prev => prev + deltaX);
    setStartX(clientX);
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  const handleImageClick = (url) => {
    if (!isDragging) {
      window.open(url, '_blank');
    }
  };

  return (
    <section 
      id="Blog"
      className="gallery-section"
    >
      {/* Title */}
      <div className="gallery-title-wrapper">
        <h2 className="gallery-title">
          <span className="gallery-title-text">
            Our Blogs
            <div className="gallery-title-underline"></div>
          </span>
        </h2>
      </div>

      {/* Gallery Container */}
      <div 
        ref={containerRef}
        className="gallery-container-main"
      >
        {/* Gradients */}
        <div className="gallery-gradient gallery-gradient-left" />
        <div className="gallery-gradient gallery-gradient-right" />

        {/* Carousel */}
        <div 
          className="gallery-carousel-wrapper"
          onMouseDown={(e) => handleStart(e.clientX)}
          onMouseMove={(e) => handleMove(e.clientX)}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={(e) => handleStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
          onTouchEnd={handleEnd}
        >
          <div
            className="gallery-carousel"
            style={{
              transform: `rotateY(${rotation}deg)`,
              transition: isDragging ? 'none' : 'transform 0.1s linear'
            }}
          >
            {images.map((item, i) => {
              const angle = (360 / faceCount) * i;
              return (
                <div
                  key={i}
                  className="gallery-item"
                  style={{
                    width: isMobile ? '140px' : '220px',
                    height: isMobile ? '140px' : '220px',
                    transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${radius}px)`,
                  }}
                  onClick={() => handleImageClick(item.url)}
                >
                  <div className="gallery-item-inner">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="gallery-img"
                      draggable="false"
                    />
                    {/* Hover overlay */}
                    <div className="gallery-overlay">
                      <div className="gallery-overlay-content">
                        <p className="gallery-overlay-title">{item.title}</p>
                        <p className="gallery-overlay-subtitle">Click to read</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* View More Button */}
      <div className="gallery-button-wrapper">
        <a
          href="https://ieee-tems-blogs.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="gallery-button-link"
        >
          <button className="gallery-button">
            View More Blogs →
          </button>
        </a>
      </div>

      {/* Mobile Instructions */}
      {isMobile && (
        <div className="gallery-mobile-instruction">
                  </div>
      )}
    </section>
  );
};

export default RollingGallery;