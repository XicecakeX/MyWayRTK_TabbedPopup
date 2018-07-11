import React from 'react';
import S from './index.module.css';

export default class ProfileVerifyButton extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <input type = "button"
        value = "Verify"
        className = {S.button}
        id = "btnProfileVerify"
        onClick = {this.props.handleClick}/>
    );
  }
}
