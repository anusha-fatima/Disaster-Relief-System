import React from 'react'
import "../Style/Precautions.css";
import { useInView } from 'react-intersection-observer';
import CardEarthquake from "../assets/Images/CardEarthquake.png";
import CardFire from "../assets/Images/CardFire.png";
import CardFlood from "../assets/Images/CardFlood.png"
import CardAccident from "../assets/Images/CardAccident.png"

function Precautions() {
  const { ref, inView } = useInView({
    // triggerOnce: false,
    // threshold: 0.2, 
  });

  return (
    <div ref={ref} className={`precautions ${inView ? 'fade-in' : ''}`}>
     
      <h1>Disaster Preparedness and Precautions</h1>
      <p>Stay safe, stay prepared. Know what to do before, during, and after a disaster.</p>
      <div className="precautions-cards">
        <div className="precaution-card1">
        <img src={CardEarthquake} alt="" />
          <div className="card-body1">
          <h2 className='title1'>Earthquake</h2>
          
          <p className='subPara1'> <li>Secure heavy items like shelves and electronics to walls.</li> <br/>
           <li>Identify safe spots like under sturdy furniture or against interior walls.</li>
          <li> Drop, Cover, and Hold On under sturdy furniture.</li>
           <li> Stay indoors until shaking stops, and stay away from windows.</li> 
           </p>
      
          <button className='cardBtn1' onClick={() => window.open('https://www.shakeout.org/dropcoverholdon/', '_blank')}>Read More</button>
          </div>
        </div>

        <div className="precaution-card2">
        <img src={CardFire} alt="" />
          <div className="card-body2">
          <h2 className='title1'>Fire</h2>
          <li>Install smoke alarms on every level and test them monthly.</li>
          <li>Know two escape routes from each room and practice fire drills.</li>
          <li>Stay low to avoid smoke, cover your nose and mouth.</li>
          <li>If clothes catch fire, Stop, Drop, and Roll until the flames are out.</li>
          <p className='subPara2'></p>
      
          <button className='cardBtn2' onClick={() => window.open('https://www.healthyworkinglives.scot/workplace-guidance/safety/fire/fire-safety-precautions/', '_blank')}>Read More</button>
          </div>
        </div>


        <div className="precaution-card3">
        <img src={CardFlood} alt="" />
          <div className="card-body3">
          <h2 className='title3'>Flood</h2>
          
          <p className='subPara3'>
            <li>Know your area's flood risk and evacuation routes. </li>
            <li>Move to higher ground and avoid walking or driving through floodwaters. </li>
            <li>Turn off utilities like electricity and gas if instructed. </li>
            <li>Inspect your home for structural damage and report it.</li>
          </p>
          <button className='cardBtn3' onClick={() => window.open('https://www.ready.gov/floods', '_blank')}>Read More</button>
          </div>
        </div>

        <div className="precaution-card4">
        <img src={CardAccident} alt="" />
          <div className="card-body4">
          <h2 className='title4'>Accident</h2>
          
          <p className='subPara4'>
            <li>Wear seatbelts and ensure children are in appropriate car seats </li>
            <li>Avoid distractions like phone use while driving.</li>
            <li>Keep your vehicle well-maintained, with regular checks on brakes and tires. </li>
            <li>Seek medical attention, even if injuries are not apparent.  </li>
          </p>
          <button className='cardBtn4' onClick={() => window.open('https://www.sciencedirect.com/topics/earth-and-planetary-sciences/accident-prevention', '_blank')}>Read More</button>
          </div>
        </div>
        
      </div>
    </div>
   
  )
}

export default Precautions;