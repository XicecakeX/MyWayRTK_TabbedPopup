import React from 'react';
import S from './index.module.css';
import ClassNames from 'classnames';

export default class InfoBox extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <div className = {ClassNames(S[this.props.visibility], S.popup)}>
        <div className = {S.content}>
          <div className = {S.data}>
            <div className = {S.title}> SmartMount</div>
            <div className = {S.info}>
              SmartMount gives the ability to automatically failover from a MyWay
              RTK mountpoint (MYWAYRTK_GLONASS, MYWAYRTK_LEGACY or MYWAYRTK_JD) to
              your FIRST Custom Profile. Once enabled, if your closest base station
              goes down, you will automatically failover to your first Custom Profile
              should you be 18 miles or greater away from the next closest MyWay RTK
              base station.<br /><br />
              Notice: With this feature, there could be cases where guidance lines
              may not match. The best practice is the manually connect to your Custom
              Profile and then to the MyWay RTK base to verify if you have a position
              shift.
            </div>
            <input type = "button"
              value = "Close"
              className = {S.button}
              id = "btnInfoClose"
              onClick = {this.props.close}/>
          </div>
        </div>
      </div>
    );
  }
}
