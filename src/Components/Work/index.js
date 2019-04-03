import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import {bindActionCreator} from 'redux';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import * as action from "../../_redux/actions.js";
import * as acyncActions from "../../_redux/acyncActions.js";

import WorkItem from "./WorkItem.js";

import './Work.css';

class Work extends Component {
  constructor(props) {
    super(props);
    }

    activePopup = (e) => {
      e.currentTarget.querySelector(".work-info-wrap").classList.add("active")
    }

    deActivePopup = (e) => {
      e.currentTarget.querySelector(".work-info-wrap").classList.remove("active")
    }

    componentDidMount() {
      console.log("this.props.work");

      if (!this.props.work.length) {

          this.props.getWork( '/api/get-work',
                                { method:'get' },
                                action.WORK_DATA_SUCCESS
          );
      }
    }
  

	render () {

    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if ( this.props.isLoading )  {
        return <p>Loading…</p>;
    }

		return (
		<div className="work">
            <h2 className="work-head">My work</h2>
            
            <div className="work-block">
                <ul className="work-list">

                  {this.props.work.map((item) => (
                          <li  onMouseEnter={(e)=>{ this.activePopup(e)}} 
                                            onMouseLeave={(e)=>{ this.deActivePopup(e)}}
                                            key={item._id}>
                            <WorkItem data={item} />
                          </li>
                  ))}

                </ul>
            </div>
        </div>
		)}
}

export default connect(
  (store) => {return {
    work: store.work.items,
    hasErrored: store.work.itemsHasErrored,
    isLoading: store.work.itemsIsLoading
  }},
  (dispatch) => {return {
        getWork: (url,options,effect)     => { dispatch(acyncActions.fetchApi(url,options,effect)); }

  }}
  
  )(Work);