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
            {id: 0, value: 0},
            {id: 1, value: 1},
            {id: 2, value: 2},
            {id: 3, value: 3}
        ] 
   }; 
   
   // Functions
   handleIncrement = counter  => {
       console.log ("coumter for Increment: ", counter)
       const newCounters= [...this.state.countersArray]; // ... is spread operator to cloning this array
       //newCounters[0].value++;   // Directly change the countersArray[0], it's forbiden in FReact !!!
                                 // to solve we need to clone the conter at given location so we have a diffrent object than the one in the state

       //newCounters[0] = {...counter};  //  Directly change not allowed 
       //newCounters[0].value++;         //  Directly change not allowed 

       const index= newCounters.indexOf(counter);
       newCounters[index]={...counter};
       newCounters[index].value++;
       //console.log (newCounters[index].value);
       this.setState({countersArray : newCounters});
   }

   handleDecrement = counter  => {
    //console.log ("coumter for Decrement: ", counter)
}   

   handleReset = () => {
    const newCounters = this.state.countersArray.map (c => {
        c.value=0;
        return c;
    })

    this.setState ({countersArray : newCounters});
   };

   handleDelete = counter => {      // key= {counter.id} 
        //console.log("event handle called", counterId);
        const newCounters = this.state.countersArray.filter(c => c.id !== counter.id);
        this.setState ({countersArray : newCounters});
   };


    render() {

        return (
            <div>
                {/* <Counter />
                <Counter />
                <Counter /> */}

                <button  
                    // Call Event Handel
                    onClick={ this.handleReset } 
                    className="btn btn-primary btn-sm m-2">Reset
                </button>

                {this.state.countersArray.map (counter => 
                <Counter
                    key= {counter.id}  // Used internally by react and we should always define it as prop
                    //value= {counter.value}  // better way is define an object as prop rather than its properties !
                    //id= {counter.id}
                    onDelete ={this.handleDelete}
                    onIncrement ={this.handleIncrement}
                    onDecrement ={this.handleDecrement}
                    counter={counter}        // better way is define an object as prop rather than its properties !
                    //selected= {true}>
                >
                    <h4>Counter # {counter.id}</h4>
                </Counter>
                )}

                
            </div>);
   }
}
 
export default Counters;