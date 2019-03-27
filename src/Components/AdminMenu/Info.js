import React, { Component } from 'react';


import { connect } from 'react-redux';


import * as action from "../../_redux/actions.js";

class Info extends Component {
  constructor(props) {
    super(props);
    }

    componentDidMount() {
    
    }

	render() {
      
        return (
            <div className="AddProject">
              "Info"
            </div>
        );
    }
}

export default connect(
  (store) => {return {
    arr: store.appState.arr,
  }},
  (dispatch) => {return {
    changeStops: (e,index)     => { dispatch(action.CHANGE_STOPS(e,index)); },

  }}
  
  )(Info);