import React from 'react';
import S from './index.module.css';

export default class LinkedToSearchButton extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <input type = "button"
        value = "Search"
        className = {S.button}
        disabled = {this.props.disabled}
        id = "btnLinkedToSearch"
        onClick = {this.props.handleClick}/>
    );
  }
}
