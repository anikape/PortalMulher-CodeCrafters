import React from 'react';
import style from './help.module.css';
import sos from '../../assets/sos.png';

const Help = () => {
  return (
    <div className={style.help}> {/* Adicionei a classe style.help */}
      <h2>Precisa de ajuda?</h2>
      <img className={style.sos} src={sos} alt="Ícone de Alerta" />

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
          Central de Operações
          <br />
          da Polícia Militar
        </span>
      </div>

      <div className={style.numbersDiv}>
        <p className={style.numbers}>181</p> {/* Corrigi o número duplicado para 181 */}
        <span className={style.numberSpam}>
          Central de Operações
          <br />
          da Polícia Civil
        </span>
      </div>
    </div>
  );
};

export default Help;
