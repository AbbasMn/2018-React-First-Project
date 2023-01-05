import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import NavBar from "./components/navBar";
import SideBar from "./components/sideBar";
import Counters from "./components/counters";
//import Slider from "./components/slider";
//import Header from "./components/header";
import Patients from './components/patients';
import PatientForm from './components/patientForm';
import Footer from "./components/footer";


class App1 extends Component {
  state = {
    countersArray: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 }
    ],

    patientsArray :[
      {id: 1, name: 'SAM', family: 'Momntaseri', birthDate: '07/13/1982', physician: 'Dr.Scott'},
      {id: 2, name: 'John', family: 'Anderson', birthDate: '11/09/1992', physician: 'Dr.Rick'},
      {id: 3, name: 'Brad', family: 'Jerard', birthDate: '03/18/1942', physician: 'Dr.John'},
      {id: 4, name: 'Sara', family: 'Teilor', birthDate: '01/10/1992', physician: 'Dr.Philip'}
    ]
  };


  bgColors = {
    Default: "#81b71a",
    Blue: "#00B1E1",
    Cyan: "#37BC9B",
    Green: "#8CC152",
    Red: "#E9573F",
    Yellow: "#F6BB42",
    White: "#fff"
  };


  
  // Patient Functions

  handleDeletePatient = patient =>{
    const newPatients = this.state.patientsArray.filter(
      p => p.id !== patient.id
    )
    this.setState({ patientsArray: newPatients });
  }

  handleEditPatient = patient =>{
    
  }

  handleAddPatient = patient =>{
    
  }

  handleSearchPatient = patient =>{
    
  }


  handleOrderPatient = patient =>{
    
  }

  // ! Patient Functions

  //  Counter Functions

  handleIncrementCounter = counter => {
    //console.log ("coumter for Increment: ", counter)
    const newCounters = [...this.state.countersArray];

    const index = newCounters.indexOf(counter);
    newCounters[index] = { ...counter };
    newCounters[index].value++;
    this.setState({ countersArray: newCounters });
  };

  handleDecrementCounter = counter => {
    //console.log ("coumter for Decrement: ", counter)
    const newCounters = [...this.state.countersArray];

    const index = newCounters.indexOf(counter);
    newCounters[index] = { ...counter };
    newCounters[index].value--;
    this.setState({ countersArray: newCounters });
  };

  handleResetCounter = () => {
    const newCounters = this.state.countersArray.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ countersArray: newCounters });
  };

  handleDeleteCounter = counter => {
    const newCounters = this.state.countersArray.filter(
      c => c.id !== counter.id
    );
    this.setState({ countersArray: newCounters });
  };

  //  ! Counter Functions

  render() {
    
    return (
      // Default Page Structure of APP
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      // Default Page Structure of APP

      // Basic Bootstrap Template
      // https://getbootstrap.com/docs/4.3/examples/dashboard/

      // Basic Bootstrap Template

      <React.Fragment>
        <NavBar totalCounters ={this.state.countersArray.filter(c=> c.value > 0).length}/>

        <main classname="container-fluid">
        
          <div className="row">
             
             <SideBar />

            <div
              className="col-4" 
              style={{ backgroundColor: this.bgColors.White }}
            >
              <h1 style={{ color: this.bgColors.Blue , borderBottom: "5px solid" , borderBottomColor: this.bgColors.Blue }}>React Sample</h1>
              <Counters
                countersArray={this.state.countersArray} // Recieve Data
                onResetCounter={this.handleResetCounter} // Recieve methods to modify the Data
                onIncrementCounter={this.handleIncrementCounter}
                onDecrementCounter={this.handleDecrementCounter}
                onDeleteCounter={this.handleDeleteCounter}               
              />
            </div>

            <div
              className="col-5"
              style={{ backgroundColor: this.bgColors.White }}
            >
              <h1 style={{ color: this.bgColors.Blue , borderBottom: "5px solid" , borderBottomColor: this.bgColors.Blue}} >Register Patients</h1>
              <PatientForm />
            </div>
          
            <div    
              className="col-2"     // This column located in bottomn of SideBar 
              style={{ backgroundColor: this.bgColors.White }}        
            >
              
              </div>




          <div
              className="col-9"
              style={{ backgroundColor: this.bgColors.White }}
            >
              <h1 style={{ color: this.bgColors.Blue , borderBottom: "5px solid" , borderBottomColor: this.bgColors.Blue}}>Patients List</h1>
              <Patients 
                        patientsArray={this.state.patientsArray}
                        onDeletePatient ={this.handleDeletePatient}  
                        onEditPatient ={this.handleEditPatient}       
                        onAddPatient ={this.handleAddPatient}             
                        onSearchPatient ={this.handleSearchPatient}   
                        onOrderPatient ={this.handleOrderPatient}  
              />
            </div>          
          
          </div>


        
        </main>

        <Footer />
      </React.Fragment>
    );
  }
}

export default App1;
