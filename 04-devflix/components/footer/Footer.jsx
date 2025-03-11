import styles from "./footer.module.css";

const Footer = (footer) => {
  return <p className={styles.footer}>Feito com ❤️ por {footer.DevName}</p>;
};

export default Footer;
