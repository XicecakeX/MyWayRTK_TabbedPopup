import React from 'react';
import S from './index.module.css';
import ClassNames from 'classnames';
import TabMenu from './TabMenu';
import InformationPane from './ContentPanes/InformationPane';
import MountpointManagerPane from './ContentPanes/MountpointManagerPane';
import CustomProfilesPane from './ContentPanes/CustomProfilesPane';
import StatusPane from './ContentPanes/StatusPane';
import CloseButton from './CloseButton';

export default class TabbedPopup extends React.Component{
  /**Default Constructor*/
  constructor(){
    super();
    this.state = {
      selected: {
        tab1: "selected",
        tab2: "default",
        tab3: "default",
        tab4: "default"
      }
    }
  }

  /**displayData Function*/
  displayData = () => {
    //Declaring fields
    var tabs = this.state.selected;
    var data;

    //Checking selected tab
    if(tabs.tab1 === "selected"){
      //Setting data
      data = (<InformationPane />);
    }else if(tabs.tab2 === "selected"){
      //Setting data
      data = (<MountpointManagerPane />);
    }else if(tabs.tab3 === "selected"){
      //Setting data
      data = (<CustomProfilesPane />);
    }else{
      //Setting data
      data = (<StatusPane />);
    }

    //Returning data
    return data;
  }

  /**close Function*/
  close = () => {
    //Calling close function
    this.props.close();

    //Setting state
    this.setState({
      selected: {
        tab1: "selected",
        tab2: "default",
        tab3: "default",
        tab4: "default"
      }
    });
  }

  /**Rendering Component*/
  render(){
    return(
      <div className = {ClassNames(S[this.props.visibility], S.popup)}>
        <div className = {S.content}>
          <TabMenu selected = {this.state.selected} setSelected = {(selected) => {this.setState({selected: selected})}}/>
          <div className = {S.data}>
            <div className = {S.panel}>
              {this.displayData()}
            </div>
            <div>
              <CloseButton handleClick = {this.close}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
