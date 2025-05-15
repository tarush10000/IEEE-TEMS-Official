import React from "react";
import "./About.css";
const About = () => {
  return (
    <section id="About">
      <div
        className="container-fluid border-success rounded-5 text-white about-main"
        style={{ borderRadius: "10px", marginBottom:"50px" }}
      >
        <h2 style={{paddingTop:"0px"}}>
          <span>
            <strong>About Us</strong>
          </span>
        </h2>
        <p className="about-sub">BRIDGING DIVERSE PRINCIPLES</p>
        <div className="flex-container">
          <div
            className="flex-element-1 flex-element"
            style={{ textAlign: "center" }}
          >
            <img
              src="imgabt.webp"
              className="imgg"
              style={{ borderRadius: "5px" }}
              alt="IEEE TEMS"
            />
          </div>
          <div className="flex-element-2 flex-element">
            <p className="about-content" style={{ marginTop: "0px" , textAlign:'justify'}}>
              We are a dynamic and forward-thinking community of students
              dedicated to advancing the frontiers of technology and engineering
              management. Our chapter serves as a vibrant hub for innovation,
              leadership development, and collaboration.
              <br />
              At IEEE TEMS VIT, our mission is to ignite curiosity and drive
              change. We thrive on fostering innovation by providing an
              environment where creative ideas flourish, projects come to life,
              and innovation is celebrated. Through immersive workshops,
              enlightening seminars, and active participation in tech-focused
              competitions, our members gain hands-on experience and stay at the
              forefront of technological advancements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
