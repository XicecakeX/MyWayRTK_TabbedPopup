import React from 'react';
import S from './index.module.css';

export default class AddTextfield extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <input type = "text"
        value = {this.props.value}
        className = {S.textfield}
        id = "txtAdd"
        onChange = {(event) => {this.props.setInput(event.target.value)}}/>
    );
  }
}
