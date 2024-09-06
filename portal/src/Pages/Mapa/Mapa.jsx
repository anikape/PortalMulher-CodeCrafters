// src/Components/Map.js
import React from 'react';
import style from "./mapa.module.css"
import HamburgerMenu from '../../components/Hamburger/Hamburger';


const Mapa = () => {
  return (
    <div className={style.mapContainer}>

<header className={style.headerContainer}>
      <HamburgerMenu />

      <h1 className={style.headerH1}>Mapa de Serviços</h1>
      </header>

      <div className={style.iframeMap}>
      <iframe
  src="https://7p6dkh2d-5500.brs.devtunnels.ms/"
  width="100%"
  height="600px"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  title="Example"
></iframe>

</div>


      
    </div>
  );
};

export default Mapa;
