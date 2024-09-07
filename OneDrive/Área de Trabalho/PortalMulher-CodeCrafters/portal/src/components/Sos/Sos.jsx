import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import sos2 from '../../assets/sos2.png';
import style from './sos.module.css';

const Sos = () => {
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
        buttonRef.current.style.bottom = `${Math.max(
          20,
          footerTop - buttonHeight,
        )}px`;
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
    <div>
      <Link
        to="#"
        onClick={handleClick}
        className={style.fixedButton}
        ref={buttonRef}
      >
        <img src={sos2} alt="Botão para Ligar para emergência 190" />
      </Link>
    </div>
  );
};

export default Sos;
