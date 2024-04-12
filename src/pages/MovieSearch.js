import { React, useState } from "react";
import { Form } from "react-bootstrap";

import Header from "../components/Header";
import Movie from "../components/Movie";
import MoviesData from "../data/movies";

function SearchMovies(query) {
  if (!query) {
    return MoviesData.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  }

  return MoviesData.filter((movie) => {
    return movie.title.toLowerCase().includes(query.toLowerCase());
  });
}

export default function MovieSearch() {
  const [MoviesList, setMoviesList] = useState(MoviesData);

  return (
    <>
      <Header />
      <div className="container">
        <h1>Rechercher un film</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              name="query"
              type="text"
              placeholder="Entrez le titre du film"
              onChange={(e) => {
                setMoviesList(SearchMovies(e.target.value));
              }}
            />
          </Form.Group>
        </Form>

        <div className="container px-4 text-center">
          <div
            class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-6 g-4"
            id="movies-list"
          >
            {MoviesList.map((movie) => (
              <div className="d-flex justify-content-center " key={movie.id}>
                <Movie movie={movie} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
