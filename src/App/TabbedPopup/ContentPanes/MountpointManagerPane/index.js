import React from 'react';
import PreDefinedPanel from './PreDefinedPanel';
import UserDefinedPanel from './UserDefinedPanel';

export default class MountpointManagerPane extends React.Component{
  /**Rendering Component*/
  render(){
    return(
      <div>
        <PreDefinedPanel />
        <UserDefinedPanel />
      </div>
    );
  }
}
