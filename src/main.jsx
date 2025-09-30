import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { createBrowserRouter, RouterProvider, createHashRouter } from "react-router-dom";
import "./index.css";
import LoadingScreen from "./components/layout/LoadingScreen";

// Lazy load semua halaman untuk meningkatkan performa
const LandingGrabals = lazy(() => import("./pages/Landing_grabals/LandingGrabals"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const ArtikelPage = lazy(() => import("./pages/Artikel/ArtikelPage"));
const ArtikelDetailPage = lazy(() => import("./pages/Artikel/ArtikelDetailPage"));
const SyaratKetentuan = lazy(() => import("./pages/SyaratKetentuan"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Komponen wrapper untuk menampilkan loading screen saat halaman dimuat
const PageLoader = ({ children }) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      {children}
    </Suspense>
  );
};

// Menggunakan createHashRouter sebagai solusi untuk masalah refresh halaman
// HashRouter menggunakan hash (#) di URL yang tidak memerlukan server-side routing
// Ini memastikan halaman tidak 404 saat di-refresh
const router = createHashRouter([
  {
    path: "/",
    element: <PageLoader><LandingGrabals /></PageLoader>,
  },
  {
    path: "/home",
    element: <PageLoader><Home /></PageLoader>,
  },
  {
    path: "/about",
    element: <PageLoader><About /></PageLoader>,
  },
  {
    path: "/artikel",
    element: <PageLoader><ArtikelPage /></PageLoader>,
  },
  {
    path: "/artikel/:id",
    element: <PageLoader><ArtikelDetailPage /></PageLoader>,
  },
  {
    path: "/syarat-ketentuan",
    element: <PageLoader><SyaratKetentuan /></PageLoader>,
  },
  {
    path: "*",
    element: <PageLoader><NotFound /></PageLoader>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
