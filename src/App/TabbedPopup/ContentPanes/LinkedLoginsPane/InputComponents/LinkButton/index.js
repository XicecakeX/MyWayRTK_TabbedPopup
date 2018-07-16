import React from 'react';
import S from './index.module.css';

export default class LinkButton extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <input type = "button"
        value = "Link -->"
        className = {S.button}
        id = "btnLink"
        onClick = {this.props.handleClick}/>
    );
  }
}
