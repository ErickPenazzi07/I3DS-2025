import styles from "./footer.module.css";

const Footer = (footer) => {
  return <footer className={styles.footer}>Feito com ❤️ por {footer.DevName}</footer>;
};

export default Footer;
