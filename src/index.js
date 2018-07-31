import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Dashboard from './components/Dashboard';

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <div>
        <Route exact path='/' component={Dashboard} />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app-container"));
