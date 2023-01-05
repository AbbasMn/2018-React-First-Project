import React, { Component } from "react";

class Api extends Component { 

  sendXMLHttpRequest = () => {
    // Create a request variable and assign a new XMLHttpRequest (XHR) object to it.
    var request = new XMLHttpRequest();

    // Open a new connection, using the GET request on the API URL endpoint
    request.open("GET", "https://ghibliapi.herokuapp.com/films", true);

    request.onload = function() {
      // Begin accessing JSON data here
      var data = JSON.parse(this.response);
      const app = document.getElementById("root");
      if (request.status >= 200 && request.status < 400) {
          
        //Create DivApiDataContaine
        //const app = document.getElementById("root");

        const divApiDataContainer = document.createElement("div");
        divApiDataContainer.setAttribute("class", "container");
        divApiDataContainer.setAttribute("id", "divApiDataContainer");    
        app.appendChild(divApiDataContainer);
        //!Create DivApiDataContaine

        data.forEach( movie => {

            //CreateApiDataItem
            const dataItem = document.createElement('div')
            dataItem.setAttribute('class', 'movieDataItem')
        
            const h1 = document.createElement('h1')
            h1.textContent = movie.title
        
            const p = document.createElement('p')
            movie.description = movie.description.substring(0, 300)
            p.textContent = `${movie.description}...`
        
            document.getElementById("divApiDataContainer").appendChild(dataItem)
            dataItem.appendChild(h1)
            dataItem.appendChild(p)
            //!CreateApiDataItem
        });
      } else {
        console.log("error");
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `Gah, it's not working!`
        app.appendChild(errorMessage)
      }
    };

    // Send request
    request.send();
  };

  render() {
    
    return (
    <React.Fragment>
        {this.sendXMLHttpRequest()}
    </React.Fragment>
    );
  }
}

export default Api;
