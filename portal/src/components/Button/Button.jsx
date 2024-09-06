// src/components/CustomLink.js
import React from 'react';
import { Link } from 'react-router-dom';
import style from "./button.module.css";

const CustomLink = ({ imgSrc, text, to }) => {
  return (
    <Link to={to} className={style.customButton}>
      <img src={imgSrc} alt={text} className={style.buttonImage} />
      <span className={style.buttonText}>{text}</span>
    </Link>
  );
};

export default CustomLink;
