import React, { Component } from 'react'
import { connect } from 'react-redux';
//import {alertify} from "alertifyjs";
import {bindActionCreators} from "redux"
import * as exampleActions from "../../redux/actions/exampleActions"
class App extends Component {

  // componentDidCatch(){   //render ardından ilk çağırılan statik js methodudur.
  //   this.getAPIRequest();
  // }

  // getAPIRequest = () => {
  //   fetch("URL")
  //   .then(response=>response.json())
  //   .then(data=>this.setState({data:data}));; //gelen datayı elimizdeki data ile değiştirdik
  // }

  render() { 
    return (
    <div>
      
    </div>
  );
  }
}



function mapStateToProps(state){
  return {
      data:state.exampleActionReducer
  }
};

function mapDispatchToProps(dispatch){
  return {
    actions:{
      getAction :  bindActionCreators(exampleActions.exampleAction,dispatch)
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
