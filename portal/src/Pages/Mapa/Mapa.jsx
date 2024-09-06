import React, { useState, useEffect } from 'react';
import style from "./mapa.module.css";
import HamburgerMenu from '../../components/Hamburger/Hamburger';
import MapWithDirections from '../../components/MapWithDirections';  // Importando o componente de mapa

const Mapa = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (error) => {
          console.error("Error getting geolocation: ", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className={style.mapContainer}>
      <header className={style.headerContainer}>
        <HamburgerMenu />
        <h1 className={style.headerH1}>Mapa de Serviços</h1>
      </header>

      <div className={style.iframeMap}>
        {/* Inserindo o componente de mapa no final do conteúdo principal */}
        <section className={style.mapSection}>
          <h2>Encontre serviços próximos de você</h2>
          <div className={style.mapContainer}>
            <MapWithDirections googleMapsApiKey="AIzaSyBMl7bq8pTI4GTAdSravW10cJGMi_fJEyA" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Mapa;
