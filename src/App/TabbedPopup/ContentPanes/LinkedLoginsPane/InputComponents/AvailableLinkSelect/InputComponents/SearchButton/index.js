import React from 'react';
import S from './index.module.css';

export default class AvailableSearchButton extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <input type = "button"
        value = "Search"
        className = {S.button}
        id = "btnAvailableSearch"
        onClick = {this.props.handleClick}/>
    );
  }
}
