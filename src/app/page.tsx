"use client";

import { useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const publicPath = (path: string) => `${basePath}${path}`;

const skills = [
  { name: "HTML", icon: "▣" },
  { name: "CSS", icon: "◇" },
  { name: "JavaScript", icon: "JS" },
  { name: "React", icon: "⚛" },
  { name: "Next.js", icon: "N" },
  { name: "Node.js", icon: "⬡" },
  { name: "Python", icon: "🐍" },
  { name: "API Integration", icon: "☁" },
  { name: "Git & GitHub", icon: "●" },
  { name: "UI/UX Design", icon: "✎" },
  { name: "AI & Automation", icon: "✦" },
];

const projects = [
  {
    title: "AIVA SaaS",
    description:
      "A full-stack SaaS platform for beauty appointment booking and management. Built with Next.js, Node.js, and integrated APIs.",
    tags: ["Next.js", "React", "Node.js", "API"],
    image: "/project-aiva.jpeg",
    liveUrl: "https://aiva.uk.com",
    githubUrl: "https://github.com/Stephanienehemiah06-sudo",
  },
  {
    title: "Web Application",
    description:
      "A responsive web application focused on usability, performance, and a clean modern interface.",
    tags: ["React", "JavaScript", "CSS"],
    image: "/project-web.jpeg",
    liveUrl: "",
    githubUrl: "https://github.com/Stephanienehemiah06-sudo",
  },
  {
    title: "AI & Automation",
    description:
      "Automation workflows and AI-powered solutions using modern tools to improve productivity and efficiency.",
    tags: ["n8n", "AI", "Automation", "APIs"],
    image: "/project-ai.mp4",
    mediaType: "video",
    liveUrl: "",
    githubUrl: "https://github.com/Stephanienehemiah06-sudo",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      {/* ================= NAVIGATION ================= */}
      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            SN<span>.</span>
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            ☰
          </button>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>

            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>

            <a
              href={publicPath("/cv.html")}
              className="cv-button"
              target="_blank"
              rel="noreferrer"
            >
              ↓ &nbsp; Download CV
            </a>
          </nav>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section id="home" className="hero">
        <img
          className="hero-background"
          src={publicPath("/hero.jpeg")}
          alt="Stephanie working on a laptop"
        />

        <div className="hero-overlay" />

        <div className="hero-container">
          <div className="hero-content">
            <div className="badge">FULL-STACK DEVELOPER</div>

            <h1>
              Hi, I&apos;m
              <br />
              Stephanie
              <br />
              <span>Nehemiah</span>
            </h1>

            <p>
              I build modern, responsive and user-focused web applications
              with clean code and powerful functionality.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View My Work <span>→</span>
              </a>

              <a href="#contact" className="secondary-button">
                Let&apos;s Connect <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Hero feature bar */}
        <div className="feature-bar">
          <div className="feature">
            <div className="feature-icon">&lt;/&gt;</div>
            <div>
              <strong>Full-Stack</strong>
              <span>Development</span>
            </div>
          </div>

          <div className="feature">
            <div className="feature-icon">●</div>
            <div>
              <strong>UI/UX</strong>
              <span>Focused</span>
            </div>
          </div>

          <div className="feature">
            <div className="feature-icon">✦</div>
            <div>
              <strong>AI &amp; Automation</strong>
              <span>Solutions</span>
            </div>
          </div>

          <div className="feature">
            <div className="feature-icon">ϟ</div>
            <div>
              <strong>Clean &amp; Scalable</strong>
              <span>Code</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="section about-section">
        <div className="section-container">
          <div className="section-label">ABOUT ME</div>

          <div className="about-grid">
            <div className="about-left">
              <h2>
                I turn ideas into
                <br />
                real <span>digital solutions.</span>
              </h2>

              <div className="about-highlights">
                <div>
                  <div className="highlight-icon">⌘</div>
                  <strong>Full-Stack</strong>
                  <small>Developer</small>
                </div>

                <div>
                  <div className="highlight-icon">▦</div>
                  <strong>Modern</strong>
                  <small>Tech Stack</small>
                </div>

                <div>
                  <div className="highlight-icon">♡</div>
                  <strong>Passionate</strong>
                  <small>Problem Solver</small>
                </div>
              </div>
            </div>

            <div className="about-text">
              <p>
                I&apos;m a passionate full-stack developer who enjoys building
                both the frontend and backend of modern web applications.
              </p>

              <p>
                I love writing clean, scalable code and creating seamless user
                experiences.
              </p>

              <p>
                I&apos;m also interested in AI tools and automation to build
                smarter and more efficient solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="section skills-section">
        <div className="section-container">
          <div className="section-label">MY SKILLS</div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <div className="skill-icon">{skill.icon}</div>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section projects-section">
        <div className="section-container">
          <div className="projects-heading">
            <div className="section-label">FEATURED PROJECTS</div>

            <a
              href="https://github.com/Stephanienehemiah06-sudo"
              target="_blank"
              rel="noreferrer"
              className="view-all"
            >
              View all projects →
            </a>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-image">
                  {project.mediaType === "video" ? (
                    <video
                      src={publicPath(project.image)}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <div
                      className="project-image-photo"
                      style={{
                        backgroundImage: `url(${publicPath(project.image)})`,
                      }}
                    />
                  )}
                  <div className="project-image-overlay" />
                </div>

                <div className="project-content">
                  <div className="project-title-row">
                    <h3>{project.title}</h3>

                    {project.title === "AIVA SaaS" && (
                      <span className="featured-tag">Featured</span>
                    )}
                  </div>

                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo ↗
                      </a>
                    ) : (
                      <span>Live Demo ↗</span>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub ◉
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="section contact-section">
        <div className="section-container">
          <div className="section-label">LET&apos;S CONNECT</div>

          <div className="contact-grid">
            <div>
              <h2>
                Let&apos;s build something
                <br />
                amazing <span>together.</span>
              </h2>
            </div>

            <div className="contact-details">
              <a href="mailto:stephanienehemiah06@gmail.com">
                ✉
                <span>stephanienehemiah06@gmail.com</span>
              </a>

              <a
                href="https://github.com/Stephanienehemiah06-sudo"
                target="_blank"
                rel="noreferrer"
              >
                ◉
                <span>github.com/Stephanienehemiah06-sudo</span>
              </a>

              <a
                href="https://aiva.uk.com"
                target="_blank"
                rel="noreferrer"
              >
                ◉
                <span>aiva.uk.com</span>
              </a>
            </div>

            <div className="availability-card">
              <p>
                I&apos;m currently open to new opportunities and exciting
                projects.
              </p>

              <a href="mailto:stephanienehemiah06@gmail.com">
                Send Me a Message →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer>
        <p>© 2026 Stephanie Nehemiah. All rights reserved.</p>

        <p>Built with Next.js &amp; Tailwind CSS</p>

        <a href="#home" className="back-to-top">
          ↑
        </a>
      </footer>
    </main>
  );
}
