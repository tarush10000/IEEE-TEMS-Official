import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section
      id="Contact"
      style={{
        backgroundColor: "rgb(22, 22, 22)",
        paddingBottom: "100px",
        paddingTop: "100px", // Added for scroll offset
        scrollMarginTop: "80px", // Ensures correct scroll position
      }}
    >
      <br />
      <br />
      <h2
        style={{
          textAlign: "center",
          paddingBottom: "30px",
          color: "white",
        }}
      >
        <span
          style={{
            backgroundImage:
              "linear-gradient(to right, transparent 10%, green 10%, green 90%, transparent 90%)",
            backgroundSize: "100% 5px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0 100%",
          }}
        >
          <strong style={{ fontSize: "1.3em" }}>Contact Us</strong>
        </span>
      </h2>
      <div
        className="Contact-box container-fluid border border-success rounded-5 text-white"
        style={{
          boxShadow: "0 0 0 0 rgba(19, 135, 19, 0.8)",
        }}
      >
        <div className="Contact-box-left">
          <img
            src="/ContactUsLogo.webp"
            className="Contact-box-image"
            alt="Contact Us"
          />
        </div>
        <div className="Contact-box-right">
          <form
            className="Contact-form"
            name="contactForm"
            action="https://formspree.io/f/mdoqekan"
            method="POST"
          >
            <div className="contact-input">
              <label style={{ fontSize: "20px", fontWeight: "700" }}>
                Name:
              </label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                required
                className="contact-inputs"
                autoComplete="name"
              />
            </div>
            <div className="contact-input">
              <label style={{ fontSize: "20px", fontWeight: "700" }}>
                Email:
              </label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                required
                className="contact-inputs"
                autoComplete="email"
                autoCapitalize="none"
                style={{ textTransform: "lowercase" }}
              />
            </div>
            <div className="contact-input">
              <label style={{ fontSize: "20px", fontWeight: "700" }}>
                Mobile No:
              </label>
              <br />
              <input
                type="tel"
                name="mobile"
                required
                className="contact-inputs"
                autoComplete="tel"
                pattern="\d{10}"
                maxLength="10"
                minLength="10"
                title="Please enter a valid 10-digit phone number."
              />
            </div>
            <div className="contact-input">
              <label style={{ fontSize: "20px", fontWeight: "700" }}>
                Message:
              </label>
              <br />
              <input
                type="text"
                id="message"
                name="message"
                required
                className="contact-inputs"
                autoComplete="off"
              />
            </div>
            <div className="contact-input">
              <input className="contact-input-button" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

