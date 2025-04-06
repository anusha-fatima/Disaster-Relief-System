import React from 'react'
import { useNavigate } from "react-router-dom";
import "../Style/Slider.css";

const Slider = () => {
    const navigate = useNavigate();
  return (
    <section className="slider-section">
        <div className="slider-container">
            <div className="title">
                <h1>EMERGENCY</h1>
                <p>Emergency Ambulance Dial at your fingertips  <br />
                    <button className='video-btn'  onClick={() => navigate("/help_line")}>Dial</button>
                </p>
            </div>
            <div className="ambulance">
                <div className="light-bar">
                    <div className="light left"></div>
                    <div className="light right"></div>
                </div>
                <div className="wheel front"></div>
                <div className="wheel back"></div>
            </div>
        </div>
    </section>
  )
}

export default Slider