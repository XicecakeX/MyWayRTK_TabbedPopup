import React from 'react';
import S from './index.module.css';
import CustomMountpoint from './CustomMountpoint';

export default class UserDefinedPanel extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <div>
        <div className = {S.legend}> User Defined Mountpoints</div>
        <table align = "center" width = "60%" className = {S.content}>
          <tbody>
            <CustomMountpoint id = "A" style = {S.item}/>
            <CustomMountpoint id = "B"/>
            <CustomMountpoint id = "C" style = {S.item}/>
          </tbody>
        </table>
      </div>
    );
  }
}
