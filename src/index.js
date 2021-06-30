import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers/rootReducer';
import ThunkMiddleware  from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
const composedEhencer = composeWithDevTools(applyMiddleware(ThunkMiddleware));
const store = createStore(rootReducer, composedEhencer);
ReactDOM.render(
  <Provider store ={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

