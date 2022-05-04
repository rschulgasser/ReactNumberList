import React from 'react';
import AddRandomNumber from './AddRandomNumber';
import SelectedNumbers from './SelectedNumbers';
import { produce } from 'immer';

class NumberPage extends React.Component {

    state = {

        numbers:[],
        selectedNumbers:[],
        lockedNumbers:[]
    }
    
      onAddClick = () => {
       
            const newState = produce(this.state, draftState => {
               
            draftState.numbers.push(this.getRandomInt());
        });

        this.setState(newState);
        

    }
    
  
    getRandomInt = () => {
       let min = 1;
        let max = 1000;
        min = Math.ceil(1);
        max = Math.floor(1000);
        return Math.floor(Math.random() * (max - min) + min);
    
    };
    onSelectClick = n => {

       const newState = produce(this.state, draftState => {
           draftState.selectedNumbers.push(n);
      });

       this.setState(newState);
    }

    onUnselectClick = n => {
        const selectedNumbers = this.state.selectedNumbers.filter(num => n !== num);
        this.setState({ selectedNumbers });
    }

    isSelected = n => {
        const { selectedNumbers } = this.state;
        return selectedNumbers.some(num => n === num);
    }
    onLockClick = n => {
     
        const { lockedNumbers} = this.state;
        const copy = [...lockedNumbers, n];
         this.setState({lockedNumbers: copy});
        //const newState = produce(this.state, draftState => {
        //    draftState.lockedNumbers.push(n);
       // });
      
        
       // this.setState(newState);
    }

    onUnlockClick = n => {
        const lockedNumbers = this.state.lockedNumbers.filter(num => n !== num);
        this.setState({ lockedNumbers });
    }

    isLocked = n => {
        const { lockedNumbers } = this.state;
               return lockedNumbers.some(num => n === num);
    }
    generateSelectedTable =()=>{
        if(this.state.selectedNumbers.length !==0){
        return<div className="row jumbotron">
                        <div className="col-md-6 col-md-offset-3">
                            <h3>Selected Numbers </h3>
                            <ul className="list-group">
                            {this.state.selectedNumbers.map((n, i) => {
                                 return <SelectedNumbers
                                 selectedNumber={n}
                                 isLocked={this.isLocked(n)}
                                 onLockClick={() => this.onLockClick(n)}
                                 onUnlockClick={()=>this.onUnlockClick(n)}
                                 />}
                            )}
                                
                                </ul>
                                </div>
                    </div>
        }
    }

    render() {
       
        return (
           
            <div className='container mt-5'>
                
                 <div id="root">
                <div className="container" >
                    <div className="row">
                        <div className="col-md-12">
                            <button className="btn btn-success btn-lg btn-block" onClick={this.onAddClick}>Add</button>
                    </div></div><div>
          
           <table className="table table-hover table-striped table-bordered">
            <thead><tr>
            <th > </th>
            <th>Add/Remove</th>
            </tr>
            </thead>
            <tbody>
               {this.state.numbers.map((n, i) => {
                        return <AddRandomNumber
                        number={n}
                        numbers={this.state.numbers}
                        onSelectClick={() => this.onSelectClick(n)}
                        onUnselectClick={() => this.onUnselectClick(n)}
                        isSelected={this.isSelected(n)}
                        onAddClick={this.onAddClick}
                        isLocked={this.isLocked(n)}
                        />
                    })
                    }
                     </tbody>
            </table>
                </div>
                </div>
                {this.generateSelectedTable()}
               
                </div>
               
              
       </div>  
       )
                }           
        
    }

export default NumberPage;

