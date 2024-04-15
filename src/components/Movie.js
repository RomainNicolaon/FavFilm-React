import React from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

import LoremPoster from "../assets/lorem-picture.jpeg";
import AddFav from "./ManageFav";

export default function Movie({ movie }) {
  let synopsis = movie.synopsis;
  const synopsisAuthorisedLength = 200;
  if (synopsis.length > synopsisAuthorisedLength) {
    synopsis = synopsis.substring(0, synopsisAuthorisedLength) + "...";
  }
  let postersUrl;
  if (movie.postersUrl.length === 0) {
    postersUrl = [LoremPoster];
  } else {
    postersUrl = movie.postersUrl[0];
  }
  return (
    <Card
      key={movie.id}
      className="my-3 card d-flex flex-column shadow px-0 py-3 position-relative w-100"
    >
      <AddFav movie={movie} />
      <Card.Img
        src={postersUrl}
        alt="affiche"
        style={{ height: "70%", width: "100%" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title
          className="fs-5"
          style={{ overflow: "hidden", whiteSpace: "nowrap" }}
          title={movie.title}
        >
          {movie.title}
        </Card.Title>
        <Card.Text>
          <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Synopsis</Accordion.Header>
              <Accordion.Body>{synopsis}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Text>
        <a href={`/projects/Favfilm/movie/${movie.id}`} className="btn btn-primary mt-auto">
          Voir plus
        </a>
      </Card.Body>
    </Card>
  );
}
