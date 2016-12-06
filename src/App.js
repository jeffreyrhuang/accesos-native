import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const store = createStore(reducers, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
  saveState(store.getState());
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
