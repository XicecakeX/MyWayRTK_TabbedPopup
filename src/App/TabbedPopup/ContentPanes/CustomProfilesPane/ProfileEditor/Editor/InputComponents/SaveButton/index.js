import React from 'react';
import S from './index.module.css';

export default class ProfileSaveButton extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <input type = "button"
        value = "Save"
        className = {S.button}
        id = "btnProfileSave"
        onClick = {this.props.handleClick}/>
    );
  }
}
