import React, { Component } from 'react';


import { connect } from 'react-redux';


import * as action from "../../_redux/actions.js";
import Card from './Card';

import { itemsFetchData } from "../../_redux/actions.js";


class CardBlock extends Component {
  constructor(props) {
    super(props);
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
            <div className="card-block">
                <ul className="card-block_wrap">
                    {this.props.items.map((item) => (
                        <Card data={item} />
                    ))}
                </ul>
            </div>
        );
    }
}

export default connect(
  (store) => {return {
    arr: store.appState.arr,
    items: store.items,
    hasErrored: store.itemsHasErrored,
    isLoading: store.itemsIsLoading
  }},
  (dispatch) => {return {
    // changeStops: (e,index)     => { dispatch(action.CHANGE_STOPS(e,index)); },
    // fetchData: (url,options) => dispatch(itemsFetchData(url,options))
  }}
  
  )(CardBlock);