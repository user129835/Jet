import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Home from "./routes/Home";
import News from "./routes/News";
import Plans from "./routes/Plans";
import Analysis from "./routes/Analysis";
import List from "./routes/List.tsx";
import History from "./routes/History";

const router = createBrowserRouter([
  {
    path: "/Home",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "News",
    element: <News />,
  },
  {
    path: "Plans",
    element: <Plans />,
  },
  {
    path: "Analysis",
    element: <Analysis />,
  },
  {
    path: "List",
    element: <List />,
  },
  {
    path: "History",
    element: <History />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

