import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import MoviesData from "../data/movies";
import Filter from "./Filter";

export default function Header() {
  const nbMoviesToDisplay = 3;

  const movies = MoviesData;
  let randomMovie = new Set();

  while (randomMovie.size < nbMoviesToDisplay) {
    let movie = movies[Math.floor(Math.random() * movies.length)];
    randomMovie.add(movie);
  }
  randomMovie = [...randomMovie];

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">FavFilms</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
            <NavDropdown title="Recommandations" id="basic-nav-dropdown">
              {randomMovie.map((movie) => (
                <NavDropdown.Item key={movie.id} href={`/movie/${movie.id}`}>
                  {movie.title}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Filter />
            <Nav.Link href="/gallery">Galerie</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
