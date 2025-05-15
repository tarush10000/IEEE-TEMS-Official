import { useEffect } from "react";
import "./Blog.css";

const Blog = () => {
  useEffect(() => {
    const options = document.querySelectorAll(".option");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");

    const responsiveCard = Array.from(options).find((option) =>
      option.style
        .getPropertyValue("--optionBackground")
        .includes("responsive.webp")
    );
    if (responsiveCard) {
      responsiveCard.classList.add("active");
    }

    options.forEach((option) => {
      option.addEventListener("click", () => {
        options.forEach((opt) => opt.classList.remove("active"));
        option.classList.add("active");
      });
    });

    prevButton.addEventListener("click", () => {
      const activeCard = document.querySelector(".option.active");
      let prevCard = activeCard?.previousElementSibling;

      if (!prevCard || !prevCard.classList.contains("option")) {
        prevCard = document.querySelector(".option:last-child");
      }

      activeCard?.classList.remove("active");
      prevCard?.classList.add("active");
    });

    nextButton.addEventListener("click", () => {
      const activeCard = document.querySelector(".option.active");
      let nextCard = activeCard?.nextElementSibling;

      if (!nextCard || !nextCard.classList.contains("option")) {
        nextCard = document.querySelector(".option:first-child");
      }

      activeCard?.classList.remove("active");
      nextCard?.classList.add("active");
    });

    return () => {
      options.forEach((option) => {
        option.replaceWith(option.cloneNode(true));
      });
      prevButton?.replaceWith(prevButton.cloneNode(true));
      nextButton?.replaceWith(nextButton.cloneNode(true));
    };
  }, []);

  return (
    <section id="blog-section" >
      <h2>
        <span
          style={{
            backgroundImage:
              "linear-gradient(to right, transparent 10%, green 10%, green 90%, transparent 90%)",
            backgroundSize: "100% 5px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0 100%",
          }}
        >
          <strong id="Blogs-start" style={{ fontSize: "1.3em" }}>
            Our Blogs
          </strong>
        </span>
      </h2>
      <section id="Blogs" className="blog-section blog-section-desktop">
        <button id="prevButton" className="arrow-button mx-4">
          <i className="fas fa-arrow-left"></i>
        </button>

        <div className="options">
          <div
            className="option"
            style={{
              "--optionBackground":
                "url(/Blogposts/Snapinsta.app_391089358_187357391062010_7940396338877248259_n_1080.webp)",
            }}
          >
            <div className="label">
              <div className="icon">
                <i className="fa fa-globe" aria-hidden="true"></i>
              </div>
              <div className="info">
                <div className="sub">
                  <a
                    target="_blank" rel="noopener noreferrer"
                    href="https://ieee-tems-blogs.medium.com/the-linux-weatherman-crafting-accurate-reports-from-scratch-8887a0b32a77"
                    style={{
                      textDecoration: "none",
                      display: "inline-block",
                      backgroundColor: "white",
                      color: "rgb(34, 119, 34)",
                      padding: "5px 15px",
                      borderRadius: "15px",
                    }}
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="option"
            style={{
              "--optionBackground": "url(/Blogposts/Shellscripting.webp)",
            }}
          >
            <div className="label">
              <div className="icon">
                <i className="fa fa-globe" aria-hidden="true"></i>
              </div>
              <div className="info">
                <div className="sub">
                  <a
                    target="_blank" rel="noopener noreferrer"
                    href="https://ieee-tems-blogs.medium.com/shell-scripting-to-schedule-your-day-with-crontab-and-notify-send-b320f0a8f57a"
                    style={{
                      textDecoration: "none",
                      display: "inline-block",
                      backgroundColor: "white",
                      color: "rgb(34, 119, 34)",
                      padding: "5px 15px",
                      borderRadius: "15px",
                    }}
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="option"
            style={{
              "--optionBackground": "url(/Blogposts/shellscript.webp)",
            }}
          >
            <div className="label">
              <div className="icon">
                <i className="fa fa-globe" aria-hidden="true"></i>
              </div>
              <div className="info">
                <div className="sub">
                  <a
                    target="_blank" rel="noopener noreferrer"
                    href="https://ieee-tems-blogs.medium.com/effortless-email-sending-on-linux-a-step-by-step-project-guide-fb557b6bda8"
                    style={{
                      textDecoration: "none",
                      display: "inline-block",
                      backgroundColor: "white",
                      color: "rgb(34, 119, 34)",
                      padding: "5px 15px",
                      borderRadius: "15px",
                    }}
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="option"
            style={{
              "--optionBackground": "url(/Blogposts/responsive.webp)",
            }}
          >
            <div className="label">
              <div className="icon">
                <i className="fa fa-globe" aria-hidden="true"></i>
              </div>
              <div className="info">
                <div className="sub">
                  <a
                    target="_blank" rel="noopener noreferrer"
                    href="https://ieee-tems-blogs.medium.com/responsive-web-design-creating-websites-for-all-devices-96aad294def1"
                    style={{
                      textDecoration: "none",
                      display: "inline-block",
                      backgroundColor: "white",
                      color: "rgb(34, 119, 34)",
                      padding: "5px 15px",
                      borderRadius: "15px",
                    }}
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="option"
            style={{
              "--optionBackground": "url(/Blogposts/numpy.webp)",
            }}
          >
            <div className="label">
              <div className="icon">
                <i className="fa fa-globe" aria-hidden="true"></i>
              </div>
              <div className="info">
                <div className="sub">
                  <a
                    target="_blank" rel="noopener noreferrer"
                    href="https://ieee-tems-blogs.medium.com/mastering-the-basics-of-numpy-a-step-by-step-guide-for-beginners-800bbd2337a6"
                    style={{
                      textDecoration: "none",
                      display: "inline-block",
                      backgroundColor: "white",
                      color: "rgb(34, 119, 34)",
                      padding: "5px 15px",
                      borderRadius: "15px",
                    }}
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="option"
            style={{
              "--optionBackground": "url(/Blogposts/tailwind.webp)",
            }}
          >
            <div className="label">
              <div className="icon">
                <i className="fa fa-globe" aria-hidden="true"></i>
              </div>
              <div className="info">
                <div className="sub">
                  <a
                    target="_blank" rel="noopener noreferrer"
                    href="https://ieee-tems-blogs.medium.com/tailwind-more-than-just-inline-css-bd1a6a01a54c"
                    style={{
                      textDecoration: "none",
                      display: "inline-block",
                      backgroundColor: "white",
                      color: "rgb(34, 119, 34)",
                      padding: "5px 15px",
                      borderRadius: "15px",
                    }}
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="option"
            style={{
              "--optionBackground": "url(/Blogposts/bootstrap.webp)",
            }}
          >
            <div className="label">
              <div className="icon">
                <i
                  className="fa fa-globe"
                  style={{ color: "black" }}
                  aria-hidden="true"
                ></i>
              </div>
              <div className="info">
                <div className="sub">
                  <a
                    target="_blank" rel="noopener noreferrer"
                    href="https://ieee-tems-blogs.medium.com/introduction-guide-to-bootstrap-c2149dcd80cf"
                    style={{
                      textDecoration: "none",
                      display: "inline-block",
                      backgroundColor: "white",
                      color: "rgb(34, 119, 34)",
                      padding: "5px 15px",
                      borderRadius: "15px",
                    }}
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button id="nextButton" className="arrow-button mx-4">
          <i className="fas fa-arrow-right"></i>
        </button>
      </section>

      <div
        id="carouselExampleIndicators2"
        className="carousel slide mobile-blogs"
      >
        <div className="carousel-inner" style={{ textAlign: "center" }}>
          <div className="carousel-item active">
            <a href="https://ieee-tems-blogs.medium.com/the-linux-weatherman-crafting-accurate-reports-from-scratch-8887a0b32a77"> </a>
            <img
              className="mimg"
              src="Blogposts/Snapinsta.app_391089358_187357391062010_7940396338877248259_n_1080.webp"
              alt="linux blog IEEE TEMS VIT"
            />
          </div>
          <div className="carousel-item ">
            <a href="https://ieee-tems-blogs.medium.com/shell-scripting-to-schedule-your-day-with-crontab-and-notify-send-b320f0a8f57a"> </a>
            <img
              className="mimg"
              src="Blogposts/Shellscripting.webp"
              alt="linux blog IEEE TEMS VIT"
            />
          </div>
          <div className="carousel-item ">
            <a href="https://ieee-tems-blogs.medium.com/effortless-email-sending-on-linux-a-step-by-step-project-guide-fb557b6bda8"> </a>
            <img
              className="mimg"
              src="Blogposts/shellscript.webp"
              alt="linux blog IEEE TEMS VIT"
            />
          </div>
          <div className="carousel-item">
            <a href="https://ieee-tems-blogs.medium.com/responsive-web-design-creating-websites-for-all-devices-96aad294def1"> </a>
            <img
              className="mimg"
              src="Blogposts/responsive.webp"
              alt="linux blog IEEE TEMS VIT"
            />
          </div>
          <div className="carousel-item ">
            <a href="https://ieee-tems-blogs.medium.com/mastering-the-basics-of-numpy-a-step-by-step-guide-for-beginners-800bbd2337a6"> </a>
            <img
              className="mimg"
              src="Blogposts/numpy.webp"
              alt="linux blog IEEE TEMS VIT"
            />
          </div>
          <div className="carousel-item">
            <a href="https://ieee-tems-blogs.medium.com/tailwind-more-than-just-inline-css-bd1a6a01a54c"> </a>
            <img
              className="mimg"
              src="Blogposts/tailwind.webp"
              alt="linux blog IEEE TEMS VIT"
            />
          </div>
          <div className="carousel-item">
            <a href="https://ieee-tems-blogs.medium.com/introduction-guide-to-bootstrap-c2149dcd80cf"> </a>
            <img
              className="mimg"
              src="Blogposts/bootstrap.webp"
              alt="linux blog IEEE TEMS VIT"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators2"
          data-bs-slide="prev"
        >
          <img src="arrow2.svg" className="svg" alt="arrow" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators2"
          data-bs-slide="next"
        >
          <img src="arrow.svg" className="svg" alt="arrow" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div style={{ marginTop: "25px" }} className="mb-5 text-center">
        <a
          style={{ textDecoration: "none" }}
          target="_blank" rel="noopener noreferrer"
          href="https://ieee-tems-blogs.medium.com/"
        >
          <button className="blogs-button">View More</button>
        </a>
      </div>
    </section>
  );
};

export default Blog;
