import React, { useState } from "react";
const BuggyFunction =() => {

// import React, { Component } from "react";
// class BuggyFunction extends React.Component {
//   constructor(props) {
//     super(props);
//   }


  const generateError = () => {
    var x;
    // try {
      throw new Error("my error");
    // } catch (e) {
    //   console.error(e.message);
    // } finally {
    //   console.error("finally");
    // }
  } 
  // render() {


  
    return (
      <div>
        {/* <button onClick={this.generateError}>Throw Exception</button> */}
        <button onClick={generateError}>Throw Exception</button>
      </div>
    );
  // }
}

export default BuggyFunction;
