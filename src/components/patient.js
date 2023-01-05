/* eslint-disable no-lone-blocks */
import React, { Component } from "react";

// JQueryInstalllation:
// Write the following command to install jquery using npm : npm install jquery --save
import $ from "jquery";

class Patient extends Component {

  editedPatientID = -1 ; // Global Variable specify which patiend wants to edited

  //Setting the Initial State
  constructor(props) {
    //Use invoke super() with properties, otherwise the logic in parent (React.Component) won’t work.
    super(props)
    this.state = this.props;
    console.log(this.state);
  }

  editCancel()
  {
    document.getElementById("spanPatientName-" + this.editedPatientID).innerText =this.props.patient.name
    document.getElementById("spanPatientFamily-" + this.editedPatientID).innerText =this.props.patient.family
    document.getElementById("spanPatientBirthDate-" + this.editedPatientID).innerText =this.props.patient.birthDate 
    document.getElementById("spanPatientPhysician-" + this.editedPatientID).innerText = this.props.patient.physician   
  }

  setEditControlStyle (control) {
      document.getElementById(control).style.backgroundColor="#ffe57f "; 
    }

  setAllSavedEditControlStyle(){

    // document.getElementById("spanPatientName-" + this.editedPatientID).style.backgroundColor="#37474F"; 
    // document.getElementById("spanPatientFamily-" + this.editedPatientID).style.backgroundColor="#37474F"; 
    // document.getElementById("spanPatientBirthDate-" + this.editedPatientID).style.backgroundColor="#37474F"; 
    // document.getElementById("spanPatientPhysician-" + this.editedPatientID).style.backgroundColor="#37474F"; 

    document.getElementById("spanPatientName-" + this.editedPatientID).style.borderTopWidth= "2px"; 
    document.getElementById("spanPatientName-" + this.editedPatientID).style.borderTopColor= "#4285F4"; 
    document.getElementById("spanPatientName-" + this.editedPatientID).style.borderTopStyle= "solid"; 
    document.getElementById("spanPatientName-" + this.editedPatientID).style.borderTopLeftRadius= "10px";
    document.getElementById("spanPatientName-" + this.editedPatientID).style.borderLeftWidth= "2px";  
    document.getElementById("spanPatientName-" + this.editedPatientID).style.borderLeftColor= "#4285F4"; 
    document.getElementById("spanPatientName-" + this.editedPatientID).style.borderLeftStyle= "solid"; 
    document.getElementById("spanPatientName-" + this.editedPatientID).style.borderBottomLeftRadius= "10px"; 
    document.getElementById("spanPatientName-" + this.editedPatientID).style.borderBottomWidth= "2px"; 
    document.getElementById("spanPatientName-" + this.editedPatientID).style.borderBottomColor= "#4285F4"; 
    document.getElementById("spanPatientName-" + this.editedPatientID).style.borderBottomStyle= "solid";   
    
    


    document.getElementById("spanPatientFamily-" + this.editedPatientID).style.borderTopWidth= "2px"; 
    document.getElementById("spanPatientFamily-" + this.editedPatientID).style.borderTopColor= "#4285F4"; 
    document.getElementById("spanPatientFamily-" + this.editedPatientID).style.borderTopStyle= "solid"; 
    document.getElementById("spanPatientFamily-" + this.editedPatientID).style.borderBottomWidth= "2px"; 
    document.getElementById("spanPatientFamily-" + this.editedPatientID).style.borderBottomColor= "#4285F4"; 
    document.getElementById("spanPatientFamily-" + this.editedPatientID).style.borderBottomStyle= "solid";   
    
    

    document.getElementById("spanPatientBirthDate-" + this.editedPatientID).style.borderTopWidth= "2px"; 
    document.getElementById("spanPatientBirthDate-" + this.editedPatientID).style.borderTopColor= "#4285F4"; 
    document.getElementById("spanPatientBirthDate-" + this.editedPatientID).style.borderTopStyle= "solid";    
    document.getElementById("spanPatientBirthDate-" + this.editedPatientID).style.borderBottomWidth= "2px"; 
    document.getElementById("spanPatientBirthDate-" + this.editedPatientID).style.borderBottomColor= "#4285F4"; 
    document.getElementById("spanPatientBirthDate-" + this.editedPatientID).style.borderBottomStyle= "solid";  
    
    
    document.getElementById("spanPatientPhysician-" + this.editedPatientID).style.borderTopWidth= "2px"; 
    document.getElementById("spanPatientPhysician-" + this.editedPatientID).style.borderTopColor= "#4285F4"; 
    document.getElementById("spanPatientPhysician-" + this.editedPatientID).style.borderTopStyle= "solid"; 
    
    document.getElementById("spanPatientPhysician-" + this.editedPatientID).style.borderRightWidth= "2px"; 
    document.getElementById("spanPatientPhysician-" + this.editedPatientID).style.borderRightColor= "#4285F4"; 
    document.getElementById("spanPatientPhysician-" + this.editedPatientID).style.borderRightStyle= "solid";  
    document.getElementById("spanPatientPhysician-" + this.editedPatientID).style.borderTopRightRadius= "10px";
    document.getElementById("spanPatientPhysician-" + this.editedPatientID).style.borderBottomWidth= "2px"; 
    document.getElementById("spanPatientPhysician-" + this.editedPatientID).style.borderBottomColor= "#4285F4"; 
    document.getElementById("spanPatientPhysician-" + this.editedPatientID).style.borderBottomStyle= "solid";   
    document.getElementById("spanPatientPhysician-" + this.editedPatientID).style.borderBottomRightRadius= "10px";  
    
  }

removeAllEditControlStyle(){
      // Delete Span Edit Background Color
      var elements = document.getElementsByClassName("spanEdit");
      var i = 0;
      while (elements.length > i) {
        elements[i].style.backgroundColor=null;
        elements[i].style.border=null;
        i++;
      }
}


  saveEditClick = () => {
    window.confirm("Are you sure to Edit this Patient?");
    {
      this.props.patient.name = document.getElementById("inputEditName-" + this.editedPatientID).value;
      this.props.patient.family = document.getElementById("inputEditFamily-" + this.editedPatientID).value;
      this.props.patient.birthDate = document.getElementById("inputEditBirthDate-" + this.editedPatientID).value;
      this.props.patient.physician = document.getElementById("selectEditPhysician-" + this.editedPatientID).value;
    }     

      this.removeAllEditControlStyle();
      this.setAllSavedEditControlStyle();      
  }

  createDivEdit = parameters => {

    this.editedPatientID = parameters.id;

    // remove if divEdit-i is exist and showen
    var e = document.getElementById("divEdit-"+parameters.id);
    //window.confirm(e);
    if(typeof(e) != 'undefined' && e != null){
      //window.confirm(e.id);
      document.getElementById(e.id).remove();
      this.editCancel();
      return;
    }



    // if divEdit-i is not exist remove all other divEdit-i and create divEdit-i
    // Remove another div with class="divEdit"
    var elements = document.getElementsByClassName("divEdit");
    var i = 0;
    while (elements.length > i) {
      elements[i].remove();
      i++;
    }

    var id = parameters.id.toString();
    var name = parameters.name.toString();
    var family = parameters.family.toString();
    var birthDate = parameters.birthDate.toString();
    var physician = parameters.physician.toString();


    // Create Div Edit Tag
    var parent = document.getElementById(
      "divPatient-" + parameters.id.toString()
    );
    var newElement = document.createElement("div");
    newElement.id = "divEdit-" + id;
    newElement.className = "divEdit";
    newElement.width = "100%";
    newElement.style.display= "flex";
    newElement.style.flexDirection="row";
    newElement.style.flexWrap= "nowrap";
    parent.appendChild(newElement);

    // Create Span EditName Tag
    parent = document.getElementById("divEdit-" + id);
    newElement = document.createElement("span");

    newElement.id = "spanEditName-" + id;
    newElement.className = "";
    newElement.style.width = "24%";
    newElement.style.display = "inline-block";
    parent.appendChild(newElement);

    // Create InputName Tag
    parent = document.getElementById("spanEditName-" + id);
    newElement = document.createElement("input");

    newElement.id = "inputEditName-" + id;
    newElement.className = "form-control";
    newElement.style.display = "inline-block";
    newElement.value = name;
    parent.appendChild(newElement);
    document.getElementById("inputEditName-" + id).focus();
    newElement.onkeyup = () => {
      document.getElementById("spanPatientName-" + id).innerText = document.getElementById("inputEditName-" + id).value;     
      this.setEditControlStyle("spanPatientName-"+id);
    }

    // Create Span EditFamily Tag
    parent = document.getElementById("divEdit-" + id);
    newElement = document.createElement("span");

    newElement.id = "spanEditFamily-" + id;
    newElement.className = "";
    newElement.style.width = "24%";
    newElement.style.display = "inline-block";
    parent.appendChild(newElement);

    // Create InputFamily Tag
    parent = document.getElementById("spanEditFamily-" + id);
    newElement = document.createElement("input");

    newElement.id = "inputEditFamily-" + id;
    newElement.className = "form-control";
    newElement.style.display = "inline-block";
    newElement.value = family;
    parent.appendChild(newElement);
    newElement.onkeyup = () => {
      document.getElementById("spanPatientFamily-" + id).innerText = document.getElementById("inputEditFamily-" + id).value;     
      this.setEditControlStyle("spanPatientFamily-"+id);
    }

    // Create Span EditBirthDate Tag
    parent = document.getElementById("divEdit-" + id);
    newElement = document.createElement("span");

    newElement.id = "spanEditBirthDate-" + id;
    newElement.className = "";
    newElement.style.width = "24%";
    newElement.style.display = "inline-block";
    parent.appendChild(newElement);

    // Create InputBirthDate Tag
    parent = document.getElementById("spanEditBirthDate-" + id);
    newElement = document.createElement("input");

    newElement.id = "inputEditBirthDate-" + id;
    newElement.className = "form-control";
    newElement.style.display = "inline-block";
    newElement.setAttribute("type", "date");
    parent.appendChild(newElement);
    document.getElementById("inputEditBirthDate-" + id).value = birthDate;
    newElement.onchange = () => {    
      document.getElementById("spanPatientBirthDate-" + id).innerText = document.getElementById("inputEditBirthDate-" + id).value;     
      this.setEditControlStyle("spanPatientBirthDate-"+id);
    }

    // Create Span EditPhysician Tag
    parent = document.getElementById("divEdit-" + id);
    newElement = document.createElement("span");

    newElement.id = "spanEditPhysician-" + id;
    newElement.className = "";
    newElement.style.width = "24%";
    newElement.style.display = "inline-block";
    parent.appendChild(newElement);

    // Create SelectPhysician Tag
    parent = document.getElementById("spanEditPhysician-" + id);
    newElement = document.createElement("select");

    newElement.id = "selectEditPhysician-" + id;
    //newElement.nodeType="text";
    newElement.className = "form-control";
    newElement.style.display = "inline-block";
    parent.appendChild(newElement);

    newElement.onchange = () => {    
      document.getElementById("spanPatientPhysician-" + id).innerText = document.getElementById("selectEditPhysician-" + id).value;     
      console.log(this.props.patient.physician);
      this.setEditControlStyle("spanPatientPhysician-"+id);     
    }
    // create new option element
    var opt = document.createElement('option');
    var opt1 = document.createElement('option');

    // create text node to add to option element (opt)
    // set value property of opt
    opt.appendChild( document.createTextNode(physician) ).value = physician; 
    opt1.appendChild( document.createTextNode("Test") ).value = "Test";

    // add opt to end of select box
    document.getElementById("selectEditPhysician-" + id).appendChild(opt); 
    document.getElementById("selectEditPhysician-" + id).appendChild(opt1); 

     
    // Create Button Save Tag
    parent = document.getElementById("divEdit-" + id);
    newElement = document.createElement("button");
    newElement.id = "btnEditSave-" + id;
    //newElement.nodeType="submit";
    newElement.className = "btn btn-success btn-sm m-2";
    newElement.style.display = "inline-block";
    newElement.textContent = "Save";
    newElement.onclick = this.saveEditClick;
    parent.appendChild(newElement);

   
    // Create Button Cancel Tag
    parent = document.getElementById("divEdit-" + id);
    newElement = document.createElement("button");
    newElement.id = "btnEditCancel-" + id;
    //newElement.nodeType="submit";
    newElement.className = "btn btn-warning btn-sm m-2";
    newElement.style.display = "inline-block";
    newElement.textContent = "Cancel";
    newElement.onclick = () => {
          //window.confirm(parent.id);
          //Here parameters is a HTMLDivElement object
          document.getElementById(parent.id).remove();
          this.removeAllEditControlStyle();
          this.editCancel();
    }
    parent.appendChild(newElement);    
  };

  render() {
    const {
      patient,
      editedPatient,
      onDeletePatient,
      onEditPatient
    } = this.props; //Destrucring

    // JQuery
    $("btnEdit").click(function() {
      alert("Data: Edited ");
      console.log("Jquery .....");
    });
    // ! JQuery

    return (
      <React.Fragment>
        <div className="form-row"            
        >
          <div
            id={"divPatient-" + this.props.patient.id}
            className="form-group col-md-12"
            style={{ border: "1px solid #939393", marginBottom: "0px", display: "flex"  , flexDirection:"column" , flexWrap: "nowrap" }}
          >

          <div 
            id={"divPatientData-" + this.props.patient.id}
            style={{ width: "100%", display: "flex"  , flexDirection:"row" , flexWrap: "nowrap"}}
          >

            <span id={"spanPatientName-" + this.props.patient.id} className="spanEdit" 
            style={{ paddingTop:"5px", marginTop:"3px", height:"40px", display: "inline-block", overflow: "hidden", whiteSpace: "nowrap" , width: "24%" }}>              
                    {this.props.patient.name}
            </span>
            {/* className={this.getBadgeClasses()} */}
            <span id={"spanPatientFamily-" + this.props.patient.id} className="spanEdit" 
            style={{ paddingTop:"5px", marginTop:"3px", height:"40px", display: "inline-block", overflow: "hidden", whiteSpace: "nowrap" , width: "24%" }}>         
                    {this.props.patient.family}
           </span>
            <span id={"spanPatientBirthDate-" + this.props.patient.id} className="spanEdit" 
            style={{ paddingTop:"5px",  marginTop:"3px", height:"40px", display: "inline-block", overflow: "hidden", whiteSpace: "nowrap" , width: "24%" }}>
                    {this.props.patient.birthDate}
            </span>
            <span id={"spanPatientPhysician-" + this.props.patient.id} className="spanEdit" 
            style={{ paddingTop:"5px", marginTop:"3px", height:"40px", display: "inline-block", overflow: "hidden", whiteSpace: "nowrap" , width: "24%" }}>                         
                    {this.props.patient.physician}
            </span>
            <button
              id="btnEdit"
              value={patient.id}
              className="btn btn-secondary btn-sm m-2 "
              onClick={() => {
                this.removeAllEditControlStyle();
                this.createDivEdit(patient);
                this.setAllSavedEditControlStyle();
              }}
            >
              Edit
            </button>
            <button
              className="btn btn-danger btn-sm m-2"          
              // onClick={() => onDeletePatient(patient)}
              onClick={() => {
                if (window.confirm("Are you sure to Delete this Patient?")) {
                  //window.confirm(patient.name);
                  onDeletePatient(patient);
                  {this.removeAllEditControlStyle()}
                }
              }}
            >
              Delete
            </button>
            </div>
          
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Patient;
