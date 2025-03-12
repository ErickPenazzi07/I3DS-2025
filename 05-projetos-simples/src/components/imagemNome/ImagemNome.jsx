import styles from "./ImagemNome.module.css";

const imagemNome = () => {
  return (
    <div className={styles.imagemNome}>
      <div className={styles.fotoPerfil}>
        <img src="https://placehold.co/450x650"></img>
      </div>

      <div>
        <h1 className={styles.sobremimTitulo}>
          Olá pode me chamar de Deverick
        </h1>
        <h3 className={styles.sobremim}>
          Olá sou estudante de Desenvolvimento de Sistema no Senai, conheça um
          pouco sobre mim nesse site.
        </h3>
      </div>
    </div>
  );
};

export default imagemNome;
