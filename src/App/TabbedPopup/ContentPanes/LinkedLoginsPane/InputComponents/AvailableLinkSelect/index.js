import React from 'react';
import S from './index.module.css';
import Fuse from 'fuse.js';
import SearchTextfield from "./InputComponents/SearchTextfield";
import SearchButton from "./InputComponents/SearchButton";
import List from '../../list.js';

export default class AvailableLinkSelect extends React.Component{
  /**Default Constructor*/
  constructor(){
    super();
    this.state = {
      options: [],
      search: ""
    };
  }

  /**search Function*/
  search = (value) => {
    //Declaring fields
    var options = {
      shouldSort: true,
      threshold: 0.15,
      location: 0,
      distance: 50,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ["id"]
    };
    var fuse = new Fuse(List, options);
    var result = fuse.search(value);

    //Setting state
    this.setState({options: result, search: value});
  }

  /**optionGenerator Function*/
  optionGenerator = (list) => {
    //Declaring fields
    var optionArray = [];

    //Iterating through array
    for(var i = 0; i < list.length; i++){
      //Adding to array
      optionArray.push(
        <option key = {i} value = {list[i].id}> {list[i].id}</option>
      );
    }

    //Returning array
    return optionArray;
  }

  /**searchList Function*/
  searchList = () => {
    //Declaring fields
    var search = this.state.search;
    var list = this.props.list;
    var found = false;
    var result = "";

    //Iterating through array
    for(var i = 0; i < list.length; i++){
      //Comparing values
      if(list[i].toUpperCase() === search.toUpperCase()){
        //Setting boolean
        found = true;

        //Setting result
        result = list[i];

        //Breaking out of loop
        break;
      }
    }

    //Checking boolean
    if(found === true){
      //Selecting item
      this.props.setInput(result);

      //Setting state
      this.setState({search: ""});
    }else{
      //Displaying error message
      alert('Not Found');
    }
  }

  test = () => {
    console.log(this.props.value);
  }

  /**Rendering Component*/
  render(){
    return(
      <div>
        {this.test()}
        <div className = {S.legend}> Available To Link</div>
        <select value = {this.props.value}
          className = {S.selectField}
          id = "selAvailableToLink"
          size = {14}
          onChange = {(event) => {this.props.setInput(event.target.value)}}>
          {this.optionGenerator(this.props.list)}
        </select>
        <div className = {S.search}>
          <SearchTextfield value = {this.state.search}
            options = {this.state.options}
            setInput = {(value) => {this.search(value)}}/>
        </div>
      </div>
    );
  }
}
