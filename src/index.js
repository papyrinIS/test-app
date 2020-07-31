import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import store from "./redux/redux-store"

ReactDOM.render(
    <Provider store={store}>
  <React.StrictMode>
    <App isLoad={store.getState().Reducer.isLoad} />
  </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
