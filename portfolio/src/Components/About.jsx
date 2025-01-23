import React from "react";
import "../Styles/About.css";


const About = () => {
  return (
    <>
    <div id="about" className="about-container">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <div className="about-left">
          <p><strong>Name:</strong> Ayush Kandari</p>
          <p><strong>Higher Education:</strong> Bachelor of Technology(Civil Engineering)</p>
          <p><strong>Address:</strong> Uttarakhand, India</p>
          <p><strong>Contact No.:</strong> +91 8171362490</p>
          <p><strong>Email ID:</strong> ayush25.kandari@gmail.com</p>
        </div>
        <div className="about-right">
          <p>
          Hi, I’m Ayush Kandari, a passionate Front-End Developer dedicated to creating responsive and visually engaging websites. My journey into web development began last year when I discovered coding and was inspired by the creativity behind building digital experiences.
          I specialize in HTML, CSS, JavaScript, and modern front-end tools, focusing on clean design and user-friendly interfaces. I’m always eager to learn, explore new technologies, and bring ideas to life through code. Let’s collaborate to create something amazing!
          </p>
        </div>
      </div>
    </div>
    <hr className="thin-line" />
    </>
  );
};

export default About;
