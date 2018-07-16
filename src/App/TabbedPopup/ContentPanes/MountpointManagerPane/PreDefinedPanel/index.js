import React from 'react';
import S from './index.module.css';

export default class PreDefinedPanel extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <div>
        <div className = {S.legend}> Pre-Defined Mountpoints</div>
        <div className = {S.content}>
          <div className = {S.item1}>
            <div className = {S.title}> MYWAYRTK_GLONASS:</div>
            <div className = {S.data}> </div>
          </div>
          <div className = {S.item2}>
            <div className = {S.title}> MYWAYRTK_LEGACY:</div>
            <div className = {S.data}> </div>
          </div>
          <div className = {S.item1}>
            <div className = {S.title}> MYWAYRTK_JD:</div>
            <div className = {S.data}> </div>
            </div>
        </div>
      </div>
    );
  }
}
