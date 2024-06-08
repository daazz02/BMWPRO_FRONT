import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Layout from "./components/Layout.tsx";
import Average from "./pages/Average.tsx";
import Business from "./pages/Business.tsx";
import Login from "./pages/Login.tsx";
import Motorbike from "./pages/Motorbike";
import Sports from "./pages/Sports.tsx";
import Support from "./pages/Support.tsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/motorbike",
        element: <Motorbike />,
      },
      {
        path: "/sports",
        element: <Sports />,
      },
      {
        path: "/business",
        element: <Business />,
      },
      {
        path: "/average",
        element: <Average />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
