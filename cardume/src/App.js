import React, { Component } from 'react';
import './App.css';
import axios from "axios"

class App extends Component {

// default State object
estado = {
  eventos: []
};

componentDidMount() {
  axios
    .get("placeholder")
    .then(response => {

      // cria um array de eventos
      const novosEventos = response.data.map(c => {
        return {
            id: 1,
		        titulo: "Evento A",
		        atividade: "Atividade A",
		        proprietario: "Empresa A",
            qr: "http://link.do.qr-code"
         };
      });

      // cria um novo objeto de "estado" sem alterar o objeto de estado original
       
      const novoEstado = Object.assign({}, this.estado, {
        eventos: novosEventos
      });

      // store the new state object in the component's state
      this.setState(novoEstado);
    })
    .catch(error => console.log(error));
}



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;
