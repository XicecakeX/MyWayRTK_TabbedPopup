import React from 'react';
import S from './index.module.css';
import ClassNames from 'classnames';
import ProfileEditor from './ProfileEditor';

export default class CustomProfilesPane extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <table align = "center" width = "95%" className = {S.content}>
        <tbody>
          <tr>
            <th className = {S.top}> Connection Name</th>
            <th className = {S.top}> Host</th>
            <th className = {S.top}> Port Number</th>
            <th className = {S.top}> Mountpoint</th>
            <th className = {S.top}> Username</th>
            <th className = {ClassNames(S.end, S.top)}> Password</th>
            <th className = {S.button}></th>
          </tr>
          <ProfileEditor style = {S.button} cell = {S.cell} end = {S.end} row = {S.item}/>
          <ProfileEditor style = {S.button} cell = {S.cell} end = {S.end}/>
          <ProfileEditor style = {S.button} cell = {S.cell} end = {S.end} row = {S.item}/>
          <ProfileEditor style = {S.button} cell = {S.cell} end = {S.end}/>
          <ProfileEditor style = {S.button} cell = {S.bottom} end = {S.end} row = {S.item}/>
        </tbody>
      </table>
    );
  }
}
