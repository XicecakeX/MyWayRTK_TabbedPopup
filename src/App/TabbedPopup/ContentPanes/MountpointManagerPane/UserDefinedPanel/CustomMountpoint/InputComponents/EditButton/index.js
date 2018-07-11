import React from 'react';
import S from './index.module.css';
import ClassNames from 'classnames';

export default class MountpointEditButton extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <input type = "button"
        value = "Edit"
        className = {ClassNames(S.button, this.props.style)}
        id = "btnMountpointEdit"
        onClick = {this.props.handleClick}/>
    );
  }
}
