import React from "react";
export default function Article({ image, author, title, description }) {
  return (
    <a href="/" className="article__item">
      <div
        className="article__image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="article__text">
        <div className="article__author">By {author}</div>
        <div className="article__title">{title}</div>
        <div className="article__description">{description}</div>
      </div>
    </a>
  );
}
