import React, { Suspense } from "react";
import { Store } from './store';
import { Provider } from 'react-redux';
import './App.css';
import { ApplicationRoutes } from './ApplicationRouters';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Suspense fallback={<h1>Loading...</h1>}>
          <header className="App-header">
            <ApplicationRoutes />
          </header>
        </Suspense>
      </div>
    </Provider>
  );
}

export default App;
