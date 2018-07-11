import React from 'react';
import S from './index.module.css';
import ClassNames from 'classnames';

export default class InformationSaveButton extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <input type = "button"
        value = "Save"
        className = {ClassNames(S.button, this.props.style)}
        id = "btnInformationSave"
        onClick = {this.props.handleClick}/>
    );
  }
}
