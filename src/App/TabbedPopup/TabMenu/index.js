import React from 'react';
import S from './index.module.css';

export default class TabMenu extends React.Component{
  /**selectTab Function*/
  selectTab = (id) => {
    //Declaring fields
    var selected;

    //Checking id
    if(id === 1){
      //Setting data
      selected = {
        tab1: "selected",
        tab2: "default",
        tab3: "default",
        tab4: "default",
        tab5: "default"
      };
    }else if(id === 2){
      //Setting data
      selected = {
        tab1: "default",
        tab2: "selected",
        tab3: "default",
        tab4: "default",
        tab5: "default"
      };
    }else if(id === 3){
      //Setting data
      selected = {
        tab1: "default",
        tab2: "default",
        tab3: "selected",
        tab4: "default",
        tab5: "default"
      };
    }else if(id === 4){
      //Setting data
      selected = {
        tab1: "default",
        tab2: "default",
        tab3: "default",
        tab4: "selected",
        tab5: "default"
      };
    }else{
      //Setting data
      selected = {
        tab1: "default",
        tab2: "default",
        tab3: "default",
        tab4: "default",
        tab5: "selected"
      };
    }

    //Returning selected
    this.props.setSelected(selected);
  }

  /**Rendering Component*/
  render(){
    return(
      <div className = {S.tabBar}>
        <div className = {S[this.props.selected.tab1]} onClick = {() => {this.selectTab(1)}}> Information</div>
        <div className = {S[this.props.selected.tab2]} onClick = {() => {this.selectTab(2)}}> Mountpoint Manager</div>
        <div className = {S[this.props.selected.tab3]} onClick = {() => {this.selectTab(3)}}> Custom Profiles</div>
        <div className = {S[this.props.selected.tab4]} onClick = {() => {this.selectTab(4)}}> Status</div>
        <div className = {S[this.props.selected.tab5]} onClick = {() => {this.selectTab(5)}}> Linked Logins</div>
      </div>
    );
  }
}
