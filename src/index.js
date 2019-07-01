import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './styles/base.css';
import './styles/gradient-bg.css';

import Greeter from './js/Greeter';
import GroupField from './js/GroupField';

const App = () =>
  <div className="content">
    <Greeter />
    <GroupField />
  </div>;

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
