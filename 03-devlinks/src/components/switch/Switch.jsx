import styles from "./Switch.module.css";

const Switch = ({troca, islight}) => {
  return (
    <div className={islight ? styles.light : undefined}>
    <div onClick={troca} id={styles.switch}>
      <button></button>
      <span></span>
    </div>
    </div>
  );
};

export default Switch;
