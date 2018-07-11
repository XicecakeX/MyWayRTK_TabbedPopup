import React from 'react';
import S from './index.module.css';
import PreDefinedPanel from './PreDefinedPanel';
import UserDefinedPanel from './UserDefinedPanel';
import InfoButton from './InfoButton';
import InfoBox from './InfoBox';

export default class MountpointManagerPane extends React.Component{
  /**Default Constructor*/
  constructor(){
    super();
    this.state = {
      display: "hidden",
      smartMount: "disabled"
    };
  }

  /**Rendering Component*/
  render(){
    return(
      <div>
        <PreDefinedPanel />
        <UserDefinedPanel />
        <div className = {S.content}>
          <div className = {S.title}> SmartMount</div>
          <InfoButton handleClick = {() => {this.setState({display: "display"})}}/>
          <select value = {this.state.smartMount}
            className = {S.selectField}
            id = "selSmartMount"
            onChange = {(event) => {this.setState({smartMount: event.target.value})}}>
            <option value = "disabled"> Disabled</option>
            <option value = "enabled"> Enabled</option>
          </select>
          <InfoBox visibility = {this.state.display} close = {() => {this.setState({display: "hidden"})}}/>
        </div>
      </div>
    );
  }
}
