import React from 'react';
import S from './index.module.css';

export default class DeleteButton extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <input type = "button"
        value = "Delete"
        className = {S.button}
        id = "btnDelete"
        onClick = {this.props.handleClick}/>
    );
  }
}
