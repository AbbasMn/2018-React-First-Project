import React, { Component } from "react";

class Counter extends Component {


  
  // Evengt Handler
  // Pass Parameter to Function
  reciverFunction = parameters => {
    this.setState({
      count: (this.props.counter.value = parameters.initialValue)
    });
  };

  senderFunction = () => {
    let x = document.getElementById("inputInitial").value;
    this.reciverFunction({ initialValue: x });
  };

  // Set Style Class Dynamically
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "primary" : "warning";
    return classes;
  }

  // Set Counter Text ot Digit Dynamically
  formatCount() {
    const experesionJSX = "Zero"; //  <h4>Zero</h4>
    return this.props.counter.value === 0
      ? experesionJSX
      : this.props.counter.value;
  }

  render() {
    const { counter, onDeleteCounter, onIncrementCounter, onDecrementCounter } = this.props; //Destrucring

  
  // react code here

    return (
      // Render and return more than HTML element together
      <React.Fragment>
        <div class="col-sm">
          <span className={this.getBadgeClasses()}> {this.formatCount()}</span>

          <button
            onClick={() => onIncrementCounter(counter)} //Destrucring:  this.props.onIncrement(this.props.counter)
            className="btn btn-secondary btn-sm m-2"
          >
            Increment
          </button>

          <button
            onClick={() => onDecrementCounter(counter)} //Destrucring:  this.props.onDecrement(this.props.counter)
            className="btn btn-secondary btn-sm m-2"
          >
            Decrement
          </button>

          <button
            onClick={() => onDeleteCounter(counter)} //Destrucring:  this.props.onDelete(this.props.counter)
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
