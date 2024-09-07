import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import style from './home.module.css';
import HamburgerMenu from '../../components/Hamburger/Hamburger';
import CustomButton from '../../components/Button/Button';
import logo from '../../assets/logo.png';
import servico from '../../assets/servico.svg';
import mapa from '../../assets/mapa.svg';
import Footer from '../../components/Footer/Footer';
import Social from '../../components/Socials/Social';
import heart from '../../assets/heart.svg';
import capacita from '../../assets/capacitacao.png';
import servicoSocial from '../../assets/servicosocial.png';
import sos2 from '../../assets/sos2.png';
import sos from '../../assets/sos.png'
import Sos from '../../components/Sos/Sos';
import Help from '../../components/Help/Help';

const Home = () => {
 

  return (
    <div className={style.container}>
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
          <img
            className={style.logo}
            src={logo}
            alt="Logomarca do Portal da Mulher"
          />

          <h1 className={style.h1}>Bem-vinda</h1>

          <p className={style.paragraph}>Explore Conosco</p>

          <div className={style.buttons}>
            <CustomButton imgSrc={servico} text="Serviços" />
            <CustomButton imgSrc={mapa} text="Mapa" to="/Mapa" />
          </div>
        </div>
      </header>

      <main>
        <section className={style.find}>
          <h2 className={style.h2}>Aqui você encontra</h2>
          <Link to="/destino">
            <img src={capacita} alt="Logo" />
          </Link>

          <Link to="/destino">
            <img src={servicoSocial} alt="Logo" />
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

        <Help />

          <Sos />
        
      </main>

      <Footer />
    </div>
  );
};

export default Home;
