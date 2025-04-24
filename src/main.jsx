import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout.jsx";
// pages
import Home from "./pages/Home.jsx";
import Categories from "./pages/Categories.jsx";
// components
import Products from "./components/products/Products.jsx";
import ProductDetail from "./components/products/ProductDetail.jsx";
import Cart from "./components/cart/Cart.jsx";
// hooks
import { CartProvider } from "./hooks/CartContext.jsx";

// language
import global_uz from "./translations/uz/global.json";
import global_ru from "./translations/ru/global.json";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import Category from "./pages/Category.jsx";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "uz",
  resources: {
    uz: {
      global: global_uz,
    },
    ru: {
      global: global_ru,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "categories/:id",
        element: <Category />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <div>Ma'lumot topilmadi!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <I18nextProvider i18n={i18next}>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </I18nextProvider>
);
