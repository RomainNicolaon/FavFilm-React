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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/movie/:id",
    element: (
      <>
        <BackButton />
        <MovieDetail />
      </>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/watch/:id",
    element: (
      <>
        <BackButton />
        <MovieWatch />
      </>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "gallery",
    element: (
      <>
        <BackButton />
        <MovieGallery />
      </>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "favorites",
    element: (
      <>
        <BackButton />
        <MovieGallery />
      </>
    ),
  },
  {
    path: "404",
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
