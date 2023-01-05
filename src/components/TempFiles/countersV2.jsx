// Press imrc+ Tab 
import React, {Component} from 'react';

// import Counter Component
import Counter from '../counter';
import { conditionalExpression } from '@babel/types';

// Press cc+ Tab 
class  Counters extends Component {
    state = {
        countersArray : 
        [
            {id: 1, value: 1},
            {id: 2, value: 2},
            {id: 3, value: 3},
            {id: 4, value: 4}
        ] 
   };    
   // Functions
   handleIncrement = counter => {
       //console.log ("coumter for Increment: ", counter)
       const newCounters= [...this.state.countersArray]; 

       const index= newCounters.indexOf(counter);
       newCounters[index]={...counter};
       newCounters[index].value++;
       this.setState({countersArray : newCounters});
   }

   handleDecrement = counter => {
    //console.log ("coumter for Decrement: ", counter)
    const newCounters= [...this.state.countersArray]; 

    const index= newCounters.indexOf(counter);
    newCounters[index]={...counter};
    newCounters[index].value--;
    this.setState({countersArray : newCounters});
}   

   handleReset = () => {
    const newCounters = this.state.countersArray.map (c => {
        c.value=0;
        return c;
    })

    this.setState ({countersArray : newCounters});
   };

   handleDelete = counter => {     
        const newCounters = this.state.countersArray.filter(c => c.id !== counter.id);
        this.setState ({countersArray : newCounters});
   };

    render() {

        return (
            <div>
                <button  
                    // Call Event Handel
                    onClick={ this.handleReset } 
                    className="btn btn-primary btn-sm m-2">Reset
                </button>

                {this.state.countersArray.map (counter => 
                <Counter
                    key= {counter.id} 
                    onDelete ={this.handleDelete}
                    onIncrement ={this.handleIncrement}
                    onDecrement ={this.handleDecrement}
                    counter={counter}
                >
                    <h4>Counter # {counter.id}</h4>
                </Counter>
                )}

                
            </div>);
   }
}
 
export default Counters;