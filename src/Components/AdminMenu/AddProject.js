import React, { Component } from 'react';


import { connect } from 'react-redux';


import { fetchApi,itemsHasErrored } from "../../_redux/actions.js";
import BtnBack from '../Btn/Back';


class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description:''
  };
    
    this.onSubmit = this.onSubmit.bind(this);
    
    }

    onSubmit() {
    
    let data = {
      name:this.state.name,
      description:this.state.description
    }

    for ( let key in data) {
      if (data[key].length <= 0 ) {
        return
      }
    }

    var formData = new FormData();
    formData.append("img", document.getElementById("myFileField").files[0]);
    formData.append("name", this.state.name);
    formData.append("description", this.state.description);
    
      this.props.fetchApi('/api/add',{
          method:'post',
          body: formData,
        });
    }

	render() {
        if (this.props.hasErrored) {
          
            return (
            <div>
              <p onClick={ () => {this.props.itemsHasErrored(false)} }>Sorry! There was an error loading the items</p>
              <BtnBack backUrl = {this.props.match.url} onClick={ () => {this.props.itemsHasErrored(false)} }/>
            </div>
            );
        }

        if ( this.props.isLoading )  {
            return <p>Loading…</p>;
        }
      
        return (
            <div className="AddProject">
              <form>
                <label>
                  Name: <input type="text" name="name" onChange={ (e) => this.onChange(e,"name")}/>
                </label>
                <label>
                  Текст сообщения: <textarea type="text" 
                                              name="description" value={this.state.message}
                                              onChange={ (e) => this.onChange(e,"description")}/>
                </label>
                <input type="file" id="myFileField" name="myFile"  />
                <input type="button" value="Submit" onClick={this.onSubmit}/>
              </form>
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
    // fetchApi: (url,options) => dispatch(fetchApi(url,options)),
    // itemsHasErrored: (bool) => dispatch(itemsHasErrored(bool))

  }}
  
  )(AddProject);