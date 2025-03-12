import styles from './trabalhoImagens.module.css'

const TrabalhoImagens = () => {
  return (
    <>
    <h1 className={styles.tituloTrabalho}>Fotos Do meu Trabalho</h1>

    <div className={styles.trabalhoImagens}>
<h1>Fotos do meu trabalho</h1>
<img src='https://placehold.co/250x350'></img>
<img  src='https://placehold.co/250x350'></img>
<img src='https://placehold.co/250x350'></img>


    </div>
    </>
  ) 
}

export default TrabalhoImagens