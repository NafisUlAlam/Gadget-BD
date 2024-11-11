import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import Products from "../Components/Products";
import ProductDetails from "../Pages/ProductDetails";

import CartItems from "../Components/CartItems";
import WishItems from "../Components/WishItems";
import ErrorPage from "../Components/ErrorPage";
import News from "../Pages/News";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    //loader: () => fetch("/products.json"),
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/categories2.json"),
        children: [
          {
            path: "/",
            element: <Products></Products>,
            loader: () => fetch("/products2.json"),
          },
          {
            path: "/category/:categoryId",
            element: <Products></Products>,
            loader: () => fetch("/products2.json"),
          },
        ],
      },
      {
        path: "/product/:productId",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("/products2.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/news",
        element: <News></News>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "cart",
            element: <CartItems></CartItems>,
          },
          {
            path: "wishlist",
            element: <WishItems></WishItems>,
          },
          {
            path: "",
            element: <CartItems></CartItems>,
          },
        ],
      },
    ],
  },
]);

export default routes;
