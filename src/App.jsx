import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Home from "./components/views/Home";
import About from "./components/views/About";
import SingleMovieModal from "./components/views/SingleMovieModal";
import NotFound from "./components/NotFound";
import Search from "./components/views/Search";
import Layout from "./components/Layout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // view
    children: [
      {
        path: "",
        element: <Home />, //view
      },

      {
        path: "about-us",
        element: <About />, //view
      },
      {
        path: "pelicula/:id",
        element: <SingleMovieModal/>, //view
      },
      
      {
        path: "search",
        element: <Search />, // view
      },
      {
        path: "contactenos",
        element: <Navigate replace to="/contacto" />, // Navigate , me lleva a Contacto
      },
      
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;