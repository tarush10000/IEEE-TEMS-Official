import { useEffect, useState } from "react";
import "./Board.css";
import TiltedCard from "./TiltedCard";

const Board = () => {
  const [activeTab, setActiveTab] = useState("2025");
  const [activeYearBoard, setActiveYearBoard] = useState("Board2025");

  const handleTabClick = (year) => {
    setActiveTab(year);
    setActiveYearBoard(year === "2025" ? "Board2025" : "Board2024");
  };

  useEffect(() => {
    const tabs = document.querySelector(".tabs");
    const selector = document.querySelector(".selector");
    const activeItem = tabs.querySelector(".active");
    const activeWidth = activeItem ? activeItem.offsetWidth : 0;
    if (activeItem) {
      selector.style.left = `${activeItem.offsetLeft}px`;
      selector.style.width = `${activeWidth}px`;
    }

    const handleTabSelector = (event) => {
      const activeItem = event.target;
      if (activeItem.tagName === "A") {
        const activeWidth = activeItem.offsetWidth;
        selector.style.left = `${activeItem.offsetLeft}px`;
        selector.style.width = `${activeWidth}px`;
      }
    };

    tabs.addEventListener("click", handleTabSelector);

    return () => {
      tabs.removeEventListener("click", handleTabSelector);
    };
  }, []);

  // Board member data remains the same...

  const board2025 = [
    {
      name: "TARUSH AGARWAL",
      position: "CHAIRPERSON",
      image: "board/2025/tarush.webp",
      instagram: "https://www.instagram.com/tar10000/?hl=en",
      linkedin: "https://www.linkedin.com/in/tarush10000/"
    },
    {
      name: "HARDIK BANSAL",
      position: "VICE-CHAIRPERSON",
      image: "board/2025/bansal.webp",
      instagram: "https://www.instagram.com/hardik_.bansal/?hl=en",
      linkedin: "https://www.linkedin.com/in/hardikbansal2064/"
    },
    {
      name: "ARADHAY HARSHIT",
      position: "SECRETARY",
      image: "board/2025/Aradhay.webp",
      instagram: "https://www.instagram.com/anshul110904/?hl=en",
      linkedin: "https://www.linkedin.com/in/aradhay-harshit-44211b26a/"
    },
    {
      name: "YASHITA BERRY",
      position: "CO-SECRETARY",
      image: "board/2025/Yashita.webp",
      instagram: "https://www.instagram.com/yashita_berry/?hl=en",
      linkedin: "https://www.linkedin.com/in/yashita-berry-695578277/"
    },
    {
      name: "YASHVI GOYAL",
      position: "MANAGEMENT HEAD",
      image: "board/2025/Yashvi.webp",
      instagram: "https://www.instagram.com/yashvi_goyal04/?hl=en",
      linkedin: "https://www.linkedin.com/in/yashvi-goyal-35a248281/"
    },
    {
      name: "HARDIK SINGLA",
      position: "TECHNICAL HEAD",
      image: "board/2025/Singla.webp",
      instagram: "https://www.instagram.com/hardik._.singla/?hl=en",
      linkedin: "https://www.linkedin.com/in/hardik-singla-163112232/"
    },
    {
      name: "RHYTHM GUPTA",
      position: "EVENTS HEAD",
      image: "board/2025/Rhythm.webp",
      instagram: "https://www.instagram.com/_rhythm.14_/?hl=en",
      linkedin: "https://www.linkedin.com/in/rhythm-gupta-520077253/"
    },
    {
      name: "JIYA PALIWAL",
      position: "DESIGN HEAD",
      image: "board/2025/Jiya.webp",
      instagram: "https://www.instagram.com/jiya_paliwal_/?hl=en",
      linkedin: "https://www.linkedin.com/in/jiya-paliwal3414/"
    },
    {
      name: "KARTIK KAR",
      position: "PROJECTS HEAD",
      image: "board/2025/Kartik.webp",
      instagram: "https://www.instagram.com/kartik_kar_19/?hl=en",
      linkedin: "https://www.linkedin.com/in/kartik-kar/"
    },
    {
      name: "MAITREYA CHAVAN",
      position: "FINANCE HEAD",
      image: "board/2025/Maitreya.webp",
      instagram: "https://www.instagram.com/_maitreyaaaa_/?hl=en",
      linkedin: "https://www.linkedin.com/in/maitreya-chavan-65a638250/"
    },
    {
      name: "BHAVYA SHUKLA",
      position: "PUBLICITY HEAD",
      image: "board/2025/Bhavya.webp",
      instagram: "https://www.instagram.com/bhavyaaa._1/?hl=en",
      linkedin: "https://www.linkedin.com/in/bhavya-shukla-b96a5a288/"
    },
    {
      name: "HARSHITHA K.",
      position: "EDITORIAL HEAD",
      image: "board/2025/Harshita.webp",
      instagram: "https://www.instagram.com/har_shitha__kss_/?hl=en",
      linkedin: "https://www.linkedin.com/in/harshitha-kommareddy-b087a4274/"
    },
    {
      name: "DIVYAM SINGHVI",
      position: "R & D HEAD",
      image: "board/2025/Divyam.webp",
      instagram: "https://www.instagram.com/divyam_singhvi/?hl=en",
      linkedin: "https://www.linkedin.com/in/divyam-singhvi-950257261/"
    }
  ];

  // Board member data for 2024
  const board2024 = [
    {
      name: "PIYUSH PADIA",
      position: "CHAIRPERSON",
      image: "board/2024/Piyush.webp",
      instagram: "https://www.instagram.com/piyush_padia?igsh=emtyZXprMG5uMGkx",
      linkedin: "https://www.linkedin.com/in/piyush-padia-a47766215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "SRIHITHA REDDY",
      position: "VICE-CHAIRPERSON",
      image: "board/2024/Srihitha.webp",
      linkedin: "https://www.linkedin.com/in/-srihitha-reddy"
    },
    {
      name: "ANISHA CHANDAVARKAR",
      position: "SECRETARY",
      image: "board/2024/Anisha.webp",
      instagram: "https://www.instagram.com/anisha_c26?igsh=dGF4ZjJuNTR6dTY1",
      linkedin: "https://www.linkedin.com/in/anisha-chandavarkar?trk=contact-info"
    },
    {
      name: "SACHITA MANNA",
      position: "CO-SECRETARY",
      image: "board/2024/Sachita.webp",
      linkedin: "https://www.linkedin.com/in/sachita-manna-98340824b/"
    },
    {
      name: "VAKATI SAMANVITHA",
      position: "MANAGEMENT HEAD",
      image: "board/2024/Samanvitha.webp",
      instagram: "https://www.instagram.com/samanvitha_reddy_16?igsh=b3dhbG9kMWlmM3pt&utm_source=qr",
      linkedin: "https://www.linkedin.com/in/samanvitha-reddy-9aa84b21b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "BHARATH MUDDULURU",
      position: "TECHNICAL HEAD",
      image: "board/2024/Bharath.webp",
      instagram: "https://www.instagram.com/bharath0616?igsh=MTljaWUzYno5OXd3MA==",
      linkedin: "https://www.linkedin.com/in/bharath-mudduluru-a6a331139?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "HARSH PANDEY",
      position: "EVENTS HEAD",
      image: "board/2024/Harsh.webp",
      instagram: "https://www.instagram.com/harsh._pndy20/?next=%2F",
      linkedin: "https://www.linkedin.com/in/harsh-pandey-fd21/"
    },
    {
      name: "PRIYANSH KOTAK",
      position: "PROJECTS HEAD",
      image: "board/2024/Priyansh.webp",
      instagram: "https://www.instagram.com/priyansh_kotak_/",
      linkedin: "https://www.linkedin.com/in/priyanshkotak/"
    },
    {
      name: "CHUNDRU SAI SRIYA",
      position: "EDITORIAL HEAD",
      image: "board/2024/Sriya.webp",
      instagram: "https://www.instagram.com/17_sriya?igsh=ZTE0bG1uajlwODY4",
      linkedin: "https://www.linkedin.com/in/sriya-chundru-881301268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "TAPESH KHANDELWAL",
      position: "FINANCE HEAD",
      image: "board/2024/Tapesh.webp",
      instagram: "https://www.instagram.com/tapeshkhandelwal?igsh=aml6N2x1cXEyNnBs",
      linkedin: "https://www.linkedin.com/in/tapesh-khandelwal-7b5498246/"
    }
  ];

  return (
    <div>
      <section id="Board">
        <br />
        <br />
        <h2
          style={{
            textAlign: "center",
            paddingBottom: "30px",
            color: "white",
            paddingTop: "0px",
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
            <strong style={{ fontSize: "1.3em" }}>Board</strong>
          </span>
        </h2>
        <div className="wrapper" id="content-desktop">
          <nav className="tabs">
            <div className="selector"></div>
            <a
              href="#Board"
              id="Board-switch-2025"
              className={
                activeTab === "2025"
                  ? "active no-border-on-link"
                  : "no-border-on-link"
              }
              style={{
                backgroundColor: activeTab === "2025" ? "green" : "transparent",
                color: activeTab === "2025" ? "white" : "inherit",
                borderRadius: activeTab === "2025" ? "50px" : "0",
                transition: "all 0.3s ease-in-out",
              }}
              onClick={() => handleTabClick("2025")}
            >
              2025
            </a>
            <a
              href="#Board"
              id="Board-switch-2024"
              className={
                activeTab === "2024"
                  ? "active no-border-on-link"
                  : "no-border-on-link"
              }
              style={{
                backgroundColor: activeTab === "2024" ? "green" : "transparent",
                color: activeTab === "2024" ? "white" : "inherit",
                borderRadius: activeTab === "2024" ? "50px" : "0",
                transition: "all 0.3s ease-in-out",
              }}
              onClick={() => handleTabClick("2024")}
            >
              2024
            </a>
          </nav>
        </div>

        {/* 2025 Board */}
        <div
          className={`Board2025 board-content ${
            activeYearBoard === "Board2025" ? "active-year-board highlight" : ""
          }`}
          id="Board2025"
        >
          <div className="tilted-cards-container">
            {board2025.map((member, index) => (
              <div key={index} className="member-card-container">
                <div className="tilted-card-wrapper">
                  <TiltedCard
                    imageSrc={member.image}
                    altText={`${member.name}, IEEE TEMS VIT`}
                    containerHeight="250px"
                    containerWidth="250px"
                    imageHeight="250px"
                    imageWidth="250px"
                    rotateAmplitude={12}
                    scaleOnHover={1.1}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent={false}
                  />
                </div>
                <div className="member-info-below">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-position">{member.position}</p>
                  <div className="social-links">
                    {member.instagram && (
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2024 Board */}
        <div
          className={`Board2024 board-content ${
            activeYearBoard === "Board2024" ? "active-year-board" : ""
          }`}
          id="Board2024"
        >
          <div className="tilted-cards-container">
            {board2024.map((member, index) => (
              <div key={index} className="member-card-container">
                <div className="tilted-card-wrapper">
                  <TiltedCard
                    imageSrc={member.image}
                    altText={`${member.name}, IEEE TEMS VIT`}
                    containerHeight="250px"
                    containerWidth="250px"
                    imageHeight="250px"
                    imageWidth="250px"
                    rotateAmplitude={12}
                    scaleOnHover={1.1}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent={false}
                  />
                </div>
                <div className="member-info-below">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-position">{member.position}</p>
                  <div className="social-links">
                    {member.instagram && (
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Board;





























