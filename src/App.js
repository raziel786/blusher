import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()
 
const App = ({ store }) => (
  <Provider store={store}>
   <Router history={history}>
    <Switch>
     <Route exact path='/' component={Login} />
     <Route exact path='/home' component={Home} />
    </Switch>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.shape({}).isRequired,
};

export default App;
