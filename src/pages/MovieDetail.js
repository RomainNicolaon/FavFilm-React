import React from "react";
import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import MoviesData from "../data/movies.js";
import Header from "../components/Header.js";
import LoremPoster from "../assets/lorem-picture.jpeg";

export default function MovieDetail() {
  const { id } = useParams();
  const movie = MoviesData.find((movie) => movie.id === Number(id));
  const previousMovie = MoviesData.find((movie) => movie.id === Number(id) - 1);
  const nextMovie = MoviesData.find((movie) => movie.id === Number(id) + 1);
  let postersUrl;
  if (movie.postersUrl.length === 0) {
    postersUrl = [LoremPoster];
  } else {
    postersUrl = movie.postersUrl;
  }
  return (
    <>
      <Header />
      <div className="w-full px-5 py-3 d-flex flex-lg-row flex-column justify-content-between">
        <div className="w-75">
          <h1 className="fs-3">{movie.title}</h1>
          <div className="w-50 py-2">
            <Carousel data-bs-theme="dark">
              {postersUrl.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={image}
                    alt={movie.title}
                    height={600}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <hr className="my-4" />
          <h2 className="px-2 text-decoration-underline fs-5">Synopsis</h2>
          <p className="p-2">{movie.synopsis}</p>
        </div>
        <div className="w-25 border-start border-2 border-dark-200 p-3">
          <div className="d-flex justify-content-between p-2">
            <h4>Informations supplémentaires</h4>
          </div>
          <div>
            <p>Sorti le {movie.release_date}</p>
            <p>Par {movie.director}</p>
            <a href={`/projects/Favfilm/watch/${movie.id}`} className="btn btn-primary">
              Voir le film
            </a>

            <div className="mt-3">
              {previousMovie ? (
                <a
                  href={`/projects/Favfilm/movie/${previousMovie.id}`}
                  className="btn btn-outline-primary mr-3 mb-3"
                >
                  Fiche précédente
                </a>
              ) : null}

              {nextMovie ? (
                <a
                  href={`/projects/Favfilm/movie/${nextMovie.id}`}
                  className="btn btn-outline-primary"
                >
                  Fiche suivante
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
