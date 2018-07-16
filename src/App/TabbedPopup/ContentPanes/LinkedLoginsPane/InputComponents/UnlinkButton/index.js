import React from 'react';
import S from './index.module.css';

export default class UnlinkButton extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <input type = "button"
        value = "<-- Unlink"
        className = {S.button}
        id = "btnUnlink"
        onClick = {this.props.handleClick}/>
    );
  }
}
