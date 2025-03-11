import { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import MovieCards from "../components/MovieCards";
import "./App.css";

const App = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  //Utilizando chave de API do arquivo
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  useEffect(() => {
    searchMovies("Spider");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    //alimentando o movies
    setMovies(data.Search);
  };

  const handleKeyPress = (e) => {
    e.key === "Enter" && searchMovies(search);
  };
  return (
    <div id="app">
      <img className="logo" src={"https://placehold.co/200x200"} alt="logo" />

      <div className="search">
        <input
          onKeyDown={handleKeyPress}
          type="text"
          placeholder="Pesquise por filmes..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <img onClick={() => searchMovies(search)} src={"https://placehold.co/20x20"} alt="Pesquisar" />
      </div>

    {movies?.length > 0 ? (
      <div className="container">
      {movies.map((movie, index) => (
        <MovieCards key={index} {...movie} />
      ))}
      </div>
    ) : (
      <h2 className="empty"> Filme não encontrado 😿😿</h2>
    )}
      <Footer DevName={"DevErick"} />
    </div>
  );
};
export default App;
