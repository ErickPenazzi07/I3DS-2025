import styles from "./sobremim.module.css";

const sobremim = () => {
  return (
    <div id="sobremim">
      <h1 className={styles.titulo}>Sobre Mim</h1>
      <div className={styles.painel}>
        <div className={styles.cartao}>
          <h2>Moro em</h2>
          <h3>Interior de São Paulo, Jau</h3>
        </div>
        <div className={styles.cartao}>
          <h2>Estudo em</h2>
          <h3>Senai Jau e Sesi Jau</h3>
        </div>
        <div className={styles.cartao}>
          <h2>Trabalhei em</h2>
          <h3>
            DPG "Departamento de Gestão Pessoal" Jau Serve e Financeiro Jau
            Serve
          </h3>
        </div>
      </div>
    </div>
  );
};

export default sobremim;
