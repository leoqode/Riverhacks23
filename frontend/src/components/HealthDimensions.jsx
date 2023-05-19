import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const HealthDimensions = () => {
  return (
    <div className="d-inline">
      <button id="physical-btn" className="btn btn-primary mr-2">Physical</button>
      <button id="emotional-btn" className="btn btn-primary mr-2">Emotional</button>
      <button id="intellectual-btn" className="btn btn-primary mr-2">Intellectual</button>
      <button id="spiritual-btn" className="btn btn-primary mr-2">Spiritual</button>
      <button id="social-btn" className="btn btn-primary">Social</button>
    </div>
  );
};

export default HealthDimensions;