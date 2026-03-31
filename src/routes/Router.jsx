import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Docs from "../pages/Docs";
import Demo from "../pages/Demo";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/docs",
    element: <Docs />,
  },
  {
    path: "/demo",
    element: <Demo />,
  },
]);

export default Router;