import React, { Component } from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Switch, Route, Link ,match, Redirect} from "react-router-dom";

import * as action from "../../_redux/actions.js";
import * as acyncActions from "../../_redux/acyncActions.js";
import './Login.css';

class Login extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
        login: '',
        pass:''
    };
      
      this.onCancel = this.onCancel.bind(this);
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        const target = event.target;
        const name = target.name;
    
        this.setState({
          [name]: target.value
        });
    }   

    onCancel() {
        this.setState({
            login: '',
            password:''
          });
    }
    onSubmit() {
      let data = {
        login:this.state.login,
        password:this.state.password,
      }
  
      for ( let key in data) {
        if (data[key].length <= 0 ) {
          return
        }
      }
        this.props.sendMail('/login',{
            method:'post',
            body: JSON.stringify(data),
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
            }
        },action.LOGIN_SEND);
    }

	render () {

    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if ( this.props.isLoading )  {
        return <p>Loading…</p>;
    }

    if (this.props.auth) return <Redirect to="/admin" />;

		return (
		<div className="login">

            <div className="back-btn">
              <Link to="/">{"< Back"}</Link>
            </div>

            <div className="login-form-block">
                <h3 className="login-form-head">Login form</h3>

                <div className="login-form-wrap">
                    <form className="login-form" onSubmit={this.onSubmit}>
                        <div className="form-group">
                            
                            <input  type="text" 
                                    name="login" placeholder="Login" 
                                    onChange={ (e) => this.onChange(e)} 
                                    value={this.state.name}
                                    className="form-input"/>
                        </div>

                        <div className="form-group">
                            
                            <input  type="password" 
                                    name="password" placeholder="Password" 
                                    onChange={ (e) => this.onChange(e)} 
                                    value={this.state.email}
                                    className="form-input"/>
                        </div>

                        <div className="btn-group clearfix">
                            <input type="button" value="Submit" onClick={this.onSubmit} className="form-btn submit"/>
                            <input type="button" value="Cancel" onClick={this.onCancel} className="form-btn cancel"/>
                        </div>
                        

                    </form>
                </div>
            </div>
            
        </div>
		)}
}

export default connect(
  (store) => {return {
    auth: store.appState.auth,
    hasErrored: store.itemsHasErrored,
    isLoading: store.itemsIsLoading
  }},
  (dispatch) => {return {
    sendMail: (url,options,effect)     => { dispatch(acyncActions.Auth(url,options,effect)); },
  }}
  
  )(Login);