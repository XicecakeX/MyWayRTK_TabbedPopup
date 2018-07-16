import React from 'react';
import S from './index.module.css';

export default class LinkedCancelButton extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <input type = "button"
        value = "Cancel"
        className = {S.button}
        id = "btnLinkedCancel"
        onClick = {this.props.handleClick}/>
    );
  }
}
