import Products from "../components/products";
import { useUniqueId } from "../hook/useId";
import Home from "../pages/Home";
import Shop from "../pages/Shop";

export const routeData = [
  {
    id: useUniqueId,
    title: "Home",
    path: "/home",
    element: <Home />,
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    title: "Shop",
    path: "/shop",
    element: <Shop />,
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    title: "Products",
    path: "/products/:id",
    element: <Products />,
    private: false,
    hidden: true,
  },
];