// src/components/Social.js
import React from "react";
import style from "./socials.module.css";
import insta from "../../assets/insta.png";
import linkedin from "../../assets/linkedin.png";
import email from "../../assets/email.png";
import git from "../../assets/git.png";

const Social = () => {
  return (
    <div className={style.socialContainer}>
      <img src={insta} alt="Instagram" className={style.socialicon} />
      <img src={git} alt="Facebook" className={style.socialicon} />
      <img src={linkedin} alt="LinkedIn" className={style.socialicon} />
      <img src={email} alt="Email" className={style.socialicon} />
    </div>
  );
};

export default Social;
