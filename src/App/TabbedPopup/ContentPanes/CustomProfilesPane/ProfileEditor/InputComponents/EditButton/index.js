import React from 'react';
import S from './index.module.css';

export default class ProfileEditButton extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <input type = "button"
        value = "Edit"
        className = {S.button}
        id = "btnProfileEdit"
        onClick = {this.props.handleClick}/>
    );
  }
}
