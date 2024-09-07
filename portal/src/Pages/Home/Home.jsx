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

const Home = () => {
  const [isButtonFixed, setIsButtonFixed] = useState(true);
  const footerRef = useRef(null);
  const buttonRef = useRef(null);

  const handleScroll = () => {
    if (footerRef.current && buttonRef.current) {
      const footerTop = footerRef.current.getBoundingClientRect().top;
      const buttonHeight = buttonRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Se o footer está acima da janela de visualização
      if (footerTop < windowHeight) {
        setIsButtonFixed(true);
        buttonRef.current.style.bottom = `${Math.max(20, footerTop - buttonHeight)}px`;
      } else {
        setIsButtonFixed(false);
        buttonRef.current.style.bottom = '20px'; // Valor padrão quando o footer não está visível
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Para definir a posição inicial

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.location.href = 'tel:190'; // Faz a chamada quando o link é clicado
  };

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

        <div className={style.help}>
          <h2>Precisa de ajuda?</h2>
          <div className={style.numbersDiv}>
            <p className={style.numbers}>180</p>
            <span className={style.numberSpam}>
              Central de
              <br />
              atendimento à mulher
            </span>
          </div>
          <div className={style.numbersDiv}>
            <p className={style.numbers}>190</p>
            <span className={style.numberSpam}>
              Central de            
              Operações <br /> da Polícia Militar
            </span>
          </div>

          <div className={style.numbersDiv}>
            <p className={style.numbers}>180</p>
            <span className={style.numberSpam}>
              Central de
             
              Operações <br /> da Polícia Civil
            </span>
          </div>

          <Link to="#" onClick={handleClick} className={style.fixedButton} ref={buttonRef}>
            <img src={sos2} alt="Ligar para emergência" />
          </Link>
        </div>
      </main>

      <Footer ref={footerRef} />
    </div>
  );
};

export default Home;
