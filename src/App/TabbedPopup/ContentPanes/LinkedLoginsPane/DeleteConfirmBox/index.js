import React from 'react';
import S from './index.module.css';
import ClassNames from 'classnames';
import DeleteButton from './InputComponents/DeleteButton';
import CancelButton from './InputComponents/CancelButton';

export default class DeleteConfirmBox extends React.Component{
  /**delete Function*/
  delete = () => {
    //Declaring fields
    var item = this.props.item;
    var list = this.props.list;
    var previousIndex;

    //Checking list size
    if(list.length === 1){
      //Removing last item
      list.splice(0, 1);

      //Closing box
      this.props.close();

      //Updating list
      this.props.deleteLink("", list);
    }else{
      //Searching list
      for(var i = 0; i < list.length; i++){
        //Searching for item
        if(item === list[i].id){
          //Removing item
          list.splice(i, 1);

          //Checking index
          if(i === 0){
            //Setting previousIndex
            previousIndex = i;
          }else{
            //Setting previousIndex
            previousIndex = (i - 1);
          }

          //Breaking out of loop
          break;
        }
      }

      //Closing box
      this.props.close();

      //Updating list
      this.props.deleteLink(list[previousIndex].id, list);
    }
  }

  /**Rendering Component*/
  render(){
    return(
      <div className = {ClassNames(S[this.props.visibility], S.popup)}>
        <div className = {S.content}>
          <div className = {S.data}>
            <div className = {S.title}> Are you sure you would like to delete
              <span className = {S.item}> {this.props.item}</span>
              <br /> from the list?
            </div>
            <div className = {S.buttons}>
              <DeleteButton handleClick = {this.delete}/>
              <CancelButton handleClick = {this.props.close}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
