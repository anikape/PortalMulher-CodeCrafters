import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './hamburguer.module.css';
import hambuguer from "../../assets/hamburguer.png";
import female from '../../assets/female.png';
import mapa from '../../assets/mapa.svg';
import fone from '../../assets/fone.png';
import user from '../../assets/user.png';
import home from '../../assets/home.png';
import adress from "../../assets/Address.png"

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.hamburgerMenu}>
      <div className={style.icon} onClick={toggleMenu}>
        <span>
          <img src={hambuguer} alt="Ícone do Menu Hamburguer" />
        </span>
      </div>

      <nav className={`${style.menu} ${isOpen ? style.open : ''}`}>
        <ul>
          <li>
            <Link to="/">
              <img src={home} alt="Home" className={style.iconImage} />
              Home
            </Link>
          </li> 
          <li>
            <Link to="/Servicos">
              <img src={female} alt="Serviços" className={style.iconImage} />
              Serviços
            </Link>
          </li> 
          <li>
            <Link to="/Mapa">
              <img src={adress} alt="Mapa" className={style.iconImage} />
              Mapa
            </Link>
          </li>
          <li>
            <Link to="/sobre">
              <img src={user} alt="Sobre Nós" className={style.iconImage} />
              Sobre Nós
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <img src={fone} alt="Contato" className={style.iconImage} />
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
