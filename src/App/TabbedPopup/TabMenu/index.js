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
        tab4: "default"
      };
    }else if(id === 2){
      //Setting data
      selected = {
        tab1: "default",
        tab2: "selected",
        tab3: "default",
        tab4: "default"
      };
    }else if(id === 3){
      //Setting data
      selected = {
        tab1: "default",
        tab2: "default",
        tab3: "selected",
        tab4: "default"
      };
    }else{
      //Setting data
      selected = {
        tab1: "default",
        tab2: "default",
        tab3: "default",
        tab4: "selected"
      };
    }

    //Returning selected
    this.props.setSelected(selected);
  }

  /**Rendering Component*/
  render(){
    return(
      <table width = "100%"
        cellPadding = "0px"
        cellSpacing = "0px"
        className = {S.tabBar}>
        <tbody>
          <tr>
            <td className = {S[this.props.selected.tab1]} onClick = {() => {this.selectTab(1)}}> Information</td>
            <td className = {S[this.props.selected.tab2]} onClick = {() => {this.selectTab(2)}}> Mountpoint Manager</td>
            <td className = {S[this.props.selected.tab3]} onClick = {() => {this.selectTab(3)}}> Custom Profiles</td>
            <td className = {S[this.props.selected.tab4]} onClick = {() => {this.selectTab(4)}}> Status</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
