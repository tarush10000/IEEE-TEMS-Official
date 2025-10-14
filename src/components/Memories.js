import React from "react";
import "./Memories.css";

// keep heading markup unchanged per user request
const images = [
  { src: "img1.webp", alt: "Riviera , IEEE TEMS Vellore", caption: "" },
  { src: "img2.webp", alt: "Ice-Breaking , IEEE TEMS Vellore", caption: "HackXpertise 2.0" },
  { src: "img3.webp", alt: "Innovision , IEEE TEMS Vellore", caption: "" },
  { src: "img4.webp", alt: "Code Rush , IEEE TEMS Vellore", caption: "Expo Gravitas 2025" },
  { src: "img5.webp", alt: "Riviera , IEEE TEMS Vellore", caption: "" },
  { src: "img6.webp", alt: "Gravitas, IEEE TEMS Vellore", caption: "" },
  { src: "img8.webp", alt: "Team 2022-23, IEEE TEMS Vellore", caption: "Gravitas 2025" },
  { src: "img9.webp", alt: "Team 2022-23, IEEE TEMS Vellore", caption: "Bouncing Castle" },
  { src: "img10.webp", alt: "Team 2022-23, IEEE TEMS Vellore", caption: "Gravitas 2025" },
  { src: "img11.webp", alt: "Team 2022-23, IEEE TEMS Vellore", caption: "Riviera 2025" }
];

const Memories = () => {
  return (
    <section id="Memories">
      <h2 style={{ paddingTop: "0px" }}>
        <span>
          <strong>Memories</strong>
        </span>
      </h2>

      <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-indicators">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={i}
              className={i === 0 ? "active" : ""}
              aria-current={i === 0 ? "true" : undefined}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="carousel-inner">
          {images.map((img, idx) => (
            <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
              <img className="mimg" src={process.env.PUBLIC_URL + "/" + img.src} alt={img.alt} />
              {img.caption && <div className="caption-pill">{img.caption}</div>}
            </div>
          ))}
        </div>

        <button className="carousel-control-prev custom-control" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" aria-label="Previous">
          <img src={process.env.PUBLIC_URL + "/arrow2.svg"} className="svg" alt="prev" />
        </button>
        <button className="carousel-control-next custom-control" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" aria-label="Next">
          <img src={process.env.PUBLIC_URL + "/arrow.svg"} className="svg" alt="next" />
        </button>
      </div>
    </section>
  );
};

export default Memories;
