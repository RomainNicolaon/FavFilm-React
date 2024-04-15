import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Filter() {
  return (
    <NavDropdown title="Filtrer par" id="basic-nav-dropdown">
      <NavDropdown.Item href="/projects/Favfilm?filter=favorites">Favoris</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="/projects/Favfilm?filter=release_date">
        Date de sortie
      </NavDropdown.Item>
      <NavDropdown.Item href="/projects/Favfilm?filter=add_date">Date d'ajout</NavDropdown.Item>
      <NavDropdown.Item href="/projects/Favfilm?filter=director">Réalisateur</NavDropdown.Item>
      <NavDropdown.Item href="/projects/Favfilm">Réinitialiser</NavDropdown.Item>
    </NavDropdown>
  );
}
