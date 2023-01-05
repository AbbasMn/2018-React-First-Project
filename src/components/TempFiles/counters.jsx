// Press imrc+ Tab 
import React, {Component} from 'react';

// import Counter Component
import Counter from './counter';
//import { conditionalExpression } from '@babel/types';

// Press cc+ Tab 
class  Counters extends Component {
    render() {

        const { countersArray, onResetCounter, onDeleteCounter, onIncrementCounter, onDecrementCounter }= this.props;  //Destrucring

        return (
            <div>
                <button  
                    // Call Event Handel
                    onClick={ ()=> this.props.onResetCounter() } 
                    className="btn btn-primary btn-sm m-2">Reset
                </button>

                {countersArray.map (counter =>  //Before Destrucring:  this.props.countersArray.map
                <Counter
                    key= {counter.id} 
                    onDeleteCounter ={onDeleteCounter}                  //Before Destrucring:  onDelete ={this.props.onDelete}
                    onResetCounter ={onResetCounter}              //Before Destrucring:  onReset ={this.props.onReset}
                    onIncrementCounter ={onIncrementCounter}           //Before Destrucring:  onIncrement ={this.props.onIncrement}
                    onDecrementCounter ={onDecrementCounter}           //Before Destrucring:  onDecrement ={this.props.onDecrement}
                    counter={counter}
                >
                    <h4>Counter # {counter.id}</h4>
                </Counter>
                )}

                
            </div>);
   }
}
 
export default Counters;