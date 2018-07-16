import React from 'react';
import S from './index.module.css';

export default class AddButton extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <input type = "button"
        value = "Add"
        className = {S.button}
        id = "btnAdd"
        onClick = {this.props.handleClick}/>
    );
  }
}
