import React from 'react';
import ClassNames from 'classnames';

export default class TextInput extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <input type = "text"
        value = {this.props.value}
        className = {ClassNames(this.props.defaultStyle, this.props.style)}
        id = {this.props.id}
        onChange = {(event) => {this.props.setInput(event.target.value)}}/>
    );
  }
}
