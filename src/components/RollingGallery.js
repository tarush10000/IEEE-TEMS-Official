import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useAnimation, useTransform } from "framer-motion";
import "./RollingGallery.css";
import './Blog.css';

const IMGS = [
  {src: "/Blogposts/bootstrap.webp", url: "https://ieee-tems-blogs.medium.com/introduction-guide-to-bootstrap-c2149dcd80cf"},
  {src: "/Blogposts/numpy.webp", url:"https://ieee-tems-blogs.medium.com/mastering-the-basics-of-numpy-a-step-by-step-guide-for-beginners-800bbd2337a6"},
  {src: "/Blogposts/responsive.webp", url:"https://ieee-tems-blogs.medium.com/responsive-web-design-creating-websites-for-all-devices-96aad294def1"},
  {src: "/Blogposts/shellscript.webp", url:"https://ieee-tems-blogs.medium.com/effortless-email-sending-on-linux-a-step-by-step-project-guide-fb557b6bda8"},
  {src: "/Blogposts/Shellscripting.webp", url:"https://ieee-tems-blogs.medium.com/shell-scripting-to-schedule-your-day-with-crontab-and-notify-send-b320f0a8f57a"},
  {src: "/Blogposts/snapinsta.webp", url:"https://ieee-tems-blogs.medium.com/the-linux-weatherman-crafting-accurate-reports-from-scratch-8887a0b32a77"},
  {src:"/Blogposts/tailwind.webp", url:"https://ieee-tems-blogs.medium.com/tailwind-more-than-just-inline-css-bd1a6a01a54c"}
];

const RollingGallery = ({ autoplay = false, pauseOnHover = false, images = [] }) => {
  images = IMGS;
  const [isScreenSizeSm, setIsScreenSizeSm] = useState(window.innerWidth <= 640);

  // increase cylinder width so images are larger and spaced further from the center
  // On small screens use a much smaller cylinder to avoid overflow/scroll issues
  const cylinderWidth = isScreenSizeSm ? 1000 : 2600;
  const faceCount = images.length;
  const faceWidth = (cylinderWidth / faceCount) * 1; // Increased width for items
  const dragFactor = 0.05;
  const radius = cylinderWidth / (2 * Math.PI);

  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const autoplayRef = useRef();
  const isMounted = useRef(false);

  const handleImageClick = (url) => {
    window.open(url, '_blank');
  }

  const handleDrag = (_, info) => {
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    if (isMounted.current) {
      controls.start({
        rotateY: rotation.get() + info.velocity.x * dragFactor,
        transition: { type: "spring", stiffness: 60, damping: 20, mass: 0.1, ease: "easeOut" },
      });
    }
  };

  const transform = useTransform(rotation, (value) => {
    return `rotate3d(0, 1, 0, ${value}deg)`;
  });

  // Autoplay effect with adjusted timing
  useEffect(() => {
    isMounted.current = true;

    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        if (isMounted.current) {
          controls.start({
            rotateY: rotation.get() - (360 / faceCount),
            transition: { duration: 2, ease: "linear" },
          });
        }
        rotation.set(rotation.get() - (360 / faceCount));
      }, 2000);
    }

    return () => {
      isMounted.current = false;
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [autoplay, rotation, controls, faceCount]);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSizeSm(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Pause on hover with smooth transition
  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      clearInterval(autoplayRef.current);
      if (isMounted.current) controls.stop(); // Stop the animation smoothly
    }
  };

  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      if (isMounted.current) {
        controls.start({
          rotateY: rotation.get() - (360 / faceCount),
          transition: { duration: 2, ease: "linear" },
        });
      }
      rotation.set(rotation.get() - (360 / faceCount));

      autoplayRef.current = setInterval(() => {
        if (isMounted.current) {
          controls.start({
            rotateY: rotation.get() - (360 / faceCount),
            transition: { duration: 2, ease: "linear" },
          });
        }
        rotation.set(rotation.get() - (360 / faceCount));
      }, 2000);
    }
  };

  return (
    <section id="Blog" className="gallery-container">
      <h2 style={{paddingTop:"0px"}}>
        <span>
          <strong>Our Blogs</strong>
        </span>
      </h2>
      <div className="gallery-gradient gallery-gradient-left"></div>
      <div className="gallery-gradient gallery-gradient-right"></div>
      <div className="gallery-content">
        <motion.div
          drag="x"
          dragPropagation = {false}
          className="gallery-track"
          onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
            marginTop: "0px",
          }}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          animate={controls}
        >
          {images.map((item, i) => (
            <div
              key={i}
              className="gallery-item"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
              }}
              onClick={(e)=>{
                e.stopPropagation();
                e.preventDefault();
                handleImageClick(item.url);
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
              }}
            >
              <img src={item.src}  
              style={{cursor:"pointer"}} alt="gallery" className="gallery-img" />
              
            </div>
          ))}
        </motion.div>
      </div>
      <div className="mb-5 text-center rolling-view-more-wrapper">
        <a
          style={{ textDecoration: "none" }}
          target="_blank" rel="noopener noreferrer"
          href="https://ieee-tems-blogs.medium.com/"
        >
          <button className="blogs-button">View More</button>
        </a>
      </div>
    </section>
  );
};

export default RollingGallery;
