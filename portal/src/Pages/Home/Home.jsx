import React from 'react';
import style from './home.module.css';
import HamburgerMenu from '../../components/Hamburger/Hamburger';
import CustomButton from '../../components/Button/Button';
import logo from '../../assets/logo.png';
import female from '../../assets/female.png';
import map from '../../assets/map.png';
import fone from '../../assets/fone.png';
import Footer from '../../components/Footer/Footer';
import Social from '../../components/Socials/Social';

const Home = () => {
  return (
    <div className={style.container}>
      <header className={style.headerContainer}>
        <HamburgerMenu />
        <div className={style.headerContent}>
          <img src={logo} alt="Logomarca do Portal da Mulher" />

          <div className={style.buttons}>
            <CustomButton imgSrc={female} text="Serviços" />
            <CustomButton imgSrc={map} text="Mapa" to="/Mapa"  />
            <CustomButton imgSrc={fone} text="Contato" />
          </div>
        </div>
      </header>

      <main>
        <section className={style.mainContent}>
          <h1 className={style.h1}>Precisa de ajuda?</h1>

          <p className={style.paragraph}>
            Central de atendimento á mulher Ligue 180 ou{' '}
            <a className={style.ligacao} href="tel:+55180180">
              Clique Aqui
            </a>
          </p>

          <p className={style.paragraph}>
            Centro de Operações da Polícia Militar Ligue 190 ou{' '}
            <a className={style.ligacao} href="tel:+55190190">
              Clique Aqui
            </a>
          </p>

          <p className={style.paragraph}>
          Centro de Operações da Polícia Civil
          Ligue 197{' '}
            <a className={style.ligacao} href="tel:+55197197">
              Clique Aqui
            </a>
          </p>

        <div className={style.socio} >
          <Social />
          </div>
          
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
