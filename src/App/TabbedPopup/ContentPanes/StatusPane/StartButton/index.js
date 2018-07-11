import React from 'react';
import S from './index.module.css';

export default class StartButton extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <input type = "button"
        value = "Start Live Message Stream"
        className = {S.button}
        id = "btnStartLiveStream"
        onClick = {this.props.handleClick}/>
    );
  }
}
