import React from 'react';
import S from './index.module.css';
import ClassNames from 'classnames';

export default class AddTextfield extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <input type = "text"
        value = {this.props.value}
        className = {ClassNames(S[this.props.style], S.textfield)}
        id = "txtAdd"
        onChange = {(event) => {this.props.setInput(event.target.value)}}/>
    );
  }
}
