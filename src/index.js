import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
// Reduers
import cartReducer from './store/reducer/cartReducer';
import musicReducer from './store/reducer/musicReducer';


const rootReducer = combineReducers({
  cart: cartReducer,
  music: musicReducer,
})

const store = createStore(rootReducer);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
