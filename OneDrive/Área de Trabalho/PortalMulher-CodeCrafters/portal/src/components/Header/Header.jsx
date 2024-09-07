import React from 'react'
import HamburgerMenu from '../Hamburger/Hamburger'
import logo2 from '../../assets/logo2.png'
import style from './header.module.css'
import heart from '../../assets/heart.svg';

const Header = () => {
  return (
    <div>

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
            src={logo2}
            alt="Logomarca do Portal da Mulher"
          />

       

         </div>
      </header>
    </div>
  )
}

export default Header