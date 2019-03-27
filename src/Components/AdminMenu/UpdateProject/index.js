import React, { Component } from 'react';


import { connect } from 'react-redux';


import * as action from "../../../_redux/actions.js";
import ItemData from './ItemData.js';

class UpdateProject extends Component {
  constructor(props) {
    super(props);
    this.toDelete = this.toDelete.bind(this);
    }

    toDelete(id) {
      let arrID = [id];
      
      this.props.fetchData('/api/delete',{
        method:'post',
        body: JSON.stringify({arrID:arrID}),
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      });
    }

    componentDidMount() {
      if (!this.props.items.length) {
        this.props.fetchData('/api/get',{
            method:'get',
            headers: {
              "Accept": "application/json"
            }
          });
      }
    }

	render() {

      if (this.props.hasErrored) {
        return <p>Sorry! There was an error loading the items</p>;
      }

      if ( this.props.isLoading )  {
          return <p>Loading…</p>;
      }

      return (
          <div className="update-project">
              <ul className="update-project_wrap">
                  {this.props.items.map((item) => (
                      <ItemData data={item} 
                                toDelete={ (id) => this.toDelete(id)}/>
                  ))}
              </ul>
          </div>
      );
    }
}

export default connect(
  (store) => {return {
    items: store.items,
    hasErrored: store.itemsHasErrored,
    isLoading: store.itemsIsLoading
  }},
  (dispatch) => {return {
    //fetchData: (url,options) => dispatch(action.itemsFetchData(url,options))
  }}
  
  )(UpdateProject);