import React from 'react';
import { motion } from 'framer-motion';
import TiltedCard from './TiltedCard';
import './Faculty.css';
import './TiltedCard.css';

const Faculty = () => {
  // Updated the data to include the post/designation
  const facultyMember = {
    name: "Dr. VENUGOPAL P",
    post: "Associate Dean, VIT Business School",
    image: "Coordinator/Venugopal.webp", // Ensure this path is correct
    alt: "Dr. Venugopal P, Associate Dean"
  };

  return (
    <section id="Faculty">
      <br /><br />
      <h2 style={{ paddingTop: "0px" }}>
        <span>
          <strong>Faculty Coordinator</strong>
        </span>
      </h2>
      <div className="faculty-container">
        <motion.div
          className="faculty-member-layout" // Using a new class for the side-by-side layout
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Image on the left */}
          <div className="faculty-image-container">
            <TiltedCard
              imageSrc={facultyMember.image}
              altText={facultyMember.alt}
              containerHeight="300px"
              containerWidth="280px"
              imageHeight="300px"
              imageWidth="280px"
              rotateAmplitude={8}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={false}
            />
          </div>

          {/* Details on the right */}
          <div className="faculty-details-container">
            <p className="faculty-name">{facultyMember.name}</p>
            <p className="faculty-post">{facultyMember.post}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Faculty;