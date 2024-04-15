import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSearchParams } from "react-router-dom";

import Movie from "./components/Movie";
import Header from "./components/Header";
import MoviesData from "./data/movies";

function ClearFavorites() {
  localStorage.setItem("favoriteMovies", "[]");
  window.location.href = "/projects/Favfilm";
}

function SortMovies(filter) {
  if (filter === "favorites") {
    let favoriteMovies = localStorage.getItem("favoriteMovies") || "[]";
    favoriteMovies = JSON.parse(favoriteMovies);

    let finalMovies = [];

    if (favoriteMovies.length === 0) {
      return finalMovies;
    }

    favoriteMovies.forEach((fav) => {
      let movie = MoviesData.find((movie) => movie.id === fav);
      if (movie) {
        finalMovies.push(movie);
      }
    });
    return finalMovies;
  }

  MoviesData.sort((a, b) => {
    if (filter === "release_date") {
      a.release_date = a.release_date.split("/").reverse().join("/");
      b.release_date = b.release_date.split("/").reverse().join("/");
      return new Date(b.release_date) - new Date(a.release_date);
    } else if (filter === "director") {
      return a.director.localeCompare(b.director);
    } else if (filter === "add_date") {
      return b.id - a.id;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
}

export default function App() {
  const [queryParams] = useSearchParams();
  const filter = queryParams.get("filter");

  let EndMoviesData = SortMovies(filter);

  if (!EndMoviesData) {
    EndMoviesData = MoviesData;
  }

  return (
    <>
      <Header />
      <div className="container">
        {filter === "favorites" ? (
          <button
            className="btn btn-primary px-4 mt-2"
            onClick={() => {
              ClearFavorites();
            }}
          >
            Vider les favoris
          </button>
        ) : null}
        <div className="row">
          {EndMoviesData.length === 0 ? (
            <div className="col-md-12">
              <h1 className="text-center mt-2">Aucun film trouvé</h1>
              <p className="text-center">
                Essayez d'ajouter des favoris et revenez plus tard
              </p>
            </div>
          ) : null}
          <div className="container px-4 text-center">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-6 g-4">
              {EndMoviesData.map((movie) => (
                <div className="d-flex justify-content-center " key={movie.id}>
                  <Movie movie={movie} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
