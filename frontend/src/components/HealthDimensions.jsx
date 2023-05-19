import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./HealthDimensions.css";


const HealthDimensions = () => {
  return (
    <div className="d-inline">
      <button id="physical-btn" className="btn physical-btn">Physical</button>
      <button id="emotional-btn" className="btn emotional-btn">Emotional</button>
      <button id="intellectual-btn" className="btn intellectual-btn">Intellectual</button>
      <button id="spiritual-btn" className="btn spiritual-btn">Spiritual</button>
      <button id="social-btn" className="btn social-btn">Social</button>
    </div>
  );
};

export default HealthDimensions;