import React from "react";
import { Route } from "react-router-dom";
import { InitialPage, ListProducts, Products } from "./components";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={InitialPage} />
    <Route path="/prod/" exact component={ListProducts} />
    <Route path="/prod/:name" component={Products} />
  </>
);