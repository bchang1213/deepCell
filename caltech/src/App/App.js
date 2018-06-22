import React, { Component} from "react";
import "./App.css";
import {hot} from "react-hot-loader";
import UploadArea from "../UploadArea/UploadArea.js";
import DeepCell from "../DeepCell/DeepCell.js";

class App extends Component{

  render(){
	return(
	  <div className="App">
			<DeepCell />
			<UploadArea />
	  </div>
	);
  }
}

export default hot(module)(App);