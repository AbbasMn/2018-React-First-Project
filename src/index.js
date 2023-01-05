import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HTML5AndCssReference from './components/HTML5AndCssReference';
import Api from './components/ApiComponent/Api';

import TestHook from './components/Hooks/testHook';
import TestStyle from './components/StylesComponent/testStyle';

import Echma6NewFeatures from './components/echma6NewFeatures';

import 'bootstrap/dist/css/bootstrap.css';


/*
const element = <h1>Versasuite</h1>;
console.log(element);
ReactDOM.render(element, document.getElementById('root'));
*/

//ReactDOM.render(<Counter />, document.getElementById('root'));
//ReactDOM.render(<Counters />, document.getElementById('root'));

//ReactDOM.render(<HTML5AndCssReference />, document.getElementById('root'));  
//ReactDOM.render(<Api />, document.getElementById('root'));  

//ReactDOM.render(<TestHook />, document.getElementById('root')); 

// ReactDOM.render(<Echma6NewFeatures />, document.getElementById('root'));
//ReactDOM.render(<TestStyle />, document.getElementById('root'));

// ReactDOM.render(<ErrorHandeling />, document.getElementById('root'));  // go to App.js to ReactDOM.render(<Counters /> overthere

ReactDOM.render(<App />, document.getElementById('root'));  // go to App.js to ReactDOM.render(<Counters /> overthere











// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
