import React, { lazy } from "react";
import GlobalLayout from "./pages/_layout";

const DynamicIndex = lazy(() => import("./pages/index"));
const DynamicProductIndex = lazy(() => import("./pages/products/index"));
const DynamicId = lazy(() => import("./pages/products/[id]"));
const DynamicCartIndex = lazy(() => import("./pages/cart/index"));

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/", element: <DynamicIndex />, index: true },
      { path: "/cart", element: <DynamicCartIndex />, index: true },
      { path: "/products", element: <DynamicProductIndex />, index: true },
      { path: "/products/:id", element: <DynamicId /> },
    ],
  },
];

export const pages = [
  { route: "/" },
  { route: "/products" },
  { route: "/products/:id" },
  { route: "/cart" },
];
