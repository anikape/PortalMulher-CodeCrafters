import style from "./box.module.css";

export const Box = ({ children }) => {
  return (
    <div className={style.box}>
      <div>{children}</div>
    </div>
  );
};
