import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";
import { useState } from "react";

export function Page1() {
  type movieCard = {
    title: string;
  };

  const [movies, setMovies] = useState<movieCard[]>([
    { title: "Incredibles" },
    { title: "Venom" },
  ]);

  return (
    <>
      <h1>This is Page 1</h1>
    </>
  );
}

//<h1>{movies[0].title}</h1>
