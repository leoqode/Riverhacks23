import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./HealthDimensions.css";


const HealthDimensions = ({ handleChange }) => {
  return (
    <div className="dimensions">
      <button id="physical-btn" className="btn physical-btn" onClick={() => {handleChange("Physical")}}>Physical</button>
      <button id="emotional-btn" className="btn emotional-btn" onClick={() => {handleChange("Emotional")}}>Emotional</button>
      <button id="intellectual-btn" className="btn intellectual-btn" onClick={() => {handleChange("Intellectual")}}>Intellectual</button>
      <button id="spiritual-btn" className="btn spiritual-btn" onClick={() => {handleChange("Spiritual")}}>Spiritual</button>
      <button id="social-btn" className="btn social-btn" onClick={() => {handleChange("Social")}}>Social</button>
    </div>
  );
};

export default HealthDimensions;