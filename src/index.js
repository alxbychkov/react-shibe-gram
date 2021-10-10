import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/style.scss';
import App from './App';
import { Provider } from 'react-redux';
import { saveToLocalStorage } from './redux/initialState';
import { store } from './redux/store';

store.subscribe(() => {
  const state = store.getState();
  if (state.pictures?.favorites) saveToLocalStorage(state.pictures.favorites);
});

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
