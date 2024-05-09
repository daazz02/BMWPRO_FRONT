import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Motorbike from "./pages/Motorbike";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/motorbike",
    element: <Motorbike />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
