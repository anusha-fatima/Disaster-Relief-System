/**
 * @typedef {import('sweetalert2')} Swal
 * @typedef {import('sweetalert2-react-content')} withReactContent
 */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import "./Header.css";
import "../Style/Chatbot.css"; 
import AccidentImage from "../assets/Images/Accident.png";
import ForestImage from "../assets/Images/Forest.png";
import FloodImage from "../assets/Images/Flood.png";
import EarthquakeImage from "../assets/Images/Earthquake.png";


const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your Disaster Relief Assistant. How can I help?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const disasterResponses = {
    "accident": "🚑 Call emergency services 1122. Check for injuries but don't move victims unless in immediate danger. Apply first aid if trained.",
    "flood": "🌊 Move to higher ground immediately. Avoid walking/driving through floodwaters. Turn off electricity if safe to do so. Emergency contact: 1122",
    "earthquake": "🏠 Drop, cover, and hold on. Stay indoors until shaking stops. Evacuate if structural damage occurs. Emergency contact: 1122.",
    "fire": "🔥 Evacuate immediately. Call 16 (Fire Brigade). Use stairs, not elevators. If trapped, seal doors with wet cloths.",
    "default": "I'm here to help with disasters. Try asking about: accident, flood, earthquake, or fire emergencies."
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
   
    const userMessage = { text: input, sender: "user" };
    setMessages(prev => [...prev, userMessage]);
    
   
    const lowerInput = input.toLowerCase();
    let response = disasterResponses.default;
    
    Object.keys(disasterResponses).forEach(key => {
      if (key !== "default" && lowerInput.includes(key)) {
        response = disasterResponses[key];
      }
    });
    
   
    setTimeout(() => {
      setMessages(prev => [...prev, { text: response, sender: "bot" }]);
    }, 500);
    
    setInput("");
  };

  return (
    <div className={`chatbot-container ${isOpen ? "open" : ""}`}>
      <div className="chatbot-header" onClick={() => setIsOpen(!isOpen)}>
        <span>Disaster Assistant</span>
        <div className="chatbot-toggle">
          {isOpen ? "▼" : "▲"}
        </div>
      </div>
      
      {isOpen && (
        <>
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Describe your emergency..."
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <button  smooth="true" onClick={handleSend}>Send</button>
          </div>
        </>
      )}
    </div>
  );
};


const Header = () => {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [AccidentImage, ForestImage, FloodImage, EarthquakeImage];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main">
    
      <Chatbot />
      
      <div className="slider">
        <img src={images[currentImage]} alt="slider" className="slider-image" />
      </div>

      <div className="container">
        <div className="text-content">
          <p className="amazing-trips"></p>
          <h1 className="main-title">
            <span className="title-big">DISASTER RELIEF</span> 
            <span className="title-big">SYSTEM</span>
          </h1>
          <p className="description">
            Disaster Relief System <br />
            Swift Aid, Smart Management.
          </p>

          <p className="paraEmer">If you need urgent medical supplies, place an emergency order now!</p>
          <button  smooth="true" className="hover-button" onClick={() => navigate("/emergency")}>
            <span>Emergency</span>
            <div className="arrow">&#8594;</div>
          </button> 
        </div>
      </div>
    </div>
  );
};

export default Header;