import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Modal.css';

class Modal extends Component {
    
  constructor(props) {
    super(props);
    }

	render () {

		return (
    <div className="modal-wrap">
      <div className="modal">

        <h3 className="modal-head">Login error</h3>

        <div className="modal-text">
            <p>{this.props.errorText}</p>
        </div>

        <div className="btn-group clearfix">
            <div onClick={this.props.onError} className="modal-btn submit">OK</div>
        </div>
                    
        </div>
      </div>
		)}
}

export default connect(
  (store) => {return {
  }},
  (dispatch) => {return {}}
  )(Modal);