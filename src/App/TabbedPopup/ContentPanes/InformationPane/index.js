import React from 'react';
import S from './index.module.css';
import EditButton from './InputComponents/EditButton';
import SaveButton from './InputComponents/SaveButton';
import ESNText from './InputComponents/ESNTextfield';

export default class InformationPane extends React.Component{
  /**Default Constructor*/
  constructor(){
    super();
    this.state = {
      ESN: "",
      display1: "display",
      display2: "hidden"
    };
  }

  /**Rendering Component*/
  render(){
    return(
      <table width = "100%" className = {S.content}>
        <tbody>
          <tr className = {S.item}>
            <td className = {S.title}> Address:</td>
            <td className = {S.data}> </td>
          </tr>
          <tr>
            <td className = {S.title}> Phone:</td>
            <td className = {S.data}> </td>
          </tr>
          <tr className = {S.item}>
            <td className = {S.title}> Reseller:</td>
            <td className = {S.data}> </td>
          </tr>
          <tr>
            <td className = {S.title}> Last Login Time:</td>
            <td className = {S.data}> </td>
          </tr>
          <tr className = {S.item}>
            <td className = {S.title}> User Agent:</td>
            <td className = {S.data}> </td>
          </tr>
          <tr>
            <td className = {S.title}> ESN:</td>
            <td className = {S.data}>
              <div className = {S[this.state.display1]}> {this.state.ESN}</div>
              <EditButton style = {S[this.state.display1]} handleClick = {() => {this.setState({display1: "hidden", display2: "display"})}}/>
              <ESNText value = {this.state.ESN}
                style = {S[this.state.display2]}
                setInput = {(value) => {this.setState({ESN: value})}}/>
              <SaveButton style = {S[this.state.display2]} handleClick = {() => {this.setState({display1: "display", display2: "hidden"})}}/>
            </td>
          </tr>
          <tr className = {S.item}>
            <td className = {S.title}> Last GPGGA:</td>
            <td className = {S.data}> </td>
          </tr>
          <tr>
            <td className = {S.title}> Last GPGGA Time:</td>
            <td className = {S.data}> </td>
          </tr>
          <tr className = {S.item}>
            <td className = {S.title}> Last/Current Mountpoint Connected:</td>
            <td className = {S.data}> </td>
          </tr>
          <tr>
            <td className = {S.title}> Latitude:</td>
            <td className = {S.data}> </td>
          </tr>
          <tr className = {S.item}>
            <td className = {S.title}> Longitude:</td>
            <td className = {S.data}> </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
