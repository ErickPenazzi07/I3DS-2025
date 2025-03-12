import styles from "./movieCards.module.css";

const MovieCards = (movie) => {
  return (
    <div className={styles.movie}>
      <div>
        <p>{movie.Year}</p>
      </div>

      <img src={movie.Poster} alt="" />
      <span>{movie.Type}</span>
      <h3>{movie.Title}</h3>
    </div>
  );
};

export default MovieCards;
