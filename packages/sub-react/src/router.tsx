import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  }
], { basename: !!(window as any).__POWERED_BY_QIANKUN__ ? '/react' : '/' })

export default router;
