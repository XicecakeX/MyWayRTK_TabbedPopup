import React from 'react';
import S from './index.module.css';
import Button from '../../ButtonComponent';

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
          <Button value = "Edit"
            style = {S[this.state.display1]}
            id = "btnEdit"
            handleClick = {() => {this.setState({display1: "hidden", display2: "display"})}}/>
          <Button value = "Save"
            style = {S[this.state.display2]}
            id = "btnSave"
            handleClick = {() => {this.setState({display1: "display", display2: "hidden"})}}/>
        </td>
      </tr>
    );
  }
}
