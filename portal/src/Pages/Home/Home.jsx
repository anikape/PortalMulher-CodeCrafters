import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import style from "./home.module.css";
import HamburgerMenu from "../../components/Hamburger/Hamburger";
import CustomButton from "../../components/Button/Button";
import logo from "../../assets/logo.svg";
import servico from "../../assets/servico.svg";
import mapa from "../../assets/mapa.svg";
import Footer from "../../components/Footer/Footer";
import Social from "../../components/Socials/Social";
import heart from "../../assets/heart.svg";
import capacita from "../../assets/capacitacao.png";
import servicoSocial from "../../assets/servicosocial.png";
import sos2 from "../../assets/sos2.png";
import sos from "../../assets/sos.png";
import Sos from "../../components/Sos/Sos";
import Help from "../../components/Help/Help";
import { Menu } from "../../components/Menu";
import { Box } from "../../components/Box";
import linkedin from "../../assets/linkedin.png";
import insta from "../../assets/insta.png";
import git from "../../assets/git.png";
import email from "../../assets/email.png";
import servicos from "../../assets/logo2.png";
import Accordion from "../../components/Acordion/Acordion";
import hug from "../../assets/hug.svg";
import MapWithDirections from "../../components/MapWithDirections"; // Importando o

const Home = () => {
  return (
    <>
      <header className={style.header}>
        <div className={style.container}>
          <div className={style.navbar}>
            <img
              className={style.coracao}
              src={heart}
              alt="Logomarca do Portal da Mulher"
            />
            <Menu />
            <HamburgerMenu className={style.hamburgerMenu} />
          </div>
          <div className={style.headerContent}>
            <div>
              <img
                className={style.logo}
                src={logo}
                alt="Logomarca do Portal da Mulher"
              />
            </div>
            <div className={style.callToAction}>
              <h1 className={style.h1}>Bem-vinda</h1>
              <p className={style.paragraph}>Explore serviços perto de você</p>
              <div className={style.buttons}>
                <CustomButton imgSrc={servico} text="Serviços" />
                <CustomButton imgSrc={mapa} text="Mapa" to="/Mapa" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={style.redesCard}>
        <div className={style.redesContent}>
          <div className={style.redesHeader}>
            <img src={heart} />
            <h1 className={style.redesTitle}>Tudo em um só lugar!</h1>
            <p className={style.redesParagraph}>
              Uma iniciativa da CodeCrafters criada para centralizar serviços
              disponíveis para as mulheres em Pernambuco. Aqui, você encontra
              saúde, assistência jurídica, educação e muito mais.
            </p>
          </div>
          <div className={style.redesFooter}>
            <h2 className={style.redesH2}>Nossas Redes</h2>
            <div className={style.redesIcons}>
              <img src={linkedin} alt="linkedin link" />
              <img src={insta} alt="instagram link" />
              <img src={git} alt="github link" />
              <img src={email} alt="email link" />
            </div>
          </div>
        </div>
      </div>

      <section className={style.sectionBox}>
        <div className={style.boxContent}>
          <img src={servicos} />
          <div className={style.boxContentText}>
            <h2>Nossos Serviços</h2>
            <p>
              Acesso a informações essenciais sobre saúde, assistência jurídica,
              educação, segurança e muito mais. Navegue pela plataforma e
              encontre o suporte que você precisa de forma simples e acessível.
            </p>
          </div>
        </div>
        <Box>
          <Accordion />
        </Box>
      </section>

      <section className={style.sectionBox}>
        <div className={style.invert}>
          <img src={hug} />
          <div className={style.boxContentText}>
            <h2>Mapa Interativo</h2>
            <p>
              Encontre os serviços mais próximos de você com facilidade! Use o
              mapa para localizar centros de apoio, saúde, assistência jurídica
              e outros serviços disponíveis para mulheres em Pernambuco.
            </p>
          </div>
        </div>
        <Box>
          <div className={style.iframeMap}>
            {/* Inserindo o componente de mapa no final do conteúdo principal */}
            <section className={style.mapSection}>
              <div className={style.mapContainer}>
                <MapWithDirections googleMapsApiKey="AIzaSyBMl7bq8pTI4GTAdSravW10cJGMi_fJEyA" />
              </div>
            </section>
          </div>
        </Box>
      </section>

      <main className={style.mainServices}>
        <section className={style.find}>
          <h2 className={style.h2}>Aqui você encontra</h2>
          <Link to="/destino">
            <img src={capacita} alt="Informações sobre capacitação" />
          </Link>

          <Link to="/destino">
            <img src={servicoSocial} alt="Informações sobre serviço social" />
          </Link>
        </section>

        <section className={style.mainContent}>
          <img className={style.heart} src={heart} alt="Imagem de um coração" />

          <p className={style.paragraph}>Tudo em um só lugar!</p>

          <p className={style.paragraph1}>
            Uma iniciativa da CodeCrafters criada para centralizar serviços
            disponíveis para as mulheres em Pernambuco. Aqui, você encontra
            saúde, assistência jurídica, educação e muito mais.
          </p>
        </section>

        <div className={style.socio}>
          <Social />
        </div>
      </main>
      <div className={style.helpContent}>
        <Help />
        <Sos />
      </div>

      <Footer />
    </>
  );
};

export default Home;
