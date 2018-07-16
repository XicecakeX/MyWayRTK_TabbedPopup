import React from 'react';
import S from './index.module.css';

export default class Button extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <input type = "button"
        value = "Popup"
        className = {S.button}
        id = "btnPopup"
        onClick = {(event) => {this.props.handleClick(event.target.id)}}/>
    );
  }
}
