import React, { useState } from "react";
// Assuming Event.css contains the necessary styles for this component.
        import "./Event.css";

const Event = () => {
    // Define variables for the years
    const currentYear = 2025;
    const previousYear = 2024;

    // State management for active year and content
    const [activeYear, setActiveYear] = useState(currentYear.toString());
    const [activeContent, setActiveContent] = useState("content1");

    // Handler to change the active year
    const handleYearChange = (year) => {
        setActiveYear(year);
        // Reset to the first content item when the year changes
        setActiveContent("content1");
    };

    // Handler to change the active content within a year
    const handleContentChange = (contentId) => {
        setActiveContent(contentId);
    };

    // Data structure for events to avoid repetition in JSX
    const eventsData = {
        [currentYear]: [
            { id: "content1", name: "Sustainable Development Goals", img: "events/2025/sdg.png", description: "An enlightening session that delved into the United Nations' 17 Sustainable Development Goals, led by the esteemed Mr. Yogesh Shinde. This event served as a catalyst for change, encouraging participants to think critically about global challenges and innovate for a sustainable future. It was a powerful call to action, inspiring attendees to harness their skills and ideas to contribute towards a better, more equitable world for all." },
            { id: "content2", name: "Squid Survivors", img: "events/2025/squid.png", description: "During Riviera 2025, we brought the global phenomenon to campus with \"Squid Survivors.\" This thrilling event challenged participants with a series of high-stakes games inspired by the popular series. Contestants tested their wit, agility, and nerve in a friendly but competitive atmosphere, all vying for the ultimate prize. It was an unforgettable experience filled with suspense, excitement, and teamwork, making it a standout attraction of the fest." },
            { id: "content3", name: "Bouncing Castle", img: "events/2025/bouncin.png", description: "We added a dose of pure fun to Riviera 2025 with our very own Bouncing Castle. This pay-to-play attraction offered a chance for everyone to let loose, jump around, and relive some carefree childhood moments amidst the hustle and bustle of the fest. It was a simple, joyous escape that brought smiles and laughter to many, proving to be a popular spot for students to relax and have a great time with friends." },
            { id: "content4", name: "HackXpertise 2.0", img: "events/2025/hackx2.png", description: "Building on the success of its predecessors, HackXpertise 2.0 returned as our flagship innovation marathon. This year, we enhanced the experience with preliminary sessions on Git for effective version control and a tutorial on leveraging the latest AI tools. Following the workshops, participants dove into a hackathon and designathon, working tirelessly in teams to develop groundbreaking solutions. The event was a testament to the creativity and technical skill within our community." },
            { id: "content5", name: "Git Set Go", img: "/events/2025/gitsetgo.png", description: "This comprehensive online session was designed to empower developers by mastering essential version control skills. In \"Git Set Go,\" participants journeyed from the fundamentals to more advanced techniques of Git and GitHub. The workshop provided hands-on practice, enabling attendees to confidently manage code, collaborate on projects, and streamline their development workflow, setting them up for success in any software development environment." },
            { id: "content6", name: "HP Dreams Unlocked", img: "events/2025/hp.png", description: "In an exciting collaboration with HP, we hosted \"HP Dreams Unlocked,\" a dynamic on-campus event. The day was packed with an inspiring tech workshop, fun creative challenges, and a high-speed Live Pitch Challenge where innovators presented their ideas in just 60 seconds. Participants engaged with cutting-edge technology and had the chance to win exclusive HP giveaways, with one lucky winner even taking home a brand-new AI-powered HP Omnibook laptop." },
            { id: "content7", name: "Code Rush 3.0", img: "events/2025/coderush3.png", description: "The ultimate test of speed, skill, and teamwork, Code Rush 3.0, made its triumphant return. This offline coding competition saw teams battle it out in our signature relay-race format. Each member tackled a segment of a complex problem before passing it to their teammate, creating an electrifying and collaborative atmosphere. The event pushed participants to code efficiently under pressure, celebrating both individual talent and the power of a well-coordinated team." },
            { id: "content8", name: "CASA", img: "events/2025/casa.png", description: "In our ongoing effort to promote student well-being, we hosted CASA, a crucial drug awareness event. This session provided a safe and informative space to discuss the serious implications of substance abuse and its impact on mental and physical health. The event aimed to educate, empower, and equip students with the knowledge to make responsible choices and to support peers who may be struggling, reinforcing our commitment to a healthy and supportive campus community." }
        ],
        [previousYear]: [
            { id: "content1", name: "Resume Revamp", img: "events/2024/resume.webp", description: "We hosted an exclusive online session dedicated to mastering the art of resume building. This workshop guided participants through the essential dos and don'ts of creating a professional resume, from structuring content effectively to using powerful action verbs. Attendees learned valuable tips and tricks to make their profiles stand out to recruiters, ensuring their skills and experiences were highlighted for maximum impact in their job search." },
            { id: "content2", name: "Unboxing DevOps", img: "events/2024/devops.webp", description: "This insightful online session demystified the world of DevOps, bridging the gap between development and operations. Participants explored the core principles of the DevOps culture, including continuous integration, continuous delivery (CI/CD), and automation. The workshop provided a clear overview of how these modern practices streamline workflows, enhance collaboration, and accelerate the software development lifecycle in the tech industry." },
            { id: "content3", name: "ML Maven Marathon", img: "events/2024/ml.webp", description: "The ML Maven Marathon was a fast-paced and engaging quiz designed to challenge machine learning enthusiasts. Conducted through a Google Form, this event tested participants' knowledge on a wide range of ML concepts, algorithms, and theories. It was a fun opportunity for students to benchmark their expertise, compete with their peers, and prove their mettle in the rapidly evolving field of data science." },
            { id: "content4", name: "Code Clash", img: "events/2024/code.webp", description: "Coders went head-to-head in Code Clash, our premier competitive programming contest hosted on the popular Unstop platform. This event challenged participants with a set of complex algorithmic problems designed to push their problem-solving and coding skills to the limit. It was a thrilling battle of logic and efficiency, where the sharpest minds competed for bragging rights and demonstrated their programming prowess." },
            { id: "content5", name: "HackXpertise", img: "events/2024/hackXpertise.webp", description: "HackXpertise was an immersive two-day event that combined learning with hands-on creation. The first day kicked off with an intensive workshop, equipping participants with new skills and technologies. This was immediately followed by a 24-hour hackathon and designathon, where teams collaborated to build innovative solutions and prototypes from scratch. This high-energy event was a platform for creativity, teamwork, and turning ambitious ideas into tangible realities." },
            { id: "content6", name: "CodeRush 2.0", img: "events/2024/coder.webp", description: "Returning with even more excitement, CodeRush 2.0 was an adrenaline-fueled offline coding competition with a unique twist. Teams engaged in an intense relay race, where each member had to solve a part of a problem before passing the baton to the next. This format tested not only individual coding speed and accuracy but also team strategy and collaboration under pressure, creating a high-stakes and electrifying atmosphere for all participants." },
            { id: "content7", name: "Alumni Talks", img: "events/2024/alumni.webp", description: "This special event provided a valuable platform for current members to connect with our esteemed club seniors and alumni. In a relaxed and interactive session, our experienced seniors shared their career journeys, offered practical industry insights, and answered questions on everything from navigating academics to landing a dream job. It was a fantastic networking opportunity that strengthened our community and helped guide our members on their professional paths." },
            { id: "content8", name: "Outreach", img: "events/2024/outreach.webp", description: "As part of our commitment to giving back to the community, we organized an outreach program at a nearby school. Our team conducted an engaging and interactive session on Scratch, a visual programming language perfect for beginners. The goal was to introduce young students to the foundational concepts of coding in a fun and accessible way, sparking their curiosity and inspiring the next generation of innovators and technologists." }
        ]
    };

    const renderYearEvents = (year) => {
        const yearData = eventsData[year] || [];
        return (
            <div
                className={`active-year evnentContent ${activeYear === year.toString() ? "" : "hidden"}`}
                id={`${year}events`}
            >
                <div className="container1">
                    <div className="event-icon">
                        {yearData.map((event, index) => (
                            <div
                                key={event.id}
                                className={`imgBx ${activeContent === event.id ? "active" : ""}`}
                                style={{ "--i": index + 1 }}
                                data-id={event.id}
                                onClick={() => handleContentChange(event.id)}
                            >
                                <img src={event.img} alt={`${event.name}, IEEE TEMS`} />
                            </div>
                        ))}
                    </div>

                    <div className="content1">
                        {yearData.map(event => (
                             <div
                                key={event.id}
                                className={`contentBx ${activeContent === event.id ? "active" : ""}`}
                                id={event.id}
                            >
                                <div className="card">
                                    <div className="imgBx2">
                                        <img src={event.img} alt={`${event.name}, IEEE TEMS`} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="event-description" style={{ textAlign: "justify" }}>
                    <div className="event-description-content">
                        {yearData.map(event => (
                            <div
                                key={event.id}
                                className={`event-description-content-text descriptionBx ${activeContent === event.id ? "event-active" : ""}`}
                                id={`${event.id}_description`}
                            >
                                <h2 style={{ padding: "0px" }}>{event.name}</h2>
                                <p>{event.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section id="Events">
            <div>
                <h2>
                    <span>
                        <strong>Events</strong>
                    </span>
                </h2>

                <div className="wrapper" id="content-desktop">
                    <nav className="tabs">
                        <div className="selector"></div>
                        <a
                            href="#Event"
                            id={currentYear.toString()}
                            className={activeYear === currentYear.toString() ? "active no-border-on-link" : "no-border-on-link"}
                            onClick={() => handleYearChange(currentYear.toString())}
                        >
                            {currentYear}
                        </a>
                        <a
                            href="#Event"
                            id={previousYear.toString()}
                            className={activeYear === previousYear.toString() ? "active no-border-on-link" : "no-border-on-link"}
                            onClick={() => handleYearChange(previousYear.toString())}
                        >
                            {previousYear}
                        </a>
                    </nav>
                </div>

                <section className="yo" style={{ marginTop: "50px" }}>
                    {renderYearEvents(currentYear)}
                    {renderYearEvents(previousYear)}
                </section>
            </div>
        </section>
    );
};

export default Event;

