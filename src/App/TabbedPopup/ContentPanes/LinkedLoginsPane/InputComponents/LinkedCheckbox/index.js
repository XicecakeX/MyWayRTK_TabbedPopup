import React from 'react';
import S from './index.module.css';

export default class InvalidCheckbox extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <input type = "checkbox"
        checked = {this.props.checked}
        className = {S.checkbox}
        id = "chkInvalidLogins"
        onChange = {(event) => {this.props.setInput(event.target.checked)}}/>
    );
  }
}
