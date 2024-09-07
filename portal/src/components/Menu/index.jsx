import style from "./menu.module.css";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <nav className={style.menu}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Serviços</Link>
        </li>
        <li>
          <Link to="/Mapa">Mapa</Link>
        </li>
        <li>
          <Link to="/about">Sobre Nós</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
      </ul>
    </nav>
  );
};
