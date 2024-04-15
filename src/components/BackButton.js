import React from "react";

export default function BackButton() {
  return (
    <button
      className="btn btn-primary position-fixed bottom-0 end-0 m-3 z-3"
      onClick={() => {
        window.location.href = "/projects/Favfilm";
      }}
    >
      Retour à la liste
    </button>
  );
}
