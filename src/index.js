import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import './styles/base.css';
import './styles/gradient-bg.css';

import GroupField from './components/GroupField';

import Greeter from './js/Greeter';
import store from './store';

const App = () =>
  <Provider store={store}>
    <Router>
      <div className="content">
        <Route
          exact
          path="/"
          component={() => (
            <div>
              {/* <Greeter /> */}
              <GroupField />
            </div>
          )}
        />
        <Route
          path="/about"
          component={() =>
            <div>
              <Greeter />
            </div>
          }
        />
        <Route
          path="/topics"
          component={() =>
            <div>
              <GroupField />
            </div>}
        />
      </div>
    </Router>
  </Provider>;

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
