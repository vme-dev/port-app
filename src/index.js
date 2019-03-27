import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import './media.css';
import App from './App';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';
import NoMatch from './Components/NoMatch';


import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { applyMiddleware } from 'redux';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import  reduser  from './_redux/reduser';

import configureStore from './store/configureStore';

import { syncHistoryWithStore } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'

import { BrowserRouter as Router, Switch, Route, Link ,match, Redirect} from "react-router-dom";

const history = createHistory();;

const store = configureStore();


function Protected() {
  return <h3>Protected</h3>;
}

ReactDOM.render(
	<Router history={history}>
  <Provider store={store}>
  <React.Fragment>
    

    <Switch>

      <Route path='/login' component ={ Login } />
      <PrivateRoute path="/admin" component={Protected} />	
      <Route  component={App} />

    </Switch>
  </React.Fragment>
  </Provider>
  </ Router>
, 
  document.getElementById('root')
);

