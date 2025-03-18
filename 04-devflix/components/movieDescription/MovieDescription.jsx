import styles from "./MovieDescription.module.css";
import { useEffect, useState } from "react";

const MovieDescription = (props) => {
  const [movieDesc, setMovieDesc] = useState([]);

  useEffect(() => {
    fetch(`${props.apiUrl}&i=${props.movieId}`)
      .then((response) => response.json())
      .then((data) => setMovieDesc(data))
      .catch((error) => console.log(error));
    }, []);
 
console.log(movieDesc);
  return (
<div className={styles.modalBackdrop} onClick={props.click}>
<div className={styles.movieModal} onClick={(e) => e.stopPropagation()}>
  <div className={styles.movieInfo}>
    <img src={movieDesc.Poster} alt=''></img>
    <button onClick={props.click} className={styles.btnClose}>X</button>
    </div>
  </div>
</div>


  );

};

export default MovieDescription;
