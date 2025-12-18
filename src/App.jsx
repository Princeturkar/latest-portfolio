import { useState } from "react";
import profileImg from "./assets/prii.jpeg";
import "./App.css"; 

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <a href="#home" className="logo">Prince Portfolio</a>

        <div id="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={menuOpen ? 'bx bx-x' : 'bx bx-menu'}></i>
        </div>

        <nav className={`navbar ${menuOpen ? "active" : ""}`}>
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HOME SECTION */}
      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, It's Me</h3>
          <h1>Prince</h1>
          <h3>And I'm a <span>Full Stack Developer</span></h3>
          <p>Proficient in HTML, CSS, JavaScript, and React. I build modern web applications with a focus on user experience.</p>
          <div className="social-media">
            <a href="https://github.com/Princeturkar" target="_blank" rel="noopener"><i class='bx bxl-github'></i></a>
            <a href="https://instagram.com/_princeturkar" target="_blank" rel="noopener"><i class='bx bxl-instagram'></i></a>
            <a href="https://www.linkedin.com/in/prince-turkar-4557b428b/" target="_blank" rel="noopener"><i class='bx bxl-linkedin'></i></a>
          </div>
          <a href="#" className="btn">Download CV</a>
        </div>
        <div className="home-img">
          <img src={profileImg} alt="Prince Profile" />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about" id="about">
        <div className="about-img">
           <img src={profileImg} alt="About Me" />
        </div>
        <div className="about-content">
          <h2 className="heading">About <span>Me</span></h2>
          <h3>Full Stack Developer</h3>
          <p>I am a passionate developer with a focus on building interactive and responsive web experiences.</p>
          <a href="#" className="btn">Read More</a>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services" id="services">
        <h2 className="heading">Our <span>Services</span></h2>
        <div className="services-container">
          <div className="services-box">
            <i className='bx bx-code-alt'></i>
            <h3>Web Development</h3>
            <p>Creating responsive and high-performance websites using the latest technologies.</p>
            <a href="#" className="btn">Read More</a>
          </div>
          <div className="services-box">
            <i className='bx bxl-react'></i>
            <h3>React Apps</h3>
            <p>Building scalable Single Page Applications (SPA) with modern React features.</p>
            <a href="#" className="btn">Read More</a>
          </div>
          <div className="services-box">
            <i className='bx bx-paint'></i>
            <h3>UI/UX Design</h3>
            <p>Designing clean, user-friendly interfaces that provide a great user experience.</p>
            <a href="#" className="btn">Read More</a>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="portfolio" id="portfolio">
        <h2 className="heading">Latest <span>Projects</span></h2>
        <div className="portfolio-container">
          <div className="portfolio-box">
            <img src="https://via.placeholder.com/600x400"  />
            <div className="portfolio-layer">
              <h4>Amazon website</h4>
              <p>A full-featured e-commerce UI built with HTML and CSS And JavaScript.</p>
              <a href="#"><i className='bx bx-link-external'></i></a>
            </div>
          </div>
          <div className="portfolio-box">
            <img src="https://via.placeholder.com/600x400" />
            <div className="portfolio-layer">
              <h4>AI virtual Assistant</h4>
              <p>Built a fully functional AI Assistant interface using HTML,CSS and Javascript </p>
              <a href="#"><i className='bx bx-link-external'></i></a>
            </div>
          </div>
          <div className="portfolio-box">
            <img src="https://via.placeholder.com/600x400"  />
            <div className="portfolio-layer">
              <h4>Portfolio Site</h4>
              <p>A personal portfolio website showing my skills and projects.</p>
              <a href="#"><i className='bx bx-link-external'></i></a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me!</span></h2>
        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="input-box">
            <input type="number" placeholder="Mobile Number" />
            <input type="text" placeholder="Email Subject" />
          </div>
          <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; 2025 by Prince | All Rights Reserved.</p>
        </div>
        <div className="footer-iconTop">
          <a href="#home"><i className='bx bx-up-arrow-alt'></i></a>
        </div>
      </footer>
    </>
  );
}
