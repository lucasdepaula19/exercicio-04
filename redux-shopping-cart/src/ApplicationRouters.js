import React, { lazy } from "react";
import { Route } from "react-router-dom";
import { InitialPage, CartProducts } from "./components";
const ProductsItem = lazy(() => import("./components/CompProducts"));

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={InitialPage} />
    <Route path="/prod/" exact component={CartProducts} />
    <Route path="/prod/:id" component={ProductsItem} />
    
  </>
);