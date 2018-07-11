import React from 'react';
import S from './index.module.css';
import StartButton from './StartButton';

export default class StatusPane extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <div>
        <table align = "center" width = "40%" className = {S.content}>
          <tbody>
            <tr className = {S.item}>
              <td className = {S.title}> Currently:</td>
              <td className = {S.data}>

              </td>
            </tr>
            <tr>
              <td className = {S.title}> Distance To Base:</td>
              <td className = {S.data}>

              </td>
            </tr>
            <tr className = {S.item}>
              <td className = {S.title}> Active Logins:</td>
              <td className = {S.data}>

              </td>
            </tr>
          </tbody>
        </table>
        <StartButton />
      </div>
    );
  }
}
