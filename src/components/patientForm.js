import React, { Component } from "react";
import { assignmentExpression } from "@babel/types";
class PatientForm extends Component {

  render() {


    return (
      <React.Fragment>
        <form>
          <div class="form-row">

          <div class="form-group col-md-6">
            <label for="inputName">Name</label>
            <input
              type="text"
              class="form-control"
              id="inputName"
              placeholder="Name"
            ></input>
          </div>   
          <div class="form-group col-md-6">
            <label for="inputFamily">Family</label>
            <input
              type="text"
              class="form-control"
              id="inputFamily"
              placeholder="Family"
            ></input>
          </div>  
           
          <div class="form-group col-md-6">
            <label for="inputBirthDate">Birth Date</label>
            <input
              type="date"
              class="form-control"
              id="inputBirthDate"
              placeholder=""
            ></input>
          </div>   
          <div class="form-group col-md-6">
            <label for="inputPhysician">Physician</label>
              <select id="inputPhysician" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>

            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                class="form-control"
                id="inputEmail4"
                placeholder="Email"
              ></input>
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Password</label>
              <input
                type="password"
                class="form-control"
                id="inputPassword4"
                placeholder="Password"
              ></input>
            </div>
          

          <div class="form-group col-md-6">
            <label for="CellPhone">Cell Phone</label>
            <input
              type="text"
              class="form-control"
              id="inputCellPhone"
              placeholder="(515) 584-1234"
            ></input>
          </div>   
          <div class="form-group col-md-6">
            <label for="inputHomePhone">Home Phone</label>
            <input
              type="text"
              class="form-control"
              id="inputHomePhone"
              placeholder="(512) 112-456"
            ></input>
          </div>
          </div>
 



          <div class="form-group">
            <label for="inputAddress">Address</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            ></input>
          </div>
          <div class="form-group">
            <label for="inputAddress2">Address 2</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            ></input>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity"></input>
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" class="form-control" id="inputZip"></input>
            </div>
          </div>
          
          {/* <div class="form-group">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="gridCheck"
              ></input>
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div> */}

          <button type="submit" class="btn btn-primary"
                        onClick={() => {                   

                        }}
          >
            Save
          </button>


         
        </form>
      </React.Fragment>
    );
  }
}

export default PatientForm;
