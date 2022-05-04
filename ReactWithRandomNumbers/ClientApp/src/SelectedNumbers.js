import React from 'react';
import { keyCodes } from 'reactstrap/lib/utils';


class SelectedNumbers extends React.Component {
    GenerateRow = (selectedNumber) => {
        const { onLockClick, onUnlockClick, isLocked}= this.props;
   
        return <li className="list-group-item">{selectedNumber}<button onClick={ isLocked ? onUnlockClick : onLockClick} className="ml-3 btn btn-primary" >
             { isLocked ? 'Unlock':'Lock'}</button>
        </li>
     }
  
    render() {
      
        const {selectedNumber} = this.props;
        return (
           this.GenerateRow(selectedNumber)
        );
    }
}

export default SelectedNumbers;