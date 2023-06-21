import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./componentes/ErrorPage";
import InvitadoState from "./datos/store";
import MasFotos from "./componentes/MasFotos";
import data from "./datos/dataInvitados.json";
import Admin from "./componentes/Admin";
import Logo from "./componentes/Logo";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Logo />,
  },
  {
    path: "/v/admin",
    element: <Admin />,
  },
  {
    path: "/:id",
    element: <App />,
    loader: async ({ params }) => {
      if (params.id) {
        console.log(params.id);
        //Buscamos en los datos locales
        const found = data.find(
          (item) => item.id.toString() === params.id.toString()
        );

        if (!found) {
          throw new Response("Not Found", { status: 404 });
        }
        return found;
      }
    },
    errorElement: <ErrorPage />,
  },
  {
    path: "/v/masFotos",
    element: <MasFotos />,
    errorElement: <ErrorPage />,
  },
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
