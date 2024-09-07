import React from 'react'
import style from "./footer.module.css"


const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className={style.footerContainer}>
      <p className={style.footerText}>© Copyright Portal Mulher PE - {currentYear}</p>
    </div>
  )
}

export default Footer