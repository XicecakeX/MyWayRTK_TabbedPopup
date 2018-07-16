import React from 'react';
import S from './index.module.css';
import TabbedPopup from './TabbedPopup';
import PopupButton from './PopupButton';

export default class App extends React.Component{
  /**Default Constructor*/
  constructor(){
    super();
    this.state = {
      visibility: "display"
    }
  }

  /**Rendering Webpage*/
  render(){
    return(
      <div className = {S.center}>
        <TabbedPopup visibility = {this.state.visibility} close = {() => {this.setState({visibility: "hidden"})}}/>
        <PopupButton handleClick = {() => {this.setState({visibility: "display"})}}/>
      </div>
    );
  }
}
