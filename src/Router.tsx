import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Projects } from "./pages/Projects/Projects";
import { Contact } from "./pages/Contact/Contact";
import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        index: true,
      },

      { path: "/about", element: <About></About> },

      { path: "/projects", element: <Projects></Projects> },

      { path: "/contact", element: <Contact></Contact> },

      { path: "*", element: <ErrorPage></ErrorPage> },
    ],
  },
]);
