import React from "react";

import Header from "../components/Header";
import GalleryCarousel from "../components/GalleryCarousel";
import MoviesData from "../data/movies";
import "../assets/carousel.css";

export default function Gallery() {
  let postersUrl = [];
  MoviesData.map((movie) =>
    movie.postersUrl.map((posterUrl) => postersUrl.push(posterUrl))
  );
  return (
    <div className="w-100">
      <Header />
      <div className="container w-25 py-5">
        <div className="row">
          <GalleryCarousel posterUrl={postersUrl} />
        </div>
      </div>
    </div>
  );
}
