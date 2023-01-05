
// Hook is a Functional Component and allows to use and change the state
// useState is the hook that allows us to manage state in functional component
import React, { useState } from "react";

const TestHook = (props) => {
  //#region State

  // Initial Data in State
  //const [data="initialData", setData] = useState("newData");

  // Recieve Data from Outer Component with props
  // Asign the Recieved Data to State: useState(props.dataFromOuterComponen)
  const [data, setData] = useState(props.dataFromOuterComponen);

  const dataPersonInitialValue = [
    { id: 0, name: "newPersonName", age: "newpersonAge" }
  ];

 // Initial personData in State: useState(dataPersonInitialValue);
 //const [dataPerson, setDataPerson] = useState(dataPersonInitialValue);

  //console.info(props.dataPersonFromOuterComponen);
   const [dataPerson, setDataPerson] = useState(props.dataPersonFromOuterComponen);

  //#endregion state

  //#region Change State Data Handlers
  const dataHandler = newdata => {
    setData(newdata);
  };

  const dataPersonHandler = newDataPerson => {
    setDataPerson([...dataPerson, ...newDataPerson]); // Add new data to current data
  };
  //#endregion Change State Data Handlers
  return (
    <React.Fragment>
      <div>
        Data in state: {data}
        <br />
        <button onClick={() => setData("changedData")} className="buttonStyle">
          Change with setData
        </button>
        <br />
        <button onClick={() => dataHandler("changedData with Handler")}>
          Change with Handler
        </button>
      </div>

      <div>
        DataPaerson in state:
        <ul>
          {dataPerson.map(p => (
            <li key={p.id}>
              {p.name}, {p.age}
            </li>
          ))}
        </ul>
        <br />
        <button
          onClick={() =>
            dataPersonHandler([
              { id: 1, name: "Ali", age: 35 },
              { id: 2, name: "Abbas", age: 40 },
              { id: 3, name: "Afrooz", age: 30 },
              { id: 4, name: "Amir", age: 40 }
            ])
          }
        >
          Change dataPerson with Handler
        </button>
      </div>
    </React.Fragment>
  );
};

export default TestHook;
