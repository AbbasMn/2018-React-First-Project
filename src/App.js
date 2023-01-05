import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import NavBar from "./components/navBar";
import SideBar from "./components/sideBar";
import Counters from "./components/counters";
import Patients from "./components/patients";
import Footer from "./components/footer";
import PatientForm from "./components/patientForm";
import TestHook from "./components/Hooks/testHook";

import ErrorBoundary from "./components/ErrorHandeling/errorBoundary";
import BuggyFunction from "./components/ErrorHandeling/buggyFunction";
import BuggyComponent from "./components/ErrorHandeling/buggyComponent";

class App extends Component {
  state = {
    personArray: [
      { id: 1, name: "Ali from outer component", age: 35 },
      { id: 2, name: "Abbas from outer component", age: 40 },
      { id: 3, name: "Afrooz from outer component", age: 30 },
      { id: 4, name: "Amir from outer component", age: 40 }
    ],

    countersArray: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 }
    ],

    patientsArray: [
      {
        id: 1,
        name: "SAM",
        family: "Momntaseri",
        birthDate: "1982-11-06",
        physician: "Dr.Scott"
      },
      {
        id: 2,
        name: "John",
        family: "Anderson",
        birthDate: "1982-11-06",
        physician: "Dr.Rick"
      },
      {
        id: 3,
        name: "Brad",
        family: "Jerard",
        birthDate: "1982-11-06",
        physician: "Dr.John"
      },
      {
        id: 4,
        name: "Sara",
        family: "Teilor",
        birthDate: "1982-11-06",
        physician: "Dr.Philip"
      },
      {
        id: 5,
        name: "SAM",
        family: "Momntaseri",
        birthDate: "1982-11-06",
        physician: "Dr.Scott"
      },
      {
        id: 6,
        name: "John",
        family: "Anderson",
        birthDate: "1982-11-06",
        physician: "Dr.Rick"
      },
      {
        id: 7,
        name: "Brad",
        family: "Jerard",
        birthDate: "1982-11-06",
        physician: "Dr.John"
      },
      {
        id: 8,
        name: "Sara",
        family: "Teilor",
        birthDate: "1982-11-06",
        physician: "Dr.Philip"
      },
      {
        id: 9,
        name: "SAM",
        family: "Momntaseri",
        birthDate: "1982-11-06",
        physician: "Dr.Scott"
      },
      {
        id: 10,
        name: "John",
        family: "Anderson",
        birthDate: "1982-11-06",
        physician: "Dr.Rick"
      },
      {
        id: 11,
        name: "Brad",
        family: "Jerard",
        birthDate: "1982-11-06",
        physician: "Dr.John"
      },
      {
        id: 12,
        name: "Sara",
        family: "Teilor",
        birthDate: "1982-11-06",
        physician: "Dr.Philip"
      }
    ]
  };
  // ! state

  //newPatient = new Object(BusinessClassess.patientObject);

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

  handleDeletePatient = patient => {
    const newPatients = this.state.patientsArray.filter(
      p => p.id !== patient.id
    );
    this.setState({ patientsArray: newPatients });
  };

  handleEditPatient = patient => {};

  handleAddPatient = newPatient => {};

  handleSearchPatient = patient => {};

  handleOrderPatient = patient => {};

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
        <NavBar
          totalCounters={
            this.state.countersArray.filter(c => c.value > 0).length
          }
        />

        <main className="container-fluid">
          <div className="row">
            <SideBar />

            <div
              className="col-md-10"
              style={{ backgroundColor: this.bgColors.White }}
            >
              <h1
                style={{
                  color: this.bgColors.Blue,
                  borderBottom: "3px solid",
                  borderBottomColor: this.bgColors.Blue
                }}
              >
                Patients List
              </h1>
              <Patients
                patientsArray={this.state.patientsArray}
                // countersArray={this.state.countersArray}
                editedPatient={this.state.editedPatient}
                onDeletePatient={this.handleDeletePatient}
                onEditPatient={this.handleEditPatient}
                onAddPatient={this.handleAddPatient}
                onSearchPatient={this.handleSearchPatient}
                onOrderPatient={this.handleOrderPatient}
              />
            </div>

            <div
              className="col-md-2" // This column located in bottomn of SideBar
              style={{ backgroundColor: this.bgColors.White }}
            ></div>

            <div
              className="col-md-4"
              style={{ backgroundColor: this.bgColors.White }}
            >
              <h1
                style={{
                  color: this.bgColors.Blue,
                  borderBottom: "3px solid",
                  borderBottomColor: this.bgColors.Blue
                }}
              >
                React Sample
              </h1>
              <Counters
                countersArray={this.state.countersArray} // Recieve Data
                onResetCounter={this.handleResetCounter} // Recieve methods to modify the Data
                onIncrementCounter={this.handleIncrementCounter}
                onDecrementCounter={this.handleDecrementCounter}
                onDeleteCounter={this.handleDeleteCounter}
              />
            </div>

            <div
              className="col-md-6"
              style={{ backgroundColor: this.bgColors.White }}
            >
              <h1
                style={{
                  color: this.bgColors.Blue,
                  borderBottom: "3px solid",
                  borderBottomColor: this.bgColors.Blue
                }}
              >
                Hook
              </h1>
              <TestHook
                dataFromOuterComponen="Sent from Outer Component !"
                dataPersonFromOuterComponen={this.state.personArray}
              />
            </div>

            <div
              className="col-md-2" // This column located in bottomn of SideBar
              style={{ backgroundColor: this.bgColors.White }}
            ></div>

            <div
              className="col-md-4" // This column located in bottomn of SideBar
              style={{ backgroundColor: this.bgColors.White }}
            >
              <h1
                style={{
                  color: this.bgColors.Blue,
                  borderBottom: "3px solid",
                  borderBottomColor: this.bgColors.Blue
                }}
              >
                Component Error Handleing
              </h1>
              <ErrorBoundary>
                <p>
                  These components are inside the same error boundary. If one
                  crashes, the error boundary will replace both of them.
                </p>
                <BuggyComponent />
                <BuggyComponent />
              </ErrorBoundary>
              <hr />
              <p>
                These two counters are each inside of their own error boundary.
                So if one crashes, the other is not affected.
              </p>
              <ErrorBoundary>
                <BuggyComponent />
              </ErrorBoundary>

              <ErrorBoundary>
                <BuggyComponent />
              </ErrorBoundary>
              <br />
              <br />
            </div>

            <div
              className="col-md-4" // This column located in bottomn of SideBar
              style={{ backgroundColor: this.bgColors.White }}
            >
              <h1
                style={{
                  color: this.bgColors.Blue,
                  borderBottom: "3px solid",
                  borderBottomColor: this.bgColors.Blue
                }}
              >
                Function Error Handleing
              </h1>
              <ErrorBoundary>
                <BuggyFunction />
              </ErrorBoundary>
            </div>

          </div>
        </main>

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
