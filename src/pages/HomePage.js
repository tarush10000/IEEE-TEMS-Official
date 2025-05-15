import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import VideoBackground from "../components/VideoBackground";
import "../CSS/homepage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [buttonStyle, setButtonStyle] = useState({});
  const [logoStyle, setLogoStyle] = useState({});
  const [headerLogoStyle, setHeaderLogoStyle] = useState({});
  const [textStyle, setTextStyle] = useState({});

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setButtonStyle({
          width: "40vw",
          height: "7vh",
          fontSize: "0.8em",
        });
        setLogoStyle({
          position: "absolute",
          top: "30vh",
          left: "50%",
          transform: "translateX(-50%)",
          maxWidth: "60vw",
          animation: "logoAnimation 2s ease-in-out",
        });
      } else {
        setButtonStyle({
          width: "14vw",
          height: "6vh",
          fontSize: "1em",
        });
        setLogoStyle({
          position: "absolute",
          top: "26vh",
          left: "35vw",
          maxWidth: "30vw",
          animation: "logoAnimation 2s ease-in-out",
        });
      }

      if (window.innerWidth < 768) {
        setHeaderLogoStyle({
          height: "5vh",
        });
        setTextStyle({
          fontSize: "1em",
        });
      } else {
        setHeaderLogoStyle({
          height: "7vh",
        });
        setTextStyle({
          fontSize: "1.2em",
        });
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleExploreClick = () => {
    navigate("/main");
  };

  return (
    <div>
      <VideoBackground />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ position: "absolute", top: 8, left: 0 }}>
          <a
            href="https://vit.ac.in/"
            target="_blank" rel="noopener noreferrer"
          >
            <img
              src="/VIT Logo.webp"
              alt="VIT Logo"
              style={{ ...headerLogoStyle, width: "auto" }}
            />
          </a>
        </div>
        <div style={{ position: "absolute", top: 15, right: 2 }}>
          <a
            href="https://vit.ac.in/campuslife/studentswelfare"
            target="_blank" rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 120,
              color: "white",
              ...textStyle,
            }}
          >
            Office of Students' Welfare
          </a>
        </div>
      </div>

      <img src="/logo3.webp" alt="Logo" style={logoStyle} />
      <button
        className="glow-on-hover"
        style={{
          ...buttonStyle,
          border: "none",
          color: "#fff",
          background: "#2f2f2f",
          position: "absolute",
          bottom: "18vh",
          left: "50%",
          transform: "translateX(-50%)",
          borderRadius: "40px",
          fontWeight: "bold",
          animation: "borderGlow 1.5s infinite ease-in-out",
          boxShadow: "0px 0px 15px 2px rgba(255, 255, 255, 0.6)",
        }}
        onClick={handleExploreClick}
      >
        EXPLORE NOW
      </button>
    </div>
  );
};

export default HomePage;
