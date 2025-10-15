import { useNavigate } from "react-router-dom";
import "../CSS/homepage.css";
import LetterGlitch from '../Letter Glitch/LetterGlitch';

const HomePage = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/main");
  };

  return (
    <div className="homepage">
      <div className="content-container">
        <img src="/logo3.webp" alt="Logo" className="logo" />
        <LetterGlitch
          glitchSpeed={25}
          centerVignette={true}
          outerVignette={true}
          smooth={true}
        />
        <button 
          className="explore-button"
          onClick={handleExploreClick}
        >
          Explore Now
        </button>
        <div className="header-container">
          <div className="header-content">
            <a
              href="https://vit.ac.in/"
              target="_blank" 
              rel="noopener noreferrer"
              className="vit-logo-link"
            >
              <img
                src="/VIT Logo.webp"
                alt="VIT Logo"
                className="vit-logo"
              />
            </a>
          </div>
        </div>
        <div className="studentwelfare-container">
          <div className="studentwelfare-content">
            <a
              href="https://vit.ac.in/campuslife/studentswelfare"
              target="_blank" 
              rel="noopener noreferrer"
              className="osw-link"
            >
              Office of Students' Welfare
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
