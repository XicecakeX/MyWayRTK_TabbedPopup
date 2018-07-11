import React from 'react';
import S from './index.module.css';
import TabbedPopup from './TabbedPopup';
import Button from './Button';

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
        <Button handleClick = {() => {this.setState({visibility: "display"})}}/>
      </div>
    );
  }
}
