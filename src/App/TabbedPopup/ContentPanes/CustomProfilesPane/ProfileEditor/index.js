import React from 'react';
import ClassNames from 'classnames';
import Editor from './Editor';
import EditButton from './InputComponents/EditButton';
import VerifyButton from './InputComponents/VerifyButton';
import RemoveButton from './InputComponents/RemoveButton';

export default class ProfileEditor extends React.Component{
  /**Default Constructor*/
  constructor(){
    super();
    this.state = {
      data: {
        connectionName: "",
        host: "",
        portNumber: "",
        mountpoint: "",
        username: "",
        password: ""
      },
      display1: "hidden",
      display2: "hidden"
    };
  }

  /**remove Function*/
  remove = () => {
    //Setting state
    this.setState({
      data: {
        connectionName: "",
        host: "",
        portNumber: "",
        mountpoint: "",
        username: "",
        password: ""
      },
      display2: "hidden"
    });
  }

  /**Rendering Component*/
  render(){
    return(
      <tr className = {this.props.row}>
        <td className = {this.props.cell}> {this.state.data.connectionName}</td>
        <td className = {this.props.cell}> {this.state.data.host}</td>
        <td className = {this.props.cell}> {this.state.data.portNumber}</td>
        <td className = {this.props.cell}> {this.state.data.mountpoint}</td>
        <td className = {this.props.cell}> {this.state.data.username}</td>
        <td className = {ClassNames(this.props.cell, this.props.end)}> {this.state.data.password}</td>
        <td className = {this.props.style}>
          <EditButton handleClick = {() => {this.setState({display1: "display"})}}/>
          <VerifyButton/>
          <RemoveButton style = {this.state.display2} handleClick = {this.remove}/>
          <Editor visibility = {this.state.display1}
            close = {() => {this.setState({display1: "hidden"})}}
            setData = {(data) => {this.setState({data: data, display2: "display"})}}/>
        </td>
      </tr>
    );
  }
}
