import React from 'react';
import S from './index.module.css';

export default class PreDefinedPanel extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <div>
        <div className = {S.legend}> Pre-Defined Mountpoints</div>
        <table width = "100%" className = {S.content}>
          <tbody>
            <tr className = {S.item}>
              <td className = {S.title}> MYWAYRTK_GLONASS:</td>
              <td className = {S.data}> </td>
            </tr>
            <tr>
              <td className = {S.title}> MYWAYRTK_LEGACY:</td>
              <td className = {S.data}> </td>
            </tr>
            <tr className = {S.item}>
              <td className = {S.title}> MYWAYRTK_JD:</td>
              <td className = {S.data}> </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
