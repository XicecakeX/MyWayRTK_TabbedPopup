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
      add: ""
    };
  }

  /**Rendering Component*/
  render(){
    return(
      <div className = {ClassNames(S[this.props.visibility], S.popup)}>
        <div className = {S.content}>
          <div className = {S.data}>
            <div className = {S.textbox}>
              <div className = {S.title}> Add New Link</div>
              <AddTextfield value = {this.state.add} setInput = {(value) => {this.setState({add: value})}}/>
            </div>
            <div className = {S.buttons}>
              <AddButton handleClick = {this.add}/>
              <CancelButton handleClick = {this.props.close}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
