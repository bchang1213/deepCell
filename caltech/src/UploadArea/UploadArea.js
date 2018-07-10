import React, { Component} from "react";
import "../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../node_modules/dropzone/dist/min/dropzone.min.css";
import DropzoneComponent from 'react-dropzone-component';

export default class UploadArea extends Component{
	constructor() {
		super()
		this.state = { files: [] }
	  }
	
	onDrop(files) {
		this.setState({
			files
		});
	}

	render(){
		var componentConfig = {
			iconFiletypes: ['.jpg', '.png', '.gif'],
			showFiletypeIcon: true,
			postUrl: '/uploadHandler'
		};
		
		var djsConfig = {
			addRemoveLinks: true
		}
		return(
			<div id="content">
				<DropzoneComponent config={componentConfig} djsConfig={djsConfig} onDrop={this.onDrop.bind(this)} />
			</div>
		);
	}
}
