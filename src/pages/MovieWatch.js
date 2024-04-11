import React from "react";
import { useParams } from "react-router-dom";

import MoviesData from "../data/movies";
import Header from "../components/Header";

export default function Watch() {
  const { id } = useParams();
  const movie = MoviesData.find((movie) => movie.id === Number(id));
  return (
    <>
      <Header />
      <div className="w-full px-5 py-3 d-flex flex-lg-row flex-column justify-content-between">
        <div className="w-75">
          <h1 className="fs-3">Regarder {movie.title} en VF Streaming Gratuit</h1>
          <div className="w-50 py-2">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=hpDuP32Wn2BRsgiK"
              allow="autoplay"
              title={movie.title}
              allowFullScreen
            ></iframe>
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
          </div>
          <a href={`/movie/${movie.id}`} className="btn btn-primary">
            Retour à la fiche
          </a>
        </div>
      </div>
    </>
  );
}