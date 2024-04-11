import React from "react";
import Image from "react-bootstrap/Image";

import Heart from "../assets/hearts-svgrepo-com.svg";
import BrokenHeart from "../assets/broken-heart-svgrepo-com.svg";

function GetFavorites() {
  return JSON.parse(localStorage.getItem("favoriteMovies") || "[]");
}

function IsInFavorites(Id) {
  let favoriteMovies = GetFavorites();
  if (
    favoriteMovies.length === 0 ||
    !favoriteMovies.find((fav) => fav === Id)
  ) {
    return false;
  }
  return true;
}

function RefreshIcon(id) {
  let image = IsInFavorites(id) ? BrokenHeart : Heart;
  document.getElementById("img-heart-" + id).src = image;
}

function RegisterFavorite(Id) {
  let favoriteMovies = GetFavorites();
  if (IsInFavorites(Id)) {
    favoriteMovies = favoriteMovies.filter((fav) => fav !== Id);
  } else {
    favoriteMovies.push(Id);
  }
  localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
  RefreshIcon(Id);
}

export default function AddFavBtn({ movie }) {
  let image = IsInFavorites(movie.id) ? BrokenHeart : Heart;
  return (
    <div
      className="position-absolute top-0 end-0"
      style={{ transform: "translate(-30%, 30%)" }}
      id={"fav-btn-" + movie.id}
    >
      <button
        className="rounded-circle bg-transparent border-0 fs-2 text-danger pe-auto"
        title="Ajouter aux favoris"
        aria-label="Ajouter aux favoris"
        onClick={() => {
          RegisterFavorite(movie.id);
        }}
      >
        <span role="img" aria-label="heart">
          <Image
            className="bg-transparent fav-btn"
            id={"img-heart-" + movie.id}
            src={image}
            alt="heart"
            width="30"
          />
        </span>
      </button>
    </div>
  );
}
