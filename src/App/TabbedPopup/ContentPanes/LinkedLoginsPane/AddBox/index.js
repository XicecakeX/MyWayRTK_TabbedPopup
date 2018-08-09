import React from 'react';
import S from './index.module.css';
import ClassNames from 'classnames';
import AddTextfield from './InputComponents/AddTextfield';
import AddButton from './InputComponents/AddButton';
import CancelButton from './InputComponents/CancelButton';

export default class AddBox extends React.Component{
  /**Default Constructor*/
  constructor(){
    super();
    this.state = {
      add: "",
      errorBorder: "",
      errorMessage: ""
    };
  }

  /**add Function*/
  add = () => {
    //Declaring fields
    var list = this.props.list;
    var item = {id: this.state.add};
    var previousItem = this.props.item;
    var duplicateFound = false;

    //Checking if field is empty
    if(this.state.add === ""){
      //Setting state
      this.setState({errorBorder: "errorBorder", errorMessage: "Field cannot be empty!"});
    }else{
      //Checking for duplicates
      for(var i = 0; i < list.length; i++){
        //Comparing values
        if(item.id.toUpperCase() === list[i].id.toUpperCase()){
          //Setting boolean
          duplicateFound = true;

          //Breaking out of loop
          break;
        }
      }

      //Checking boolean
      if(duplicateFound === true){
        //Setting state
        this.setState({errorBorder: "errorBorder", errorMessage: "Link already exists!"});
      }else{
        //Adding to list
        list.push(item);

        //Checking previousItem
        if(previousItem === ""){
          //Updating list
          this.props.addLink(item.id, list);
        }else{
          //Updating list
          this.props.addLink(previousItem, list);
        }

        //Closing box
        this.props.close();

        //Setting state
        this.setState({add: "", errorBorder: "", errorMessage: ""});
      }
    }
  }

  /**close Function*/
  close = () => {
    //Closing box
    this.props.close();

    //Setting state
    this.setState({add: "", errorBorder: "", errorMessage: ""});
  }

  /**Rendering Component*/
  render(){
    return(
      <div className = {ClassNames(S[this.props.visibility], S.popup)}>
        <div className = {S.content}>
          <div className = {S.data}>
            <div className = {S.textbox}>
              <div className = {S.title}> Add New Link</div>
              <AddTextfield value = {this.state.add}
                style = {this.state.errorBorder}
                setInput = {(value) => {this.setState({add: value})}}/>
            </div>
            <div className = {S.errorMessage}> {this.state.errorMessage}</div>
            <div className = {S.buttons}>
              <AddButton handleClick = {this.add}/>
              <CancelButton handleClick = {this.close}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
