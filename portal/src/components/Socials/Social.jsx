// src/components/Social.js
import React from 'react';
import style from "./socials.module.css"
import insta from '../../assets/insta.png';
import face from '../../assets/facebook.png';
import linkedin from '../../assets/linkedin.png';
import email from '../../assets/email.png';


const Social = () => {
  return (
    <div className={style.socialContainer}>
      <img src={insta} alt="Instagram" className="social-icon" />
      <img src={face} alt="Facebook" className="social-icon" />
      <img src={linkedin} alt="LinkedIn" className="social-icon" />
      <img src={email} alt="Email" className="social-icon" />
    </div>
  );
};

export default Social;
