import React from 'react';
import { useNavigate } from 'react-router-dom';
import Developers from '../components/Developers';

const DevelopersPage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ background: '#181818', minHeight: '100vh', position: 'relative' }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          background: 'none',
          border: 'none',
          color: 'white',
          fontSize: '2rem',
          cursor: 'pointer',
          zIndex: 10
        }}
        aria-label="Go Back"
      >
        &#8592;
      </button>
      <Developers />
    </div>
  );
};

export default DevelopersPage;
