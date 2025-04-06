import { useNavigate } from "react-router-dom";
import "../Style/ComplainPage.css";

function Services() {
  const navigate = useNavigate();

  return (
    <div className="services-container">
      <h1 className="serviceHead">Services</h1>
      <div className="services-list">
        <div className="service-item">
          <h2>Your Lifeline in Emergencies</h2>
          <p>When disaster strikes—be it a road accident, earthquake, flood, or fire—we’ve got you covered.
          Our emergency services ensure you get what you need, when you need it most.</p>
          <h3>Order Medicine</h3>
          <p>Get essential medicines delivered quickly, with clear instructions on how and when to use them.</p>
          <h3>First Aid Kits</h3>
          <p>Equip yourself with fully stocked first aid kits for any situation.</p>
          <h3>24/7 Support</h3>
          <p> We’re here to help, no matter the time or place.</p>
          <h1>Act Fast. Stay Safe.</h1>
          <button className="emergency-button" onClick={() => navigate("/emergency")}>Emergency</button> 
          <p className="btnpara">Go to Emergency Page</p>
        </div>
      </div>
    </div>
  );
}

export default Services;