import React from 'react';
import S from './index.module.css';

export default class LinkedDeleteButton extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <input type = "button"
        value = "Delete"
        className = {S.button}
        id = "btnLinkedDelete"
        onClick = {this.props.handleClick}/>
    );
  }
}
