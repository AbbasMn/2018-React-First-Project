import React, { Component } from 'react';

class Counter extends Component {   // Component class is parent of Counter class

    // My Code: Page Data Holder Section
    state = {  
        counter: 5,
        
        address: {
            country:'USA',
            state: 'Texas',
            city:'Austin',
            street:'Research Blvd.',
            zipcode:'78751'
        },
        
        // Generate Random Picture
        imagUrl: 'https://picsum.photos/200',

        programingLanguage : ['C#','C','C++','Java','JavaScript','Phyton']
    };

    // Define Styles
    styles = {
        backgroundColor: 'yellow',
        color: 'red',
        fontWeight: 'regular',
        fontSize: '12pt'
    };

    // Counter Class Constructor
    // First Way for Access to this.state
    // constructor (){
    //     super();  // Component Class (Parent Class) Constructor    // class Counter extends Component {...}  
    //     //console.log('constructor', this);
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // myCode: Functions

    // Evengt Handler
    // Pass Parameter to Function
    reciverFunction = (parameters) => {
        //console.log('parameter: ', parameter.initialvalue);
        this.setState({ counter: this.state.counter = parameters.initialValue });
    }

    senderFunction = () => {
        let x = document.getElementById('inputInitial').value;
        this.reciverFunction({ initialValue : x });
    }

    //Second Way for Access to this.state
    handleIncrement = () => {
        //console.log('Counter', this.state);
        this.setState({ counter: ++ this.state.counter });
    }  
    
    handleDecrement = () => {
        //console.log('Counter', this.state);
        if(this.state.counter !== 0)
            this.setState({ counter: -- this.state.counter });
    }     
    
    // Evengt Handler
    //First Way for Access to this.state and must used with a construction
    //handleIncrement(){
    //     console.log('Counter', this.state);
    // }
    
    // Conditional List Rendering
    renderConditionalList()
    {        
        // if(this.state.programingLanguage.length === 0 ) return <p>There is no Programming language to show !</p>        
        {/* // MyCode: programingLanguage goes to ... */}
        return <ul> { this.state.programingLanguage.map (programingLanguage => <li key= { programingLanguage }>{ programingLanguage }</li>)} </ul>;
    }

    // Set Style Class Dynamically
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.counter === 0 ? "primary" : "warning";
        return classes;
    }
    
    // Set Counter Text ot Digit Dynamically
    formatCount() {
        //const { count } = this.state.counter;
        const experesionJSX = 'Zero'; // MyCode <h4>Zero</h4>
        return this.state.counter === 0 ? experesionJSX : this.state.counter;
    }

    
    render() {  
        const { address } = this.state.address; // Question ?              
        return (            
            // Render and return more than HTML element together 
            <React.Fragment>
                <h1>Hi Austin and ...</h1>
                <br></br>         
                
                {/* Set Style Class Dynamically */}
                <span className= { this.getBadgeClasses() }> { this.formatCount() }</span>
                {/* Styling with Bootstrap  */}
                <button  
                    // Call Event Handel
                    onClick={ this.handleIncrement } 
                    className="btn btn-secondary btn-sm m-2">Increment
                </button>

                <button  
                    // Call Event Handel
                    onClick={ this.handleDecrement } 
                    className="btn btn-secondary btn-sm m-2">Decrement
                </button>  

                <button  
                    // Send Parameter to Function
                    //onClick={ this.senderFunction } 

                    // Inline Function used here
                    onClick={ ()=> this.reciverFunction ( { initialValue : 2000 } )} 
                    className="btn btn-secondary btn-sm m-2">Send Parameter for Initial Counter
                </button>   

                Initial Value: <input id="inputInitial"></input>                           
                <br></br><br></br>
                {/* Styling with Inside Page Style  */}
                <span style={ this.styles } >The Address is: 
                    {/* Styling with Inline Style  */}
                    <pre style={{color: 'blue', fontSize: '20px' , fontWeight: 'bold'}}>
                        {/* Use Data from State Data Holder */}
                        { this.state.address.city}, { this.state.address.street }, 
                        <br></br>
                        { this.state.address.city }, { this.state.address.state }, { this.state.address.country }
                    </pre>
                </span>
                <span>Change HTML attribute values dynamicaly</span>
                <br></br>
                {/* Use Data from State Data Holder */}
                <pre><img src= { this.state.imagUrl }></img></pre> 
                {/* Styling with Bootstrap  */}             
                <span className="badge badge-primary m-2" >Change the style and className dynamicaly</span>
                <br></br>
                {/* // Render a list of objects (Items) */}
                <span>Programming Languages:</span>
                {/* Conditional List Rendering */}
                { this.state.programingLanguage.length === 0 && "There is no Programming language to show !" }
                { this.renderConditionalList() }

            </React.Fragment>
        ); 
    }

}
 
export default Counter;