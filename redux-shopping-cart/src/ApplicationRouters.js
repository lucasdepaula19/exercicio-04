import React, { lazy } from "react";
import { Route } from "react-router-dom";
import Cart from "./views/Cart";
import { InitialPage } from "./views/ProductList";
const product = lazy(() => import("./views/Product"));

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={InitialPage} />
    <Route path="/prod/" exact component={Cart} />
    <Route path="/prod/:id" component={product} />
  </>
);