import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Docs from "../pages/Docs";
import Demo from "../pages/Demo";

// Add ScrollToTop wrapper for all routes
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <App />
      </>
    ),
  },
  {
    path: "/docs",
    element: (
      <>
        <ScrollToTop />
        <Docs />
      </>
    ),
  },
  {
    path: "/demo",
    element: (
      <>
        <ScrollToTop />
        <Demo />
      </>
    ),
  },
]);

export default Router;