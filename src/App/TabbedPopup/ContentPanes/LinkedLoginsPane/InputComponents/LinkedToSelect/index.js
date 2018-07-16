import React from 'react';
import S from './index.module.css';
import SearchTextfield from "./InputComponents/SearchTextfield";
import SearchButton from "./InputComponents/SearchButton";

export default class LinkedToSelect extends React.Component{
  /**Default Constructor*/
  constructor(){
    super();
    this.state = {
      search: ""
    };
  }

  /**optionGenerator Function*/
  optionGenerator = (list) => {
    //Declaring fields
    var optionArray = [];

    //Checking for empty list
    if(list.length !== 0){
      //Iterating through array
      for(var i = 0; i < list.length; i++){
        //Adding to array
        optionArray.push(
          <option key = {i} value = {list[i]}> {list[i]}</option>
        );
      }

      //Returning array
      return optionArray;
    }
  }

  /**Rendering Component*/
  render(){
    return(
      <div>
        <div className = {S.legend}> Linked To This Asset</div>
        <select value = {this.props.value}
          className = {S.selectField}
          id = "selLinkedToAsset"
          size = {14}
          onChange = {(event) => {this.props.setInput(event.target.value)}}>
          {this.optionGenerator(this.props.list)}
        </select>
        <div className = {S.search}>
          <SearchTextfield value = {this.state.search}
            setInput = {(value) => {this.setState({search: value})}}/>
          <SearchButton handleClick = {this.searchList}/>
        </div>
      </div>
    );
  }
}
