import React, { Component } from "react";

import Patient from "./patient";

class Patients extends Component {
  render() {
    const {
      patientsArray,
      editedPatient,
      
      onDeletePatient,
      onEditPatient,
      onAddPatient,
      onSearchPatient,
      onOrderPatient
    } = this.props; //Destrucring

    return (
      <React.Fragment>
        <div style={{width: "100%" , textAlign: "right"}}>
          <button
            onClick={() => this.props.onAddPatient()}
            className="btn btn-primary btn-sm m-2"
          >
            Add Patient
          </button>

          <button
            onClick={() => this.props.onSearchPatient()}
            className="btn btn-primary btn-sm m-2"
          >
            Search
          </button>

          <span>Order By: </span>

          <select id="search" onClick={() => this.props.onOrderPatient()}>
            <option defaultValue>Choose...</option>
            <option>Name</option>
            <option>Family</option>
            <option>Physician</option>
          </select>
        </div>

        {patientsArray.map(patient => (
          <Patient
            key={patient.id}
            patient={patient}
            editedPatient={editedPatient}
            

            onEditPatient={onEditPatient}

            onDeletePatient={onDeletePatient}            
            onAddPatient={onAddPatient}
            onSearchPatient={onSearchPatient}
            onOrderPatient={onOrderPatient}            
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Patients;
