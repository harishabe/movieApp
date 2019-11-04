import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { composeWithDevTools } from 'redux-devtools-extension';
import { load, save } from 'redux-localstorage-simple';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './helpers/rootReducer';
import MoviesList from './view/MoviesList';

const middleware = [reduxLogger, thunk];

const store = createStore(rootReducer, load(), composeWithDevTools(applyMiddleware(...middleware, save())));

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={MoviesList} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
