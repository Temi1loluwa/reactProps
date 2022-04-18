import React from "react";
import { useState } from "react";
import MovieList from "./Components/MovieList";
import Header from "./Components/Header";
import AddMovie from "./Components/AddMovie";
import Footer from "./Components/Footer";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Ava",
      posterUrl: "../Assets/Ava.jpeg",
      description:
        "Ava Faulkner (Jessica Chastain) is a recovering addict and former soldier turned assassin. In France, she kidnaps her new target, an English businessman.",
      rating: 5,
    },
    {
      id: 2,
      title: "Morbius",
      posterUrl: "../Assets/Morbius.jpeg",
      description:
        "  10-year-old Michael Morbius welcomes his surrogate brother Lucien, whom he renames Milo; they bond over their shared blood illness and desire to be normal. ",
      rating: 4.5,
    },
    {
      id: 3,
      title: "Spiderman",
      posterUrl: "../Assets/Spiderman.jpeg",
      description:
        "A young Peter Parker/Spider-Man begins to navigate his newfound identity as the web-slinging super hero Spider-Man",
      rating: 3.5,
    },

    {
      id: 4,
      title: "Venom",
      posterUrl: "../Assets/Venom.jpeg",
      description:
        " In 1996, a young Cletus Kasady watches helplessly as his lover, Frances Barrison, is taken away from St. Estes Home for Unwanted Children to the Ravencroft Institute. ",
      rating: 4,
    },
    {
      id: 5,
      title: "Wrath ",
      posterUrl: "../Assets/Wrath.jpeg",
      description:
        " In L. A., an armored truck is robbed and the two drivers are killed. Patrick Hill (Jason Statham) barely passes the tests to be the new hire at the company.",
      rating: 4.8,
    },
  ]);

  const [addMovie, setAddMovie] = useState(false);

  const handleChange = () => {
    setAddMovie(!addMovie);
  };

  const handleFilter = (e) => {
    setMovies(
      movies.filter(
        (movie) => movie.rating >= e || movie.title.match(new RegExp(e, "i"))
      )
    );
  };

  const handleAdd = (e) => {
    setMovies([...movies, e]);
  };

  return (
    <div>
      <Header handleChange={handleChange} handleFilter={handleFilter} />
      {addMovie ? <AddMovie handleAdd={handleAdd} /> : null}
      <MovieList movies={movies} />
      <Footer />
    </div>
  );
}

export default App;
