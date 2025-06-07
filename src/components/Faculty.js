import React from 'react';
import { motion } from 'framer-motion';
import TiltedCard from './TiltedCard';
import './Faculty.css';
import './TiltedCard.css';

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. Venugopal P",
      image: "Coordinator/Venugopal.webp",
      alt: "Dr. Venugopal, IEEE TEMS Vellore"
    },
    {
      name: "Dr. Subashini R",
      image: "Coordinator/Subashini.webp",
      alt: "Mrs. Subashini, IEEE TEMS Vellore"
    }
  ];

  return (
    <section id="Faculty">
      <br /><br />
      <h2 style={{ textAlign: 'center', color: 'white' }}>
        <span
          style={{
            backgroundImage: 'linear-gradient(to right, transparent 10%, green 10%, green 90%, transparent 90%)',
            backgroundSize: '100% 5px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '0 100%',
          }}
        >
          <strong style={{ fontSize: '1.3em' }}>Faculty Coordinators</strong>
        </span>
      </h2>
      <div className="faculty-container">
        {facultyMembers.map((member, index) => (
          <motion.div 
            key={index}
            className="faculty-card-wrapper"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <TiltedCard
              imageSrc={member.image}
              altText={member.alt}
              containerHeight="300px"
              containerWidth="280px"
              imageHeight="300px"
              imageWidth="280px"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={false}
            />
            <p className="faculty-name-below">{member.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Faculty;