import React, { useState } from "react";
import "../Style/HelpLine.css";
import AmbulanceImage from "../assets/Images/AmbulanceImage.png";

const helplineData = [
  {
    city: "Karachi",
    services: {
      "Police Emergency": "15",
      "Fire Brigade": "16",
      "Edhi Ambulance Service": "115",
      "Chhipa Ambulance Service": "1020",
      "Aman Ambulance Service": "1021",
      "Rescue Services": "1122",
    },
  },
  {
    city: "Lahore",
    services: {
      "Police Emergency": "15",
      "Fire Brigade": "16",
      "Edhi Ambulance Service": "115",
      "Rescue Services": "1122",
      "Punjab Police Helpline": "1787",
      "Counter Terrorism Department (CTD)": "0800-111-11",
    },
  },
  {
    city: "Islamabad",
    services: {
      "Police Emergency": "15",
      "Fire Brigade": "16",
      "Rescue Services": "1122",
      "Edhi Ambulance Service": "115",
      "Pakistan Institute of Medical Sciences (PIMS) Hospital": "051-9261170",
      "Polyclinic Hospital": "051-9214965",
    },
  },
  {
    city: "Toba Taik Singh",
    services: {
      "Police Emergency": "15",
      "Fire Brigade": "16",
      "Rescue Services": "1122",
      "Edhi Ambulance Service": "115",
    },
  },
  {
    city: "Chiniot",
    services: {
      "Police Emergency": "15",
      "Fire Brigade": "16",
    },
  },
  
];

const nationalHelplines = {
  "Pakistan Emergency Helpline (PEHL)": "911",
  "Police Emergency": "15",
  "Rescue Services": "1122",
  "Fire Brigade": "16",
  "Edhi Ambulance Service": "115",
  "Chhipa Ambulance Service": "1020",
  "Aman Ambulance Service": "1021",
  "Anti-Narcotics Force (ANF) Helpline": "1415",
  "Child Protection Bureau Helpline": "1121",
  "National Highway and Motorway Police": "130",
  "Rangers Helpline": "1101",
};

const HelpLine = () => {
  const helplines = [
    { name: "Edhi Ambulance Helpline", number: "115" },
    { name: "Chhipa Ambulance Helpline", number: "1020" },
    { name: "Rescue Helpline", number: "1122" },
    { name: "Police Madadgar Helpline", number: "15" },
    { name: "Rangers Helpline", number: "1101" },
    { name: "Pakistan Medical Assistance Helpline", number: "1166" },
    { name: "Aman Ambulance Helpline", number: "1021" },
    { name: "Fire Brigade Helpline", number: "16" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredHelplines, setFilteredHelplines] = useState(null);

  const handleSearch = () => {
    const result = helplineData.find(
      (item) => item.city.toLowerCase() === searchTerm.toLowerCase()
    );
    setFilteredHelplines(result ? result.services : nationalHelplines);
  };

  return (
    <div className="helpline-container">
      <div className="helpline-box">
        <div className="helpline-content">
          <h1 className="helpline-title">
            All You Need to Know About Emergency Services in Pakistan
          </h1>
          <p className="helpline-description">
            Providing urgent medical response for treating injuries and
            illnesses, as well as rescuing people, the emergency services in
            Pakistan work 24/7 to help people in need. These services are run by
            both public and private sectors and usually have 3-4 digit helpline
            codes so that it would be easier for the general public to call them
            up for help in an emergency situation. So, if you don’t know exactly
            which emergency services operate in Pakistan and how to get in touch
            with them, we’re here to help. In this blog, we’ll discuss
            everything you need to know about different types of emergency
            services in Pakistan.
          </p>
          <div className="helpline-buttons">
            <button
              className="video-btn"
              onClick={() =>
                window.open(
                  "https://www.zameen.com/blog/emergency-services-pakistan-contact-helplines.html",
                  "_blank"
                )
              }
            >
              Read More, Stay Safe
            </button>
          </div>
        </div>
      </div>

      <div className="helpline-search-container">
        <div className="helpline-seacrh-content">
          <h2 className="helpline-search-title">
            Find Emergency Helplines Across Pakistan
          </h2>
          <p className="search-paragrapgh">
            Access essential emergency helpline numbers for cities across
            Pakistan. Whether you need assistance from the police, fire brigade,
            ambulance services, or other emergency resources, find the right
            contact quickly based on your location. Stay prepared and informed
            to ensure safety and support in any situation
          </p>
          <div className="helpline-search">
            <input
              type="text"
              placeholder="Enter city name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-bar"
            />
            <button onClick={handleSearch} className="search-btn">
              <span class="material-symbols-outlined">search</span>
            </button>
          </div>
          <div className="helpline-results">
  <h3>Helpline Numbers:</h3>
  {filteredHelplines ? (
    <div className="helpline-grid">
      {Object.entries(filteredHelplines).map(([service, number]) => (
        <div key={service} className="helpline-item">
          <div className="helpline-service">{service}</div>
          <div className="helpline-search-number">{number}</div>
        </div>
      ))}
    </div>
  ) : (
    <p>Type a city name to see helplines</p>
  )}
</div>
        </div>
      </div>

      <div className="table-container">
        <div className="helpline-table-container">
          <table className="helpline-table">
            <h1 className="helpline-table-title">
              Emergency Helplines in Pakistan
            </h1>
            <tbody>
              {helplines.map((helpline, index) => (
                <tr key={index} className="helpline-row">
                  <td className="helpline-name">{helpline.name} :</td>
                  <td className="helpline-number">{helpline.number}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="helpline-image-container">
          <img src={AmbulanceImage} alt="Promo" className="helpline-image" />
        </div>
        <div className="helpPara">
          <h1 className="helpline-title">
            Essential Role of Helpline Numbers in Public Safety and Support
          </h1>
          <p className="helpline-description">
            Helpline numbers play a crucial role in ensuring public safety and
            well-being within a country. They provide quick access to emergency
            services, such as medical assistance, fire services, police, and
            disaster response, enabling citizens to get immediate help in
            critical situations. By offering direct lines of communication,
            helplines help save lives, prevent harm, and provide reassurance
            during times of crisis. Additionally, they support mental health
            services, counseling, and social support, making them essential
            tools for addressing not only physical emergencies but also
            emotional and psychological needs. Overall, helpline numbers are a
            lifeline, fostering a safer and more responsive community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpLine;
