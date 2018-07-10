import React, { Component} from "react";
import UploadArea from "../UploadArea/UploadArea.js";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Logo from "../Logo/Logo.js";
import "./Facade.css";

export default class Facade extends Component{

	render(){
		return(
			<div>
                <Logo />
                <Tabs>
                    <TabList>
                        <Tab>Prediction</Tab>
                        <Tab>Training</Tab>
                    </TabList>

                    <TabPanel>
                        {/* Upload an Image */}
                        <div>
                            <UploadArea />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        {/* KATAKANA CHART */}
                        <div className="katakanaChart">
                        </div>
                    </TabPanel>
                </Tabs>            
			</div>
		);
	}
}
