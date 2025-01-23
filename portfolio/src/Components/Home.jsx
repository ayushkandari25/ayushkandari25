import React from "react";
import "../Styles/Home.css";

const Home = () => {
  const downloadResume = () => {
    const resumePath = "/Resume/resume.pdf";
    console.log(resumePath)
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Ayush-Kandari-Resume.pdf";
    link.click(); // Trigger the download
  };

  return (
    <>
    <div id="home" className="home-container">
      {/* Left side content */}
      <div className="left-side">
        <h1>
          <span className="hi-text">Hi<img className="animated-hi-gif" src="/Images/wave.gif" alt="Animated Hi" /> I'm</span>
          <br />
          <span className="name-text">Ayush Kandari</span>
        </h1>
        <p>Front End Developer</p>
        <button onClick={downloadResume} className="resume-btn">
          Resume
        </button>
      </div>

      {/* Right side image */}
      <div className="right-side">
        <img src="/Images/Profile.png" alt="Ayush" className="profile-image" />
      </div>
    </div>
    <hr className="thin-line" />
    </>
  );
};

export default Home;
