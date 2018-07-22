import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Dashboard} />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app-container"));
