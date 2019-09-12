import React, { Suspense } from "react";
import { Provider } from "react-redux";
import "./App.css";
import { Store } from "./store";
import { ApplicationRoutes } from "./ApplicationRouters";
import { BrowserRouter, Link } from "react-router-dom";
import { CartCounter } from "./components/CartCounter";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Suspense fallback={<h1>Loading...</h1>}>
          <header className="App-header">
            <BrowserRouter>
              <div>
              <Link className="btn btn-secondary btn1" to="/">Home</Link> <Link className="btn btn-secondary btn1" to="/cart"> <CartCounter /> </Link>
              </div>
              <ApplicationRoutes />
            </BrowserRouter>
          </header>
        </Suspense>
      </div>
    </Provider>
  );
}

export default App;
