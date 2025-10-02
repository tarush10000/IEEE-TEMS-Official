import React, { useState } from "react";
import "./Domains.css";

const Domains = () => {
  const [activeDomain, setActiveDomain] = useState("webdev");

  const domainContent = {
    webdev: {
      title: "Web and App Development",
      content:
        "IEEE TEMS specializes in Web and App Development. We are dedicated to fostering creativity and honing technical skills within our community. Our initiatives include hosting coding competitions that challenge members to push their programming limits, organizing web and mobile app design workshops that provide hands-on experience in crafting stunning digital interfaces, and conducting intensive coding bootcamps to empower our members with the ability to create responsive websites and dynamic applications. Through these endeavors, we enable our members to explore and master the latest web and app technologies, ensuring they stay at the forefront of the ever-evolving digital landscape.",
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
  <section id="Domains" style={{ backgroundColor: "rgb(22, 22, 22)" }}>
      <h2 className="domain-heading-better">
        <span>Domains</span>
      </h2>
      <div className="container-fluid border border-success rounded-5 text-white domain-main domain-ui-better">
        <div className="domain-content-card-better">
          <h3 className="domain-title-better">{domainContent[activeDomain].title}</h3>
          <p className="domain-desc-better">{domainContent[activeDomain].content}</p>
        </div>
        <div className="domain-slider-better">
          {Object.keys(domainContent).map((key) => (
            <button
              key={key}
              className={`domain-icon-btn-better${activeDomain === key ? " active" : ""}`}
              onClick={() => setActiveDomain(key)}
              aria-label={domainContent[key].title}
            >
              <span
                className={`fa-solid ${
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
                } domain-icon-better`}
              ></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domains;
