import React from 'react';
import { keyCodes } from 'reactstrap/lib/utils';


class AddRandomNumber extends React.Component {
    GenerateRow = (number) => {
        const { onSelectClick,onUnselectClick,isSelected, isLocked} = this.props;
        number=number;
        return <tr><td>{number}</td><td> 
             <button disabled={isLocked && isSelected} className={`btn btn-${isSelected ? 'danger': 'success'}`} onClick={isSelected ? onUnselectClick : onSelectClick}>
                        {isSelected ? 'Unselect' : 'Select'} 
                    </button></td></tr>
     }
  
    render() {
      
        const {number, numbers, onAddClick } = this.props;
        return (
            this.GenerateRow(number)
        );
    }
}

export default AddRandomNumber;
