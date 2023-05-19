import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./HealthDimensions.css";


const HealthDimensions = ({ handleChange , font}) => {
  return (
    <div className="dimensions">
      <button style={{fontFamily:'Jost'}} id="physical-btn" className="btn physical-btn" onClick={() => {handleChange("Physical")}}>Physical</button>
      <button style={{fontFamily:'Jost'}} id="emotional-btn" className="btn emotional-btn" onClick={() => {handleChange("Emotional")}}>Emotional</button>
      <button style={{fontFamily:'Jost'}} id="intellectual-btn" className="btn intellectual-btn" onClick={() => {handleChange("Intellectual")}}>Intellectual</button>
      <button style={{fontFamily:'Jost'}} id="spiritual-btn" className="btn spiritual-btn" onClick={() => {handleChange("Spiritual")}}>Spiritual</button>
      <button style={{fontFamily:'Jost'}} id="social-btn" className="btn social-btn" onClick={() => {handleChange("Social")}}>Social</button>
    </div>
  );
};

export default HealthDimensions;