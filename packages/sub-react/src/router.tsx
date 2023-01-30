import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";

const router = createBrowserRouter([
  {
      path: "/",
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
])

export default router;
