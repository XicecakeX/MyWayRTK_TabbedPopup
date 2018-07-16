import React from 'react';
import S from './index.module.css';

export default class AvailableSearchTextfield extends React.Component{
  /**optionGenerator Function*/
  optionGenerator = (options) => {
    //Declaring fields
    var optionArray = [];

    //Iterating through array
    for(var i = 0; i < options.length; i++){
      //Adding to array
      optionArray.push(
        <option key = {i} value = {options[i].id}> {options[i].id}</option>
      );
    }

    //Returning array
    return optionArray;
  }

  /**Rendering Component*/
  render(){
    return(
      <div className = {S.content}>
        <input list = "options"
          value = {this.props.value}
          className = {S.textfield}
          id = "txtAvailableSearch"
          placeholder = "Search"
          onChange = {(event) => {this.props.setInput(event.target.value)}}/>
        <datalist id = "options">
          {this.optionGenerator(this.props.options)}
        </datalist>
      </div>
    );
  }
}
