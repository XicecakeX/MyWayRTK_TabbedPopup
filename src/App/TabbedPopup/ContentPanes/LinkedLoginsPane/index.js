import React from 'react';
import S from './index.module.css';
import AvailableLinkSelect from './InputComponents/AvailableLinkSelect';
import LinkedToSelect from './InputComponents/LinkedToSelect';
import LinkButton from './InputComponents/LinkButton';
import UnlinkButton from './InputComponents/UnlinkButton';
import LinkedCheckbox from './InputComponents/LinkedCheckbox';
import InvalidCheckbox from './InputComponents/InvalidCheckbox';
import AddButton from './InputComponents/AddButton';
import DeleteButton from './InputComponents/DeleteButton';
import AddBox from './AddBox';
import DeleteConfirmBox from './DeleteConfirmBox';
import List from './list';

export default class LinkedLoginsPane extends React.Component{
  /**Default Constructor*/
  constructor(){
    super();
    this.state = {
      available: List[0].id,
      availableList: List,
      linkedTo: "",
      linkedToList: [],
      linked: false,
      invalid: false,
      displayAddBox: "hidden",
      displayDeleteBox: "hidden"
    };
  }

  /**Rendering Component*/
  render(){
    return(
      <div className = {S.content}>
        <div className = {S.contentSide}>
          <AvailableLinkSelect value = {this.state.available}
            list = {List}
            setInput = {(value) => {this.setState({available: value})}}/>
        </div>
        <div className = {S.contentCenter}>
          <div className = {S.linkButtons}>
            <LinkButton handleClick = {this.link}/>
            <UnlinkButton handleClick = {this.unlink}/>
          </div>
          <div className = {S.view}>
            <div className = {S.title}> View</div>
            <div className = {S.checkbox}>
              <LinkedCheckbox checked = {this.state.linked}
                setInput = {(value) => {this.setState({linked: value})}}/> Linked to others
            </div>
            <div className = {S.checkbox}>
              <InvalidCheckbox checked = {this.state.invalid}
                setInput = {(value) => {this.setState({invalid: value})}}/> Invalid logins
            </div>
          </div>
          <div className = {S.addRemoveButtons}>
            <AddButton handleClick = {() => {this.setState({displayAddBox: "display"})}}/>
            <AddBox visibility = {this.state.displayAddBox}
              addLink = {(item, list) => {this.setState({available: item, availableList: list})}}
              list = {List}
              item = {this.state.available}
              close = {() => {this.setState({displayAddBox: "hidden"})}}/>
            <DeleteButton handleClick = {() => {this.setState({displayDeleteBox: "display"})}}/>
            <DeleteConfirmBox visibility = {this.state.displayDeleteBox}
              deleteLink = {(item, list) => {this.setState({available: item, availableList: list})}}
              list = {List}
              item = {this.state.available}
              close = {() => {this.setState({displayDeleteBox: "hidden"})}}/>
          </div>
        </div>
        <div className = {S.contentSide}>
          <LinkedToSelect value = {this.state.linkedTo}
            list = {this.state.linkedToList}
            setInput = {(value) => {this.setState({linkedTo: value})}}/>
        </div>
      </div>
    );
  }
}
