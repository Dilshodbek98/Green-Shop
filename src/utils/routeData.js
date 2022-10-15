import AddProduct from "../components/AddProduct";
import Admin from "../components/Admin";
import Login from "../components/Login";
import Ordering from "../components/ordering";
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
  {
    id: useUniqueId,
    title: "Ordering",
    path: "/ordering",
    element: <Ordering />,
    private: false,
    hidden: true,
  },
  {
    id: useUniqueId,
    title: "Login",
    path: "/login",
    element: <Login />,
    private: false,
    hidden: true,
  },
  {
    id: useUniqueId,
    title: "Admin",
    path: "/admin",
    element: <Admin />,
    private: false,
    hidden: true,
  },
  {
    id: useUniqueId,
    title: "AddProduct",
    path: "/addProduct",
    element: <AddProduct />,
    private: false,
    hidden: true,
  },
];