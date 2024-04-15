import React from "react";
import { useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="text-center container">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <a href="/projects/Favfilm">Go back to the homepage</a>
      </p>

      <pre className="text-red">{error.stack}</pre>
    </div>
  );
}
