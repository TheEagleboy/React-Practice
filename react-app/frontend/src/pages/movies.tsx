import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";
import { useState } from "react";
import { movie } from "../components/MovieCard";

export function Movies() {
  type movieCard = movie;

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    alert(searchQuery);
  };

  const [searchQuery, setSearchQuery] = useState("");

  const [movies, setMovies] = useState<movieCard[]>([
    { id: "1", title: "Incredibles", rating: "5" },
    { id: "2", title: "Venom", rating: "3.5" },
    { id: "3", title: "Wolf of Wall Street", rating: "4.5" },
  ]);

  return (
    <>
      <form onSubmit={handleSearch} className="serach-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          {" "}
          Search
        </button>
      </form>

      <div>
        {movies.map((movie) => (
          <MovieCard id={movie.id} title={movie.title} rating={movie.rating} />
        ))}
      </div>
    </>
  );
}

//<h1>{movies[0].title}</h1>
