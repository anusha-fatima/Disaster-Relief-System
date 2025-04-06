import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Disaster Management System</h2>
          <p> Our Disaster Management System is designed to support communities by
          providing timely information, resources, and support in times of crisis.</p>
        </div>
        
        <div className="footer-section links">
          <h3>Main Pages</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/precautions">Precautions</a></li>
            <li><a href="/help_line">Help-Line</a></li>
          </ul>
        </div>

        <div className="footer-section links">
          <h3>Team Memebers</h3>
          <ul>
          <li><a
               href="https://www.linkedin.com/in/anusha-fatima-69743a288/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anusha Fatima
            </a></li>
            <li><a href="https://www.linkedin.com/in/tamia-naeem"  target="_blank"
              rel="noopener noreferrer">Tamia Naeem</a></li>
      
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Disaster Management System. Powered by React.</p>
        <div className="social-icons">
         
        <a
              href="https://www.linkedin.com/in/anusha-fatima-69743a288/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#333" }}
            >
               <i class="fa-brands fa-linkedin"></i>
            </a>
          <a
              href="https://github.com/anusha-fatima"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#333" }}
            >
              <i class="fa-brands fa-github"></i>
            </a>
        </div>
      </div>
     
    </footer>
  );
};

export default Footer;
