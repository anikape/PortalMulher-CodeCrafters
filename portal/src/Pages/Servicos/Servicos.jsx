import React, { useState, useEffect, useRef } from 'react';
import style from './servicos.module.css';
import Header from '../../components/Header/Header';
import Sos from '../../components/Sos/Sos';
import Footer from '../../components/Footer/Footer';
import hands from '../../assets/hands.svg';
import Accordion from '../../components/Acordion/Acordion';
import Help from '../../components/Help/Help';

const Servicos = () => {
  return (
    <div className={style.container}>
      <Header />

      <main className={style.mainContent}>
        <div className={style.info}>
          <img
            className={style.imgLocal}
            src={hands}
            alt="Ícone de um ponto de localização em mapas"
          />

          <p className={style.paragraph}>Tudo em um só lugar!</p>

          <p className={style.paragraph1}>
            Acesso a informações essenciais sobre saúde, assistência jurídica,
            educação, segurança e muito mais. Navegue pela plataforma e encontre
            o suporte que você precisa de forma simples e acessível.
          </p>
        </div>

        <Accordion />

        <Help />

        <Sos />
      </main>

      <Footer />
    </div>
  );
};

export default Servicos;
