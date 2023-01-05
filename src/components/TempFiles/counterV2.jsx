import React, { Component } from 'react';

class Counter extends Component {   // Component class is parent of Counter class

    // Page Data Holder Section
    //The controlled component (Counter component) doesn’t have own local state {  } 
    //and it receives all the data by ‘props’ and rises an event whenever data needs 
    //to be changed. So this component is entirely controlled by it’s parent.
    
    // state = {      // delete local state        
    //     value : this.props.counter.value
    // };


    // Functions

    // Evengt Handler
    // Pass Parameter to Function
    reciverFunction = (parameters) => {
        //console.log('parameter: ', parameter.initialvalue);
        //this.setState({ count: this.state.value = parameters.initialValue }); // Instead use the props.counter.value
        this.setState({ count: this.props.counter.value = parameters.initialValue });
    }

    senderFunction = () => {
        let x = document.getElementById('inputInitial').value;
        this.reciverFunction({ initialValue : x });
    }

    //Second Way for Access to this.state
    // handleIncrement = () => {    // delete this method because the parent will tacke care of Increment
    //     //console.log('count', this.state);
    //     this.setState({ count: ++ this.state.value });
    // }  
    
    // handleDecrement = () => {   // delete this method because the parent will tacke care of Decrement
    //     //console.log('count', this.state);
    //     if(this.state.value !== 0)
    //         this.setState({ count: -- this.state.value });
    // }     
        

    // Set Style Class Dynamically
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "primary" : "warning";
        return classes;
    }
    
    // Set Counter Text ot Digit Dynamically
    formatCount() {
        //const { count } = this.state.count;
        const experesionJSX = 'Zero'; // MyCode <h4>Zero</h4>
        return this.props.counter.value === 0 ? experesionJSX : this.props.counter.value;
    }

    
    render() {   
        //console.log("props",this.props);            
        return (             
            // Render and return more than HTML element together 
            <React.Fragment>  
                {/* Render Childeren */}
                {this.props.children}

                {/* Set Style Class Dynamically */}
                <span className= { this.getBadgeClasses() }> { this.formatCount() }</span>
                {/* Styling with Bootstrap  */}
                <button  
                    // Call Event Handel
                    // onClick={ this.handleIncrement } //instead refrencing handleIncrement method we 
                                                        //are calling a onIncrement method in props object
                    onClick={()=> this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm m-2">Increment
                </button>

                <button  
                    // Call Event Handel
                    //onClick={ this.handleDecrement }   //instead refrencing handleIncrement method we 
                                                        //are calling a onIncrement method in props object
                    onClick={()=> this.props.onDecrement(this.props.counter)}
                    className="btn btn-secondary btn-sm m-2">Decrement
                </button> 

                <button  
                    // 
                    onClick= {()=> this.props.onDelete(this.props.counter.id)} 
                    className="btn btn-danger btn-sm m-2">Delete
                </button>                 

                <br></br>                         

            </React.Fragment>
        );
    }

}
 
export default Counter;