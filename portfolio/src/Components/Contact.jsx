import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "../Styles/Contact.css";

// Move initialization after imports
emailjs.init("45v_zPrMLqqJb_s02");

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create template parameters
    const templateParams = {
      to_email: 'ayush25.kandari@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    // Log the parameters for debugging
    console.log('Sending email with params:', templateParams);

    emailjs.send(
      'service_2qpzyxd', 
      'template_vcer2w8',  
      templateParams,
      '45v_zPrMLqqJb_s02'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch((error) => {
      console.error('FAILED...', error);
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <div id="contact" className="contact-page">
      <div className="contact-container">
        <div className="form-section">
          <h1>Chat With Me</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="send-button">Send Message</button>
          </form>
        </div>

        <div className="contact-info">
          <h1>Contact Me</h1>
          <div className="info-items">
            <div className="info-item">
              <i className="location-icon"></i>
              <span>Uttarakhand, India</span>
            </div>
            <div className="info-item">
              <i className="phone-icon"></i>
              <span>+91 8171362490</span>
            </div>
            <div className="info-item">
              <i className="email-icon"></i>
              <a href="mailto:ayush25.kandari@gmail.com">ayush25.kandari@gmail.com</a>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/ayushkandari/" className="linkedin" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/ayushkandari25" className="github" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <footer>
        <marquee>Copyright ©2025 All rights reserved | This template is made by Ayush Kandari.</marquee>
      </footer>
    </div>
  );
};

export default Contact;