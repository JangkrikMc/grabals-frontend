import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { createBrowserRouter, RouterProvider, createHashRouter } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home";
import About from "./pages/About";
import LandingGrabals from "./pages/Landing_grabals/LandingGrabals";
import ArtikelPage from "./pages/Artikel/ArtikelPage";
import ArtikelDetailPage from "./pages/Artikel/ArtikelDetailPage";
import SyaratKetentuan from "./pages/SyaratKetentuan";

// Menggunakan createHashRouter sebagai solusi untuk masalah refresh halaman
// HashRouter menggunakan hash (#) di URL yang tidak memerlukan server-side routing
// Ini memastikan halaman tidak 404 saat di-refresh
const router = createHashRouter([
  {
    path: "/",
    element: <LandingGrabals/>,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/artikel",
    element: <ArtikelPage />,
  },
  {
    path: "/artikel/:id",
    element: <ArtikelDetailPage />,
  },
  {
    path: "/syarat-ketentuan",
    element: <SyaratKetentuan />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);