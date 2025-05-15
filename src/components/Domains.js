import React, { useState } from "react";
import "./Domains.css";

const Domains = () => {
  const [activeDomain, setActiveDomain] = useState("webdev");

  const domainContent = {
    webdev: {
      title: "Web Development",
      content:
        "IEEE TEMS specializes in Web Development. We are dedicated to fostering creativity and honing technical skills within our community. Our initiatives include hosting coding competitions that challenge members to push their programming limits, organizing web design workshops that provide hands-on experience in crafting stunning digital interfaces, and conducting intensive coding bootcamps to empower our members with the ability to create responsive websites and dynamic web applications. Through these endeavors, we enable our members to explore and master the latest web technologies, ensuring that they stay at the forefront of the ever-evolving digital landscape.",
    },
    ml: {
      title: "Machine Learning",
      content:
        "In the realm of Machine Learning, IEEE TEMS is the go-to hub for enthusiasts seeking to dive into the world of cutting-edge algorithms, advanced data analysis techniques, and practical AI applications. Our vibrant community of members actively engages in workshops, hackathons, and seminars to stay consistently updated with the latest advancements in Machine Learning.Through our interactive events, we aim to foster a culture of innovation and collaboration in this ever-evolving field. Our seminars feature industry experts and thought leaders, providing invaluable insights into the exciting developments in Machine Learning.",
    },
    iot: {
      title: "Competitive Programming",
      content:
        "We empower members to master problem-solving and algorithmic challenges through a variety of engaging initiatives, including contests, workshops, and personalized mentorship programs. By providing a supportive ecosystem, we enable individuals to sharpen their analytical thinking, coding skills, and innovative approaches to complex problems. Our flagship events, CodeRush and CodeClash, serve as benchmarks of excellence in competitive programming. CodeClash, in particular, has gained national recognition, attracting over 1,000 participants from across the country. These platforms foster excellence, collaboration, and competition at the highest level..",
    },
    devops: {
      title: "DevOps",
      content:
        "IEEE TEMS serves as a dynamic platform that actively bridges the gap between development and operations, emphasizing the principles of automation, collaboration, and continuous improvement. Our comprehensive approach encompasses a wide range of activities, including the hosting of engaging DevOps workshops, hackathons, and insightful discussions on industry best practices.Within our vibrant community, members embark on a journey of discovery and skill enhancement, learning to streamline software development and deployment processes. This not only promotes efficiency and reliability but also fosters a culture of innovation in the rapidly evolving tech landscape.",
    },
    design: {
      title: "Design",
      content:
        "In the dynamic realm of design, IEEE TEMS is a passionate advocate for the harmonious fusion of technology and aesthetics. We take pride in offering a diverse array of opportunities that empower our members to explore, innovate, and excel in the design domain.At the heart of our design-focused initiatives are UI/UX design challenges that challenge our members to craft engaging and user-friendly digital interfaces. Our graphic design workshops provide hands-on experiences that enhance their artistic and creative skills, enabling them to create visually stunning and effective design solutions.",
    },
    editorial: {
      title: "Blogging & Vlogging",
      content:
        "IEEE TEMS extends its reach into the realm of effective communication within the technical domain by providing a dedicated platform for blogging and vlogging. Our mission is to empower individuals to articulate their expertise and insights in a compelling and accessible manner. Through this specialized domain, we offer comprehensive training in content creation, video editing, and the nuances of effective social media marketing. Our aim is to equip members with the skills and tools they need to convey complex technical knowledge in a clear and engaging manner, bridging the gap between experts and enthusiasts.",
    },
  };

  return (
    <section
      id="Domains"
      style={{
        backgroundColor: "rgb(22, 22, 22)",
        paddingBottom: "50px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          paddingBottom: "30px",
          paddingTop: "40px",
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
          <strong style={{ fontSize: "1.3em" }}>Domains</strong>
        </span>
      </h2>
      <div
        className="container-fluid border border-success rounded-5 text-white"
        style={{ boxShadow: "0 0 0 0 rgba(19, 135, 19, 0.8)" }}
      >
        <div className="row flex-nowrap">
          <div
            className="col-auto col-md-auto col-xl-auto px-sm-6 px-0 rounded-5 py-5"
            style={{ backgroundColor: "rgb(34, 119, 34)" }}
          >
            <div className="d-flex flex-column align-items-center align-items-sm-start pe-1 ps-1 pt-2 text-white min-vh-50">
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                {Object.keys(domainContent).map((key) => (
                  <li
                    className={`nav-item py-1 ${
                      activeDomain === key ? "active" : ""
                    }`}
                    key={key}
                  >
                    <button
                      className="nav-link align-middle px-0"
                      onClick={() => setActiveDomain(key)}
                      style={{
                        background: "none",
                        border: "none",
                        color: "inherit",
                        textAlign: "left",
                      }}
                    >
                      <span
                        className={`ps-2 fa-solid ${
                          key === "webdev"
                            ? "fa-laptop-code"
                            : key === "ml"
                            ? "fa-robot"
                            : key === "iot"
                            ? "fa-globe"
                            : key === "devops"
                            ? "fa-infinity"
                            : key === "design"
                            ? "fa-broom-ball"
                            : "fa-newspaper"
                        } text-dark icons`}
                      ></span>
                      <span className="fs-4 ps-3 txt">
                        {domainContent[key].title}&nbsp;
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col" id="contentArea">
            <h2
              style={{
                textAlign: "center",
                padding: "0px",
                paddingTop: "40px",
                marginBottom: "0px",
              }}
            >
              <span className="text-success">
                {domainContent[activeDomain].title.split(" ")[0][0]}
              </span>
              {domainContent[activeDomain].title.slice(1)}
            </h2>
            <br />
            <p className="domaintext text-left lh-lg word-spacing-4" style={{textAlign:"justify"}}>
              {domainContent[activeDomain].content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Domains;
