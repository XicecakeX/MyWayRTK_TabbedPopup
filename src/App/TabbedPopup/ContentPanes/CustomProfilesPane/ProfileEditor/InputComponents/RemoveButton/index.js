import React from 'react';
import S from './index.module.css';
import ClassNames from 'classnames';

export default class ProfileRemoveButton extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <input type = "button"
        value = "Remove"
        className = {ClassNames(S.button, S[this.props.style])}
        id = "btnProfileRemove"
        onClick = {this.props.handleClick}/>
    );
  }
}
