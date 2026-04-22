import React from "react";

export type movie = {
  id: string;
  title: string;
  rating: string;
};

interface Props {
  movies: movie[];
}

const MovieCard = (movie: movie) => {
  function OnFavoriteClick(c: string) {
    alert("clicked favorite " + c);
  }

  return (
    <div>
      <div key={movie.id} style={{ border: "1px solid gray", width: "500px" }}>
        <h3>{movie.title}</h3>
        <h5>Score: {movie.rating}</h5>
        <button onClick={() => OnFavoriteClick(movie.title)}>
          Favorite
        </button>{" "}
      </div>
    </div>
  );
};

export default MovieCard;
