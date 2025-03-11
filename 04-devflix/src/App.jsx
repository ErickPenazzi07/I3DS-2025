import Footer from "../components/footer/Footer";
import MovieCards from "../components/MovieCards";
import "./App.css";

const App = () =>
{
const movies = [
        {
          Year: "2014",
          Type: "Sci-Fi",
          Title: "Interstellar",
          director: "Christopher Nolan",
          rating: 8.6,
          Poster: "https://placehold.co/850x480",
        },
        {
          Year: "2010",
          Type: "Action",
          Title: "Inception",
          boxOffice: "$836.8M",
          rating: 8.8,
          Poster: "https://placehold.co/850x480",
        },
        {
          Year: "2010",
          Type: "Action",
          Title: "The Expendables",
          boxOffice: "Não disponível na API",
          rating: 6.5,
          Poster: "https://placehold.co/850x480",
        },
        {
          Year: "2010",
          Type: "Action",
          Title: "Iron Man 2",
          boxOffice: "Não disponível na API",
          rating: 7.0,
          Poster: "https://placehold.co/850x480",
        },
        {
          Year: "2010",
          Type: "Action",
          Title: "Robin Hood",
          boxOffice: "Não disponível na API",
          rating: 6.7,
          Poster: "https://placehold.co/850x480",
        },
        {
          Year: "2010",
          Type: "Action",
          Title: "Shutter Island",
          boxOffice: "Não disponível na API",
          rating: 8.2,
          Poster: "https://placehold.co/850x480",
        },
        {
          Year: "2010",
          Type: "Action",
          Title: "Kick-Ass",
          boxOffice: "Não disponível na API",
          rating: 7.6,
          Poster: "https://placehold.co/850x480",
        },
        {
          Year: "2010",
          Type: "Action",
          Title: "Predators",
          boxOffice: "Não disponível na API",
          rating: 6.4,
          Poster: "https://placehold.co/850x480",
        },
        {
          Year: "2010",
          Type: "Action",
          Title: "The A-Team",
          boxOffice: "Não disponível na API",
          rating: 6.6,
          Poster: "https://placehold.co/850x480",
        },
        {
          Year: "2010",
          Type: "Action",
          Title: "Clash of the Titans",
          boxOffice: "Não disponível na API",
          rating: 5.8,
          Poster: "https://placehold.co/850x480",
        },
        {
          Year: "2010",
          Type: "Action",
          Title: "Salt",
          boxOffice: "Não disponível na API",
          rating: 6.5,
          Poster: "https://placehold.co/850x480",
        },
      ];

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