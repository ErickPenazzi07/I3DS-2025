import { useState } from "react";
import Footer from "../components/footer/Footer";
import MovieCards from "../components/MovieCards";
import "./App.css";

const App = () =>
{
  const [search, setSearch] = useState("")
  const [movies, setMovies] = useState([])

  //Utilizando chave de API do arquivo 
  const apiKey = import.meta.env.
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`

      return (
        <div id="app">
          <img className="logo" src={"https://placehold.co/200x200"} alt="logo" />
    
          <div className="search">
            <input type="text" placeholder="Pesquise por filmes..." />
            <img src={"https://placehold.co/20x20"} alt="Pesquisar" />
          </div>
    
        {movies.map((movie,index)=> (
          <MovieCards key={index} {...movie} />
        )
        )}

      <Footer DevName={"DevErick"} />
    </div>
  );
}
export default App;