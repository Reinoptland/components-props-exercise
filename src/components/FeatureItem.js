import React from "react";

export default function FeatureItem({ icon, iconAltText, title, description }) {
  return (
    <div className="feature__item">
      <div className="feature__icon">
        <img src={icon} alt={iconAltText} />
      </div>
      <div className="feature__title">{title}</div>
      <div className="feature__description">{description}</div>
    </div>
  );
}
