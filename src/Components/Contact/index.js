import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as action from "../../_redux/actions.js";
import * as acyncActions from "../../_redux/acyncActions.js";
import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
        name: '',
        email:'',
        text:''
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
            name: '',
            email:'',
            text:''
          });
    }
    onSubmit() {
      let data = {
        name:this.state.name,
        email:this.state.email,
        text:this.state.text,
      }
  
      for ( let key in data) {
        if (data[key].length <= 0 ) {
          return
        }
      }
        this.props.sendMail('/api/send-mail',{
            method:'post',
            body: JSON.stringify(data),
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
            }
        },action.MAIL_SEND_SUCCESS);
    }

	render () {

    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if ( this.props.isLoading )  {
        return <p>Loading…</p>;
    }

		return (
		<div className="contact">
            <h2 className="contact-head">Contact me</h2>

            <div className="contact-form-block">
                <h3 className="contact-form-head">Send me message</h3>

                <div className="contact-form-wrap">
                    <form className="contact-form" onSubmit={this.onSubmit}>
                        <div className="form-group">
                            
                            <input  type="text" 
                                    name="name" placeholder="Your name..." 
                                    onChange={ (e) => this.onChange(e)} 
                                    value={this.state.name}
                                    className="form-input"/>
                        </div>

                        <div className="form-group">
                            
                            <input  type="email" 
                                    name="email" placeholder="Your email..." 
                                    onChange={ (e) => this.onChange(e)} 
                                    value={this.state.email}
                                    className="form-input"/>
                        </div>

                        <div className="form-group">
    
                            <textarea   type="text" 
                                        name="text" placeholder="Your message..." 
                                        value={this.state.message} 
                                        onChange={ (e) => this.onChange(e)} 
                                        value={this.state.text}
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
    index: store,
    hasErrored: store.itemsHasErrored,
    isLoading: store.itemsIsLoading
  }},
  (dispatch) => {return {
    sendMail: (url,options,effect)     => { dispatch(acyncActions.fetchApi(url,options,effect)); },
  }}
  
  )(Contact);