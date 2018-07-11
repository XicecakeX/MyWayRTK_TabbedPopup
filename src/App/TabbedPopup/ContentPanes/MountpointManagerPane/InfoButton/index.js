import React from 'react';
import S from './index.module.css';

export default class InfoButton extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <img src = {require('./info.png')}
        alt = "info"
        className = {S.button}
        id = "btnInfo"
        onClick = {this.props.handleClick}/>
    );
  }
}
