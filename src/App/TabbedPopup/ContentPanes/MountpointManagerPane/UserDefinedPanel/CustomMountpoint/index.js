import React from 'react';
import S from './index.module.css';
import EditButton from './InputComponents/EditButton';
import SaveButton from './InputComponents/SaveButton';

export default class CustomMountpoint extends React.Component{
  /**Default Constructor*/
  constructor(){
    super();
    this.state = {
      custom: "",
      display1: "display",
      display2: "hidden"
    };
  }

  /**Rendering Component*/
  render(){
    return(
      <tr className = {this.props.style}>
        <td className = {S.title}> CUSTOM {this.props.id}:</td>
        <td className = {S.data}>
          <div className = {S[this.state.display1]}> {this.state.custom}</div>
          <EditButton style = {S[this.state.display1]} handleClick = {() => {this.setState({display1: "hidden", display2: "display"})}}/>
          <SaveButton style = {S[this.state.display2]} handleClick = {() => {this.setState({display1: "display", display2: "hidden"})}}/>
        </td>
      </tr>
    );
  }
}
