import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      state = state + action.payload;
      break;
    case 'SUBTRACT':
      state = state - action.payload;
      break;
  }
  return state;
};
const store = createStore(reducer, 1);

store.subscribe(() => {
  console.log("Store update!", store.getState())
})
store.dispatch({
    type: 'ADD',
    payload: 10
});

store.dispatch({
    type: 'ADD',
    payload: 30
});

store.dispatch({
    type: 'ADD',
    payload: 20
});

let rootElement = document.getElementById('root');

ReactDOM.render(<App/>, rootElement);
