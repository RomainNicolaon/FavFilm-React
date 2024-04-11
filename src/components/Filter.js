import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Filter() {
  return (
    <NavDropdown title="Filtrer par" id="basic-nav-dropdown">
      <NavDropdown.Item href="/?filter=favorites">Favoris</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="/?filter=release_date">
        Date de sortie
      </NavDropdown.Item>
      <NavDropdown.Item href="/?filter=add_date">Date d'ajout</NavDropdown.Item>
      <NavDropdown.Item href="/?filter=director">Réalisateur</NavDropdown.Item>
      <NavDropdown.Item href="/">Réinitialiser</NavDropdown.Item>
    </NavDropdown>
  );
}
