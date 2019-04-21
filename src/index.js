import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import createHistory from 'history/createBrowserHistory'
import { BrowserRouter as Router, Switch, Route, Link ,match, Redirect} from "react-router-dom";

import App from './App';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';
import NoMatch from './Components/NoMatch';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';

import './index.css';

const history = createHistory();;
const store = configureStore();

ReactDOM.render((
	<Router history={history}>
    <Provider store={store}>
      <App >
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
          <Route path='/login' component ={ Login } />
          <PrivateRoute path="/admin" />
                
          <Route component={NoMatch} />
        </Switch> 
      </App> 
    </Provider>
  </ Router>
), document.getElementById('root'));