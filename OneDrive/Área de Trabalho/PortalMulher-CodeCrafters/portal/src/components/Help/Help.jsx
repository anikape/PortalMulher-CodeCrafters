import React from "react";
import style from "./help.module.css";
import sos from "../../assets/sos.png";

const Help = () => {
  return (
    <div className={style.help}>
      <h2>Precisa de ajuda?</h2>
      <div className={style.alert}>
        <img className={style.sos} src={sos} alt="Ícone de Alerta" />
        <p>Aperte no serviço para ligar imediatamente!</p>
      </div>
      <div className={style.numbersDiv}>
        <a className={style.numbers} href="tel:180">180</a>
        <p className={style.numberSpam}>Central de atendimento à mulher</p>
      </div>
      <div className={style.numbersDiv}>
        <a className={style.numbers} href="tel:190">190</a>
        <p className={style.numberSpam}>
          Central de Operações da Polícia Militar
        </p>
      </div>
      <div className={style.numbersDiv}>
        <a className={style.numbers} href="tel:181">181</a>
        <p className={style.numberSpam}>
          Central de Operações da Polícia Civil
        </p>
      </div>
    </div>
  );
};

export default Help;
