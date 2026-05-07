import React from "react";

const SlidingIcon = ({ defaultIcon, hoverIcon }) => {
  return (
    <div className="sliding-container">
      <div className="sliding-item">
        <img src={defaultIcon} className="footer-icon" />
      </div>
      <div className="sliding-item">
        <img src={hoverIcon} className="footer-icon" />
      </div>
    </div>
  );
};

export default SlidingIcon;
