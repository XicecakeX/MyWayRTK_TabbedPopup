import React from 'react';
import S from './index.module.css';
import ClassNames from 'classnames';
import ConnectionNameTextfield from './InputComponents/ConnectionNameTextfield';
import HostTextfield from './InputComponents/HostTextfield';
import MountpointTextfield from './InputComponents/MountpointTextfield';
import PasswordTextfield from './InputComponents/PasswordTextfield';
import PortNumberTextfield from './InputComponents/PortNumberTextfield';
import UsernameTextfield from './InputComponents/UsernameTextfield';
import SaveButton from './InputComponents/SaveButton';
import CancelButton from './InputComponents/CancelButton';

export default class Editor extends React.Component{
  constructor(){
    super();
    this.state = {
      connectionName: "",
      host: "",
      portNumber: "",
      mountpoint: "",
      username: "",
      password: "",
      errorBorders: {
        connectionName: "",
        host: "",
        portNumber: "",
        mountpoint: "",
        username: "",
        password: ""
      },
      errorMessage: ""
    };
  }

  /**save Function*/
  save = () => {
    //Declaring fields
    var data = {
      connectionName: this.state.connectionName,
      host: this.state.host,
      portNumber: this.state.portNumber,
      mountpoint: this.state.mountpoint,
      username: this.state.username,
      password: this.state.password
    };

    //Checking for empty fields
    var results = this.emptyCheck(data);

    if(results.errorsDetected === false){
      //Setting data
      this.props.setData(data);

      //Calling close function
      this.close();

      //Setting state
      this.setState({
        errorBorders: results.borders,
        errorMessage: ""
      });
    }else{
      //Setting state
      this.setState({
        errorBorders: results.borders,
        errorMessage: "Highlighted fields cannot be empty!"
      });
    }
  }

  /**close Function*/
  close = () => {
    //Calling close function
    this.props.close();

    //Resetting state
    this.setState({
      connectionName: "",
      host: "",
      portNumber: "",
      mountpoint: "",
      username: "",
      password: "",
      errorBorders: {
        connectionName: "",
        host: "",
        portNumber: "",
        mountpoint: "",
        username: "",
        password: ""
      },
      errorMessage: ""
    });
  }

  /**emptyCheck Function*/
  emptyCheck = (data) => {
    //Declaring fields
    var size = this.countProperties(data);
    var props = Object.getOwnPropertyNames(data);
    var emptyCheck = {
      errorsDetected: false,
      borders: {
        connectionName: "",
        host: "",
        portNumber: "",
        mountpoint: "",
        username: "",
        password: ""
      }
    };

    //Iterating through object
    for(var i = 0; i < size; i++){
      //Checking if field is empty
      if(data[props[i]] === ""){
        //Setting boolean
        emptyCheck.errorsDetected = true;

        //Setting border data
        emptyCheck.borders[props[i]] = "errorBorder";
      }else{
        //Setting border data
        emptyCheck.borders[props[i]] = "";
      }
    }

    //Returning results
    return emptyCheck;
  }

  /**countProperties Function*/
  countProperties = (obj) => {
    //Declaring fields
    var size = 0;

    //Iterating through object
    for(var property in obj){
      //Checking object property
      if(Object.prototype.hasOwnProperty.call(obj, property)){
        //Increasing size
        size++;
      }
    }

    //Returning size
    return size;
  }

  /**Rendering Component*/
  render(){
    return(
      <div className = {ClassNames(S[this.props.visibility], S.popup)}>
        <div className = {S.content}>
          <div className = {S.data}>
            <div className = {S.item}>
              <div className = {S.title}> Connection Name</div>
              <div className = {S.input}>
                <ConnectionNameTextfield value = {this.state.connectionName}
                  border = {this.state.errorBorders.connectionName}
                  setInput = {(value) => {this.setState({connectionName: value})}}/>
              </div>
            </div>
            <div className = {S.item}>
              <div className = {S.title}> Host</div>
              <div className = {S.input}>
                <HostTextfield value = {this.state.host}
                  border = {this.state.errorBorders.host}
                  setInput = {(value) => {this.setState({host: value})}}/>
              </div>
            </div>
            <div className = {S.item}>
              <div className = {S.title}> Port Number</div>
              <div className = {S.input}>
                <PortNumberTextfield value = {this.state.portNumber}
                  border = {this.state.errorBorders.portNumber}
                  setInput = {(value) => {this.setState({portNumber: value})}}/>
              </div>
            </div>
            <div className = {S.item}>
              <div className = {S.title}> Mountpoint</div>
              <div className = {S.input}>
                <MountpointTextfield value = {this.state.mountpoint}
                  border = {this.state.errorBorders.mountpoint}
                  setInput = {(value) => {this.setState({mountpoint: value})}}/>
              </div>
            </div>
            <div className = {S.item}>
              <div className = {S.title}> Username</div>
              <div className = {S.input}>
                <UsernameTextfield value = {this.state.username}
                  border = {this.state.errorBorders.username}
                  setInput = {(value) => {this.setState({username: value})}}/>
              </div>
            </div>
            <div className = {S.item}>
              <div className = {S.title}> Password</div>
              <div className = {S.input}>
                <PasswordTextfield value = {this.state.password}
                  border = {this.state.errorBorders.password}
                  setInput = {(value) => {this.setState({password: value})}}/>
              </div>
            </div>
            <div className = {S.errorMessage}> {this.state.errorMessage}</div>
            <div>
              <SaveButton handleClick = {this.save}/>
              <CancelButton handleClick = {this.close}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
