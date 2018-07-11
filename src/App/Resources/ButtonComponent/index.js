import React from 'react';
import S from './index.module.css';
import ClassNames from 'classnames';

export default class ButtonComponent extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <input type = "button"
        value = {this.props.value}
        className = {ClassNames(this.props.defaultStyle, this.props.style, S.button)}
        id = {this.props.id}
        onClick = {this.props.handleClick}/>
    );
  }
}
