import React from "react";
import { Route } from "react-router-dom";
import { InitialPage, CartProducts, Products } from "./components";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={InitialPage} />
    <Route path="/prod/" exact component={CartProducts} />
    <Route path="/prod/:name" component={Products} />
  </>
);