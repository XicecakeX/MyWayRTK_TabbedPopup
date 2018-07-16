import React from 'react';
import S from './index.module.css';

export default class LinkedToSearchTextfield extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <input type = "text"
        value = {this.props.value}
        className = {S.textfield}
        disabled = {this.props.disabled}
        id = "txtLinkedToSearch"
        onChange = {(event) => {this.props.setInput(event.target.value)}}/>
    );
  }
}
