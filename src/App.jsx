import { React } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import CountryInfo from "./components/CountryInfo";
import "../app.css";

import Header from "./components/Header";
import Body from "./components/Body";
const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/name/:name",
        element: <CountryInfo />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
