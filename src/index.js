import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./componentes/ErrorPage";
import InvitadoState from "./datos/store";
import MasFotos from "./componentes/MasFotos";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:id",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/masFotos",
    element: <MasFotos/>,
    errorElement: <ErrorPage />,
  }
]);

root.render(
  <InvitadoState>
    <RouterProvider router={router} />
  </InvitadoState>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
