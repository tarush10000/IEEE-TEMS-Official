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
              src="about_us.jpg"
              className="imgg"
              style={{ borderRadius: "5px" }}
              alt="IEEE TEMS"
            />
          </div>
          <div className="flex-element-2 flex-element">
            <p className="about-content" style={{ marginTop: "0px" , textAlign:'justify'}}>
              <br />
              At IEEE TEMS VIT, our mission is to spark curiosity and inspire change. 
              We cultivate an ecosystem where creativity thrives, ideas transform into impactful projects, and innovation is truly valued. 
              Through engaging workshops, insightful seminars, and active involvement in technology-driven competitions, we 
              empower our members with hands-on experience and keep them ahead in the ever-evolving world of technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
