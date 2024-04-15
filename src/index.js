import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import MovieDetail from "./pages/MovieDetail";
import MovieWatch from "./pages/MovieWatch";
import NotFound from "./components/NotFound";
import BackButton from "./components/BackButton";
import MovieGallery from "./pages/MovieGallery";
import MovieSearch from "./pages/MovieSearch";

const router = createBrowserRouter([
  {
    path: "/projects/Favfilm/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/projects/Favfilm/movie/:id",
    element: (
      <>
        <BackButton />
        <MovieDetail />
      </>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/projects/Favfilm/watch/:id",
    element: (
      <>
        <BackButton />
        <MovieWatch />
      </>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/projects/Favfilm/gallery",
    element: (
      <>
        <BackButton />
        <MovieGallery />
      </>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/projects/Favfilm/favorites",
    element: (
      <>
        <BackButton />
        <MovieGallery />
      </>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/projects/Favfilm/search",
    element: (
      <>
        <BackButton />
        <MovieSearch />
      </>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/projects/Favfilm/search?q=:query",
    element: (
      <>
        <BackButton />
        <MovieSearch />
      </>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/projects/Favfilm/404",
    element: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
