import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section id="ContactSection"
      style={{
        backgroundColor: "rgb(22, 22, 22)",
        paddingBottom: "100px",
        paddingTop: "40px", // Added for scroll offset
        scrollMarginTop: "80px", // Ensures correct scroll position
      }}
    >
      <h2 style={{ paddingTop: "0px", marginBottom: "40px" }}>
        <span>
          <strong>Contact Us</strong>
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
            <div className="contact-row">
              <div className="contact-input contact-input-half">
                <label style={{ fontSize: "16px", fontWeight: "600" }}>
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="contact-inputs"
                  autoComplete="name"
                />
              </div>
              <div className="contact-input contact-input-half">
                <label style={{ fontSize: "16px", fontWeight: "600" }}>
                  Mobile No:
                </label>
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
            </div>

            <div className="contact-input">
              <label style={{ fontSize: "16px", fontWeight: "600" }}>
                Email:
              </label>
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
              <label style={{ fontSize: "16px", fontWeight: "600" }}>
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="contact-inputs contact-textarea"
                autoComplete="off"
                rows="4"
              />
            </div>

            <div className="contact-input">
              <input className="contact-input-button" type="submit" value="SUBMIT" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

