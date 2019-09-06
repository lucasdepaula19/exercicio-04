import React from 'react';
import {Store} from './store';
import {Provider} from 'react-redux';
import './App.css';
import { ApplicationRoutes } from './ApplicationRouters';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <header className="App-header">
          <ApplicationRoutes />
        </header>
      </div>
    </Provider>
  );
}

export default App;
