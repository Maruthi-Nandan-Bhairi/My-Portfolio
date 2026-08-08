import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const projects = [
    {
      title: "AI-Powered Online Code Editor",
      description:
        "A web-based code editor that allows users to write and execute HTML, CSS, and JavaScript code with real-time output.",
      tech: "HTML • CSS • JavaScript • Ace Editor",
      link: "https://maruthi-nandan-bhairi.github.io/LIVE-CODE-EDITOR/",
    },
    {
      title: "Guru Dashboard",
      description:
        "A student productivity platform for managing books, notes, papers, alarms, and study activities.",
      tech: "Python • Flask • HTML • CSS • JavaScript",
      link: "#",
    },
    {
      title: "AI Image Analyzer",
      description:
        "An AI-powered application designed to analyze medical images and provide intelligent image analysis.",
      tech: "Python • AI • Machine Learning",
      link: "#",
    },
  ];

  const skills = [
    "Python",
    "C",
    "Java",
    "C#",
    "HTML",
    "CSS",
    "JavaScript",
    "Data Analytics",
    "React",
    "MySQL",
    "GitHub",
    "Power BI",
  ];

  return (
    <div className={darkMode ? "app dark" : "app light"}>

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">MARUTHI<span>.</span></h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="small-text">HELLO, I'M</p>

          <h1>
            MARUTHI <span>👋</span>
          </h1>

          <h2>
            MCA Student & <span>Aspiring Data Analyst</span>
          </h2>

          <p className="hero-description">
            Passionate about Data Analyst, Python Programming,
            Artificial Intelligence and Web Development.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a
              href="./resume.pdf"
              download
              className="secondary-btn"
            >
              Download Resume
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/maruthi-p-82684839"
              target="_blank"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/kmaruthibrahamavar"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="profile-circle">
            <span>👨‍💻</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <p className="section-label">ABOUT ME</p>

        <h2 className="section-title">
          Building Ideas Into <span>Digital Solutions</span>
        </h2>

        <p className="about-text">
          I am an MCA student passionate about software development,
          web technologies, Python programming, data analytics and
          emerging technologies. I enjoy building practical projects
          that solve real-world problems and continuously improving my
          technical skills.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <p className="section-label">MY EXPERTISE</p>

        <h2 className="section-title">
          Technical <span>Skills</span>
        </h2>

        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <p className="section-label">MY WORK</p>

        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>

        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-number">
                0{index + 1}
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <small>{project.tech}</small>

              <a
                href={project.link}
                target="_blank"
                className="project-link"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="section">
        <p className="section-label">MY JOURNEY</p>

        <h2 className="section-title">
          Education & <span>Certifications</span>
        </h2>

        <div className="education-container">
          <div className="education-card">
            <h3>Master of Computer Applications</h3>
            <p>MS Ramaiah University of Applied Science</p>
            <span>Currently Pursuing</span>
          </div>

          <div className="education-card">
            <h3>Bachelor of Computer Applications</h3>
            <p>Veerashaiva Degree College, Ballari</p>
            <span>88.67%</span>
          </div>

          <div className="education-card">
            <h3>Certifications</h3>
            <p>Google Advanced Data Analytics</p>
            <p>Microsoft Power BI Data Analyst</p>
            <p>IBM Introduction to Data Analytics</p>
            <p>1M1B Virtual Internship</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <p className="section-label">GET IN TOUCH</p>

        <h2>
          Let's Build Something <span>Great Together</span>
        </h2>

        <p>
          I am open to placements,internships, projects and
          exciting opportunities.
        </p>

        <a
          href="https://www.linkedin.com/in/maruthi-p-82684839"
          target="_blank"
          rel="noopener noreferrer"
          className="primary-btn"
        >
          Contact Me
        </a>
      </section>

      {/* Footer */}
      <footer>
        <p>
          © 2026 Maruthi Nandan Bhairi. Designed & Built with Shri Bhairi Solutions and React.
        </p>
      </footer>

    </div>
  );
}

export default App;