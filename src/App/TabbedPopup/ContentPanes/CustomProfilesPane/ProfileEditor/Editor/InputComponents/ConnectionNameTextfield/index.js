import React from 'react';
import S from './index.module.css';
import ClassNames from 'classnames';

export default class ConnectionNameTextfield extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <input type = "text"
        value = {this.props.value}
        className = {ClassNames(S.textfield, S[this.props.border])}
        id = "txtConnectionName"
        onChange = {(event) => {this.props.setInput(event.target.value)}}/>
    );
  }
}
