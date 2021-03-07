import React from "react";

export default function SocialLink({ url, icon, iconAltText }) {
  return (
    <a href={url}>
      <img src={icon} alt={iconAltText} />
    </a>
  );
}
