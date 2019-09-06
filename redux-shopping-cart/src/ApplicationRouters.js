import React from "react";
import { Route } from "react-router-dom";
import { InitialPage, CartProducts, ProductsItem } from "./components";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={InitialPage} />
    <Route path="/prod/" exact component={CartProducts} />
    <Route path="/prod/:id" component={ProductsItem} />
  </>
);