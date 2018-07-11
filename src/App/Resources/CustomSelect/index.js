import React from 'react';
import S from './index.module.css';
import ClassNames from 'classnames';

export default class CustomSelect extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <select value = {this.props.value}
        className = {ClassNames(this.props.style, S.selectField)}
        id = "selCustom"
        onChange = {(event) => {this.props.setInput(event.target.value)}}>
        <option disabled hidden> NONE</option>
        <option value = "Custom - Indot"> CUSTOM - INDOT</option>
        <option disabled> ---------------</option>
        <option value = "RTCM#AUTOMOUNT#"> MYWAYRTK_GLONASS</option>
        <option value = "CMR#AUTOMOUNT#"> MYWAYRTK_LEGACY</option>
        <option value = "JD#AUTOMOUNT#"> MYWAYRTK_JD</option>
        <option disabled> ---------------</option>
        <option value = "Arizona"> MyWay - Arizona</option>
        <option value = "Arkansas"> MyWay - Arkansas</option>
        <option value = "California"> MyWay - California</option>
        <option value = "Canada"> MyWay - Canada</option>
        <option value = "Idaho"> MyWay - Idaho</option>
        <option value = "Illinois"> MyWay - Illinois</option>
        <option value = "Indiana"> MyWay - Indiana</option>
        <option value = "Iowa"> MyWay - Iowa</option>
        <option value = "Kansas"> MyWay - Kansas</option>
        <option value = "Kentucky"> MyWay - Kentucky</option>
        <option value = "Michigan"> MyWay - Michigan</option>
        <option value = "Mississippi"> MyWay - Mississippi</option>
        <option value = "Missouri"> MyWay - Missouri</option>
        <option value = "Nebraska"> MyWay - Nebraska</option>
        <option value = "New York"> MyWay - New York</option>
        <option value = "North Dakota"> MyWay - North Dakota</option>
        <option value = "Ohio"> MyWay - Ohio</option>
        <option value = "Oregon"> MyWay - Oregon</option>
        <option value = "Tennessee"> MyWay - Tennessee</option>
        <option value = "Wisconsin"> MyWay - Wisconsin</option>
      </select>
    );
  }
}
