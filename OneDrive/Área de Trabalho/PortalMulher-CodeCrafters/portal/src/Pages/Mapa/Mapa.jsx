import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import style from "./mapa.module.css";
import HamburgerMenu from "../../components/Hamburger/Hamburger";
import MapWithDirections from "../../components/MapWithDirections"; // Importando o componente de mapa
import sos2 from "../../assets/sos2.png";
import heart from "../../assets/heart.svg";
import servico from "../../assets/servico.svg";
import mapa from "../../assets/mapa.svg";
import Footer from "../../components/Footer/Footer";
import CustomButton from "../../components/Button/Button";
import local from "../../assets/local.svg";
import Sos from "../../components/Sos/Sos";
import Help from "../../components/Help/Help";

const Mapa = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
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
        <div className={style.menu}>
          <img
            className={style.coracao}
            src={heart}
            alt="Logomarca do Portal da Mulher"
          />
          <HamburgerMenu className={style.hamburgerMenu} />
        </div>

        <div className={style.headerContent}>
          <h1 className={style.h1}>
            Serviços Perto <br /> de você
          </h1>
        </div>
      </header>

      <div className={style.iframeMap}>
        {/* Inserindo o componente de mapa no final do conteúdo principal */}
        <section className={style.mapSection}>
          <div className={style.mapContainer}>
            <MapWithDirections googleMapsApiKey="AIzaSyBMl7bq8pTI4GTAdSravW10cJGMi_fJEyA" />
          </div>
        </section>
      </div>

      <div className={style.info}>
        <img
          className={style.imgLocal}
          src={local}
          alt="Ícone de um ponto de localização em mapas"
        />

        <p className={style.paragraph}>Tudo em um só lugar!</p>

        <p className={style.paragraph1}>
          Encontre os serviços mais próximos de você com facilidade! Use o mapa
          para localizar centros de apoio, saúde, assistência jurídica e outros
          serviços disponíveis para mulheres em Pernambuco.
        </p>
      </div>

      <Help />

      <Sos />

      <Footer />
    </div>
  );
};

export default Mapa;
