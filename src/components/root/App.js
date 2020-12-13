import React, { Component } from 'react'
import { connect } from 'react-redux';
//import {alertify} from "alertifyjs";

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

export default connect(mapStateToProps)(App);
