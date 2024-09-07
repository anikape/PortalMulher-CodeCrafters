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
        <p className={style.numbers}>180</p>
        <p className={style.numberSpam}>Central de atendimento à mulher</p>
      </div>
      <div className={style.numbersDiv}>
        <p className={style.numbers}>190</p>
        <p className={style.numberSpam}>
          Central de Operações da Polícia Militar
        </p>
      </div>
      <div className={style.numbersDiv}>
        <p className={style.numbers}>181</p>

        <p className={style.numberSpam}>
          Central de Operações da Polícia Civil
        </p>
      </div>
    </div>
  );
};

export default Help;
