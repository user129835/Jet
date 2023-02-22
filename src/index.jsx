import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Sakums from "./routes/Home";
import Jaunumi from "./routes/News";
import Plans from "./routes/Plans";
import Analize from "./routes/Analysis";
import Saraksts from "./routes/List.tsx";
import Vesture from "./routes/History";

const router = createBrowserRouter([
  {
    path: "/Sakums",
    element: <Sakums />,
    errorElement: <ErrorPage />,
  },
  {
    path: "Jaunumi",
    element: <Jaunumi />,
  },
  {
    path: "Plans",
    element: <Plans />,
  },
  {
    path: "Analize",
    element: <Analize />,
  },
  {
    path: "Saraksts",
    element: <Saraksts />,
  },
  {
    path: "Vesture",
    element: <Vesture />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

