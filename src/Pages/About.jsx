import React from "react";
import "../Style/About.css";
import { FaExclamationTriangle } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-container">
      <section className="intro-section">
        <h2 className="titleAbout">About Us</h2>
      </section>

      <div className="AboutMidSection">
        <div className="AboutContent">
          <h1 className="AboutMidTitle">
          Our Background and Inspiration
          </h1>
          <p className="AboutDescription">
          We are a team of passionate students from diverse academic backgrounds, united by our commitment to innovation and community resilience. Our team includes a Data Science undergraduate from Virtual University and an Artificial Intelligence undergraduate from NED University of Engineering and Technology Karachi.
          Our idea for the Disaster Management System was born from a deep understanding of the ongoing challenges our region faces, from natural disasters to environmental crises.
          This project represents our dedication to leveraging technology for social good, combining AI, data science, and innovative problem-solving to create a meaningful impact on society.
          </p>
        </div>
      </div>

      <section className="team-section">
        <h3 className="teamSectionTitle">Our Team</h3>
        <div className="team-members">
          <div className="team-member">
            <h4>Anusha Fatima</h4>
            <p>Full-Stack Developer</p>
            <p>
            Full-Stack Developer & Database Architect. Designed and built the entire system.
            </p>
            <a
              href="https://github.com/anusha-fatima"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#333" }}
            >
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/anusha-fatima-69743a288/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#333" }}
            >
               <i class="fa-brands fa-linkedin"></i>
            </a>
           
          </div>
          <div className="team-member">
            <h4>Tamia Naeem</h4>
            <p>AI Engineer /
            Strategist
            </p>
            <p>
            AI Expert & Visionary Behind the Disaster Management System. Passionate about leveraging artificial intelligence for real-world problem-solving.
            </p>
            <a
              href="https://www.linkedin.com/in/tamia-naeem"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#333" }}
            >
               <i class="fa-brands fa-linkedin"></i>
            </a>

            <a
              href="https://github.com/Tamiko-n"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#333" }}
            >
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </section>

      <div className="missionBox">
      <section className="mission-section">
        
        <h3 className="missionTitle">Disaster Management System</h3>
      <p className="missionPara">
      Our Disaster Management System is a comprehensive platform designed to empower communities during emergencies by providing real-time information, essential resources, and instant support. Whether facing natural disasters, accidents, or crises, our system ensures swift response, efficient resource distribution, and reliable communication between the public and emergency teams.
      </p>

      <h2 className="missionTitle">Our Mission</h2>
      <p className="missionPara">
      Our mission is to build a resilient and well-prepared society by equipping people with the right tools, knowledge, and assistance when disaster strikes. We aim to bridge the gap between emergency responders and affected individuals, ensuring quick access to life-saving information and services.
      </p>

      <h3 className="missionTitle">Features of Our System</h3>
      <ul className="missionLIst">
        <li><strong>Emergency Page – Medical Supply Ordering:</strong>In case of accidents, floods, earthquakes, or any other disaster, users can order essential medical supplies directly through our Emergency page, ensuring that help reaches those in need as fast as possible.</li>
        <li><strong>Disaster Assistant:</strong> Our Disaster Assistant provides immediate instructions on what to do during various disasters. Whether it’s an earthquake, fire, or flood, users receive step-by-step guidance to ensure their safety.</li>
        <li><strong>Emergency Dial – Quick Access to Helpline Numbers:</strong> For every type of disaster, our Emergency Dial page provides a comprehensive directory of helpline numbers, allowing users to contact the right authorities instantly for rescue, medical aid, or emergency support.</li>
        <li><strong>Precautionc– Safety & Awareness:</strong> Prevention is key! Our Precaution page offers detailed safety measures and guidelines to help users stay prepared before disasters occur. Learn how to safeguard your home, protect loved ones, and take necessary precautions for different emergencies.</li>
        <li><strong> Developer Introduction – Meet the Team:</strong> Behind this system is a dedicated team of tech enthusiasts who built this project from the ground up. Our team includes a Full-Stack Developer & Database Architect who developed the entire system and an AI Engineer who conceptualized and enhanced the intelligence behind the platform.</li>
      </ul>
      
 
      <h3 className="missionTitle">Together for a Safer Tomorrow</h3>
      <p className="missionPara">
      We encourage you to explore our Disaster Management System and familiarize yourself with the available resources. With the right technology, awareness, and preparedness, we can build a stronger, safer, and more resilient community that is ready to face any challenge.
      </p>
      
      </section>

      </div>

      <div className="disclaimer-card">
  <div className="disclaimer-icon">
    <FaExclamationTriangle />
  </div>
  <div className="disclaimer-content">
    <h3>Important Notice</h3>
    <p>
      This is a demonstration system only. Orders placed here are not real and 
      will not be fulfilled. Please do not wait for any deliveries as this is 
      purely a prototype for educational purposes.
    </p>
  </div>
</div>
    </div>
  );
};

export default About;
