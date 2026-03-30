import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Docs from "../pages/Docs";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/docs",
    element: <Docs />,
  },
]);

export default Router;