import React from 'react';
import S from './index.module.css';
import ClassNames from 'classnames';

export default class InformationEditButton extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <input type = "button"
        value = "Edit"
        className = {ClassNames(S.button, this.props.style)}
        id = "btnInformationEdit"
        onClick = {this.props.handleClick}/>
    );
  }
}
