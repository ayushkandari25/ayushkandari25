import React from "react";
import "../Styles/Projects.css";
import GitHubCalendar from 'react-github-calendar';

const Projects = () => {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
    <div id="projects" className="projects-section">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-container">
        <div className="project-card">
          <div className="project-image">
            <img src="/Images/Vibestream.png" alt="Project Screenshot" />
          </div>
          <div className="project-content">
            <div className="title-section">
              <h2>Title: <span>VIBESTREEM.COM</span></h2>
            </div>
            <div className="description-section">
              <h3>Description:</h3>
              <p>Vibestream - Music Streaming App 🎵 Vibestream is a sleek and user-friendly music streaming platform designed for music lovers who enjoy seamless access to their favorite tracks, artists, and playlists. The app features a modern interface, personalized music experiences, and essential controls for a delightful listening journey.</p>
            </div>
            <div className="tech-section">
              <h3>Tech stack:</h3>
              <p>HTML | CSS | React</p>
            </div>
            <div className="feature-section">
              <h3>Features:</h3>
              <p>Navbar, Admin Panel, Music Playing, Login, SignUp etc.</p>
            </div>
            <div className="button-group">
              <button 
                className="project-btn github"
                onClick={() => openInNewTab('https://github.com/saurabhshambharkar/B41_WEB_006_UI-UX-Unleashed')}
              >
                Github
              </button>
              <button 
                className="project-btn visit"
                onClick={() => openInNewTab('https://warm-cheesecake-8bfc28.netlify.app/')}
              >
                Visit Site
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="thin-line" />
      {/* New GitHub Calendar and Stats Section */}
      <div className="github-stats-section">
        <h2>GitHub Contributions</h2>
        <div className="github-stats-container">
          {/* GitHub Contributions Calendar First */}
          <div className="github-calendar">
            <GitHubCalendar username="ayushkandari25" />
          </div>

          {/* GitHub Stats Card Next */}
          <div className="github-stats-card">
            <img 
              src="https://github-readme-stats.vercel.app/api?username=ayushkandari25&show_icons=true&hide_title=true&count_private=true&theme=radical" 
              alt="GitHub Stats" 
            />
          </div>

          {/* GitHub Most Used Languages Table */}
          <div className="github-languages">
            <img 
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=ayushkandari25&layout=compact&theme=radical" 
              alt="Most Used Languages" 
            />
          </div>
        </div>
      </div>
    </div>
    <hr className="thin-line" />
    </>
  );
};

export default Projects;
