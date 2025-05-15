import "./Footer.css";

const Footer = () => {
  return (
    <section id="Footer" style={{ backgroundColor: "#1e1d1def"}}>
      <footer className="text-white py-3 container-fluid">
        <div className="text-center">
          <hr className="top col-3" />
          <p className="top text-center col-4 fw-bold">
            IEEE Technology and Engineering Management Society
          </p>
          <hr className="top col-3" />
          <p className="text-center">VIT CHAPTER</p>
          <a
            href="https://vit.ac.in/campuslife/studentswelfare"
            target="_blank" rel="noopener noreferrer"
            id="SW"
          >
            <p className="text-center" id="SW">
              Office of Students' Welfare
            </p>
          </a>
        </div>

      
        <div className="row text-center my-3">
      
          <div className="col-lg-3 mx-auto p-2">
            <img
              src="temslogo.webp"
              className="col-5 col-md-4 col-lg-10"
              alt="IEEE TEMS Vellore"
            />
            <p>Bridging diverse principles</p>
          </div>

          <div className="col-lg-2 col-6 text-center p-2 mx-auto">
            <h6 className="fw-bold mb-4">Menu</h6>
            <div className="info">
              <p>
                <a href="#Home" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="#Event" className="text-reset">
                  Events
                </a>
              </p>
              <p>
                <a href="#Blogs-start" className="text-reset">
                  Our Blogs
                </a>
              </p>
            </div>
          </div>

         
          <div className="col-lg-2 col-6 text-center p-2 mx-auto">
            <h6 className="fw-bold mb-4">Contact Us</h6>
            <div className="info">
              <p>
                <img
                  src="gmail.png"
                  className="col-1 mx-2"
                  alt="Gmail, IEEE TEMS Vellore"
                />
                ieeetems@vit.ac.in
              </p>
              <a
                href="https://www.linkedin.com/company/ieee-tems/about/"
                target="_blank" rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <img
                  src="linkedin.webp"
                  className="col-1 mx-2"
                  alt="LinkedIn"
                />
                ieeetemsvit
              </a>
              <br />
              <a
                href="https://www.instagram.com/ieeetemsvit/"
                target="_blank" rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "white"
                }}
              >
                <img
                  src="instagram.webp"
                  className="col-1 mx-2"
                  alt="Instagram"
                />
                ieeetemsvit
              </a>
            </div>
          </div>


          <div className="col-lg-3 px-5 mx-auto" style={{textAlign:"justify"}}>
            <p>
              At IEEE TEMS VIT, we believe in a well-rounded skill set for
              success in today's ever-evolving tech landscape. Engage
              in at least one technical and one non-technical domain, enhancing
              both your technical expertise and creativity. Join our vibrant
              community today.
            </p>
          </div>
        </div>

    
        <h6 className="text-center">Made with 💚 by Our Team</h6>
        <hr className="col-11 mx-auto" />
        <p className="bottom text-center">
          Copyright © 2024 IEEE TEMS. All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default Footer;
