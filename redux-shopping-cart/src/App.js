import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import { ProductsList } from "./views/ProductsList";
import { Store } from "./store";
import Cart from "./views/Cart";
import { CartCounter } from "./components/CartCounter";
const Product = lazy(() => import("./views/Product"));
import { ApplicationRoutes } from './ApplicationRouters';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Suspense fallback={<h1>Loading...</h1>}>
          <BrowserRouter>
            <header className="App-header">
              <ApplicationRoutes />
            </header>
          </BrowserRouter>
        </Suspense>
      </div>
    </Provider>
  );
}

export default App;
