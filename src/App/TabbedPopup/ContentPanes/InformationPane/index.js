import React from 'react';
import S from './index.module.css';
import EditButton from './InputComponents/EditButton';
import SaveButton from './InputComponents/SaveButton';
import ESNText from './InputComponents/ESNTextfield';

export default class InformationPane extends React.Component{
  /**Default Consdivuctor*/
  constructor(){
    super();
    this.state = {
      ESN: "",
      display1: "display",
      display2: "hidden"
    };
  }

  /**Rendering Component*/
  render(){
    return(
      <div className = {S.content}>
        <div className = {S.item1}>
          <div className = {S.title}> Address:</div>
          <div className = {S.data}> </div>
        </div>
        <div className = {S.item2}>
          <div className = {S.title}> Phone:</div>
          <div className = {S.data}> </div>
        </div>
        <div className = {S.item1}>
          <div className = {S.title}> Reseller:</div>
          <div className = {S.data}> </div>
        </div>
        <div className = {S.item2}>
          <div className = {S.title}> Last Login Time:</div>
          <div className = {S.data}> </div>
        </div>
        <div className = {S.item1}>
          <div className = {S.title}> User Agent:</div>
          <div className = {S.data}> </div>
        </div>
        <div className = {S.item2}>
          <div className = {S.title}> ESN:</div>
          <div className = {S.data}>
            <div className = {S[this.state.display1]}> {this.state.ESN}</div>
            <EditButton style = {S[this.state.display1]} handleClick = {() => {this.setState({display1: "hidden", display2: "display"})}}/>
            <ESNText value = {this.state.ESN}
              style = {S[this.state.display2]}
              setInput = {(value) => {this.setState({ESN: value})}}/>
            <SaveButton style = {S[this.state.display2]} handleClick = {() => {this.setState({display1: "display", display2: "hidden"})}}/>
          </div>
        </div>
        <div className = {S.item1}>
          <div className = {S.title}> Last GPGGA:</div>
          <div className = {S.data}> </div>
        </div>
        <div className = {S.item2}>
          <div className = {S.title}> Last GPGGA Time:</div>
          <div className = {S.data}> </div>
        </div>
        <div className = {S.item1}>
          <div className = {S.title}> Last/Current Mountpoint Connected:</div>
          <div className = {S.data}> </div>
        </div>
        <div className = {S.item2}>
          <div className = {S.title}> Latitude:</div>
          <div className = {S.data}> </div>
        </div>
        <div className = {S.item1}>
          <div className = {S.title}> Longitude:</div>
          <div className = {S.data}> </div>
        </div>
      </div>
    );
  }
}
