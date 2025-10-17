import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useMemo } from "react";

import {
  faInstagram,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import About from "../components/About";
// import Blog from "../components/Blog"; // blog component disabled
import Board from "../components/Board";
import ContactSection from "../components/ContactSection";
import Domains from "../components/Domains";
import Events from "../components/Events";
import Faculty from "../components/Faculty";
import Footer from "../components/Footer";
import Memories from "../components/Memories";
import "../CSS/MainPage.css";

import NewBlog from "../components/NewBlog";
import Silk from "../Silk/Silk";
import PixelBlast from "../PixelBlast/PixelBlast";

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [changingText, setChangingText] = useState("");
  const words = useMemo(() => ["INNOVATIVE", "CONNECTED", "EMPOWERING"], []);
  const typingSpeed = 150;
  const wordPause = 1000;

  useEffect(() => {
    let wordIndex = 0;
    let letterIndex = 0;
    let isTyping = true;

    const typeLetters = () => {
      if (isTyping) {
        setChangingText((prev) =>
          words[wordIndex].substring(0, letterIndex + 1)
        );
        letterIndex++;

        if (letterIndex === words[wordIndex].length) {
          isTyping = false;
          setTimeout(() => typeLetters(), wordPause);
        } else {
          setTimeout(typeLetters, typingSpeed);
        }
      } else {
        letterIndex = 0;
        wordIndex = (wordIndex + 1) % words.length;
        isTyping = true;
        typeLetters();
      }
    };

    typeLetters();
    return () => { };
  }, [words]);

  // Suppress ResizeObserver errors
  useEffect(() => {
    const resizeObserverErrorHandler = (e) => {
      if (e.message === 'ResizeObserver loop completed with undelivered notifications.' ||
          e.message === 'ResizeObserver loop limit exceeded') {
        e.stopImmediatePropagation();
        return false;
      }
    };
    
    const errorHandler = (event) => {
      if (event.message && event.message.includes('ResizeObserver')) {
        event.stopImmediatePropagation();
        event.preventDefault();
        return false;
      }
    };
    
    window.addEventListener('error', resizeObserverErrorHandler);
    window.addEventListener('error', errorHandler, true);
    
    // Also suppress unhandled rejection errors related to ResizeObserver
    const unhandledRejectionHandler = (event) => {
      if (event.reason && event.reason.message && event.reason.message.includes('ResizeObserver')) {
        event.preventDefault();
        return false;
      }
    };
    window.addEventListener('unhandledrejection', unhandledRejectionHandler);
    
    return () => {
      window.removeEventListener('error', resizeObserverErrorHandler);
      window.removeEventListener('error', errorHandler, true);
      window.removeEventListener('unhandledrejection', unhandledRejectionHandler);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <section id="Home" style={{ 
        background: "black", 
        height: "100vh",
        position: "relative",
        zIndex: 1 
      }}>
        <div id="homebg">
          <Silk
            speed={12.5}
            scale={1.2}
            color="#008020"
            noiseIntensity={1.5}
            rotation={0.14}
            style={{ zIndex: 0 }}
          />
        </div>
        <div id="homecontent">
          <a href="/" style={{ textDecoration: "none" }}>
            <div id="htitle">IEEE TEMS</div>
          </a>
          <p id="hchanging">{changingText}</p>

          <div id="hlogo">
            <a
              href="https://vit.ac.in/"
              target="_blank" rel="noopener noreferrer"
            >
              <img
                src="/VIT Logo.webp"
                alt="VIT Logo"

              />
            </a>
          </div>
          <div id="htext">
            <a
              href="https://vit.ac.in/campuslife/studentswelfare"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noopener noreferrer"
            >
              <p className="text-center">Office of Students' Welfare</p>
            </a>
          </div>
          <div id="hicons">
            <a
              href="https://ieee-tems-blogs.medium.com/"
              target="_blank" rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faMedium} className="hicon" />
            </a>
            <a
              href="https://www.instagram.com/ieeetemsvit/"
              target="_blank" rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="hicon" />
            </a>
            <a
              href="https://www.linkedin.com/company/ieee-tems/about/"
              target="_blank" rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="hicon" />
            </a>
          </div>
        </div>

        <div
          className="hmenu"
          id="menuIcon"
          onClick={toggleMenu}
          style={{
            fontSize: "25px",
            cursor: "pointer",
            marginTop: "0px",
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>

        {menuOpen && (
          <>
            {/* Backdrop overlay - clicking it closes the menu */}
            <div
              onClick={closeMenu}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 999,
                transition: "opacity 0.3s ease-in-out",
              }}
            />
            <div
              className="side-menu"
              id="sideMenu"
              style={{
                position: "fixed",
                top: "0",
                right: menuOpen ? "0" : "-100%",
                width: "320px",
                height: "100%",
                background: "rgba(20, 20, 20, 0.95)",
                backdropFilter: "blur(15px)",
                borderLeft: "1px solid rgba(0, 255, 68, 0.2)",
                boxShadow: "-5px 0 30px rgba(0, 0, 0, 0.5)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                zIndex: "1000",
                transition: "right 0.3s ease-in-out",
                paddingTop: "50px",
                overflowY: "auto",
              }}
            >
            <nav className="sidebar" style={{ width: "100%" }}>
              <a
                href="#Home"
                className="menu-elt"
                style={menuItemStyle}
                onClick={closeMenu}
              >
                Home
              </a>
              <a
                href="#About"
                className="menu-elt"
                style={menuItemStyle}
                onClick={closeMenu}
              >
                About Us
              </a>
              <a
                href="#Domains"
                className="menu-elt"
                style={menuItemStyle}
                onClick={closeMenu}
              >
                Domains
              </a>
              <a
                href="#Events"
                className="menu-elt"
                style={menuItemStyle}
                onClick={closeMenu}
              >
                Events
              </a>
              <a
                href="#Blog"
                className="menu-elt"
                style={menuItemStyle}
                onClick={closeMenu}
              >
                Our Blogs
              </a>
              <a
                href="#Board"
                className="menu-elt"
                style={menuItemStyle}
                onClick={closeMenu}
              >
                Board
              </a>
              <a
                href="#Memories"
                className="menu-elt"
                style={menuItemStyle}
                onClick={closeMenu}
              >
                Memories
              </a>
              <a
                href="#ContactSection"
                className="menu-elt"
                style={menuItemStyle}
                onClick={closeMenu}
              >
                Contact Us
              </a>
            </nav>
          </div>
          </>
        )}
      </section>

      {/* Container with PixelBlast background for all sections after home */}
      <div style={{ position: 'relative', isolation: 'isolate' }}>
        {/* PixelBlast as fixed background */}
        <div style={{ 
          position: 'fixed',
          top: '0px',
          left: 0,
          width: '100vw', 
          height: '100vh', 
          zIndex: -10,
          pointerEvents: 'none',
          overflow: 'hidden',
          willChange: 'transform',
          background: 'black'
        }}>
          <PixelBlast
            variant="circle"
            pixelSize={6}
            color="#013f10"
            patternScale={3}
            patternDensity={1.4}
            pixelSizeJitter={0.5}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.6}
            edgeFade={0.25}
            transparent
          />
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <About />
          <Domains />
          <Events />
      {/* <Blog /> removed - Blog component disabled */}
          <NewBlog />
          <Board />
          <Faculty />
          <Memories />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </div>
  );
};

const menuItemStyle = {
  display: "block",
  padding: "18px 25px",
  textDecoration: "none",
  fontFamily: "'Noto Sans TC', sans-serif",
  fontSize: "20px",
  fontWeight: "600",
  textAlign: "left",
  transition: "all 0.3s ease",
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: "8px",
  margin: "5px 10px",
  color: "#e0e0e0",
};

export default HomePage;