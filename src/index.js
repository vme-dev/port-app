import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import './media.css';
import App from './App';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';

import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import createHistory from 'history/createBrowserHistory'

import { BrowserRouter as Router, Switch, Route, Link ,match, Redirect} from "react-router-dom";

const history = createHistory();;

const store = configureStore();


ReactDOM.render(
	<Router history={history}>
  <Provider store={store}>
  <React.Fragment>
    

    <Switch>

      <Route path='/login' component ={ Login } />
      <PrivateRoute path="/admin" />	
      <Route  component={App} />

    </Switch>
  </React.Fragment>
  </Provider>
  </ Router>
, 
  document.getElementById('root')
);

