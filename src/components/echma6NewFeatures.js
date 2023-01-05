import  React from 'react';
const echma6newFeatures = () => {

    //#region Class and Object     
    class Human {
        constructor (){
            this.country='USA'; // Should be use this. in Constructor 
            this.state='Texas';  
        }
        weight='10 pound';
        age='Male';

        printAddress () {
            console.log("Address: "+this.country+ " "+this.state);  // Should be use this.
        }

        printAgeAndWeight = () => {
            console.log("Age and Weight: "+this.age +" "+this.weight);    // Should be use this.
        }        
    }
    // Inheritance
    class Person extends Human {
        constructor(){
            super(); // if needed to implement child class constructor
            this.sSn='000';
        }  
        name='test name';
        family='test family';
        printPerson = () => {
            console.log("Name and Family: "+ this.name +""+ this.family);    
        }      
    }

    // Create Objetc
    var per = new Person();
    console.log("Address: ",per.printAddress() + "Name: "+ per.name + "Gender: " + per.gender);
    //#endregion Class and Object    

    //#region Spread and Rest Operators
    let array = ['a','b','c'];
    let spreadArray = [...array, 1,2,3];
    console.log('After first Spread Operator: ',spreadArray);
    spreadArray=[... spreadArray,'TX','CA','OH','IS','DC'];
    console.log('After second Spread Operator: ',spreadArray);
    
    const restInMergArguments = (a,b,...arg) => { // ...arg should be placed as last argumant         
        console.log("a: "+ a);
        console.log("b: "+ b);
        console.log("...Arg: "+ arg);

        return arg.filter(x => x !== null);
    }
    console.log("Get Items in Arg: "+restInMergArguments(100,200,300,400,spreadArray,'Austin','Dallas','Houston','Denver','Chicago'));

    const VersaPerson ={
        ... Person,  // imports just properties not methods !
                     // best way for copy object properties
        position : 'web Developer'
    }
    VersaPerson.name='Abbas';
    VersaPerson.family='Montaseri';
    VersaPerson.country='USA';
    VersaPerson.state='TX';
    VersaPerson.age=35;
    VersaPerson.weight='100 pound';
    console.log("Using spread in object: "+VersaPerson.position + " "
                                          +VersaPerson.name +" "
                                          +VersaPerson.family);
    //#endregion Spread and Rest Operators

    //#region Destructuring
    var a,b,c;
    [a,,c]=["Hi","Ali",'montaseri'];
    console.log('Destructuring: a: ', a);
    console.log('Destructuring: b: ', b);
    console.log('Destructuring: c: ', c);

    //#endregion Destructuring

    //#region Using Echma6 facilities in Arrow Functinon
    spreadArray.map( (x) => {
        console.log('Use map() for Array: ', x + ' is maped !');
        return(null);
    });

    var contactedArray = spreadArray.concat([20, 21, 22, 23]);
    console.log('Use contact() for add to end of Array: ', contactedArray);

    contactedArray.find((x) => {
       if(x > 50 ) console.log('Use find() for find item Array: ', x );
    });
  
    contactedArray.findIndex((x) => {
        console.log('Use findIndex() for find item index Array: ', x > 50);
    });  
    //#endregion Using Echma6 facilities in Arrow Functinon

    return (
        <div>Hi Echma6</div>
    );
}

export default echma6newFeatures;