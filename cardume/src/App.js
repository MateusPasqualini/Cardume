import React, { Component } from 'react';
import './App.css';
import Eventos from './components/eventos'
import axios from 'axios';

import ConfirmarPresenca from './components/confirmarPresenca'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {page:'', eventos: []};

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({ page: 'confirmP' });
  }

  componentDidMount() {
  let url = 'https://cardume.herokuapp.com/eventos'
   fetch(url).
    then(response => response.json()).then((resp) => {
        console.log(resp);
        this.setState({
          eventos: resp
        });
      });

      console.log("AQUI:"+this.state.eventos.titulo);
  //   axios
  //   .get(`https://cardume.herokuapp.com/eventos`)
  //   .then(response => {
  //     this.setState({ eventos: response });  
  //     console.log("ESSE" + response.json());

  // //  //   cria um array de eventos
  // //     const novosEventos = response.map(c => {
  // //       return {
  // //           id: c.description,
	// // 	        titulo: "Evento A",
	// // 	        atividade: "Atividade A",
	// // 	        proprietario: "Empresa A",
  // //           qr: "http://link.do.qr-code"
  // //        };
  // //     });

  // //     // cria um novo objeto de "estado" sem alterar o objeto de estado original
       
  // //     const novoEstado = Object.assign({}, this.state.eventos, {
  // //       eventos: novosEventos
  // //     });

  // //     // // store the new state object in the component's state
  // //     this.setState(novoEstado);
  // //     console.log(this.state.eventos.description)
  //   })
  //    .catch(error => console.log(error));
}



  render() {
    const pagina = this.state.page;
    const eventos = this.state.eventos;
    console.log("ev" + eventos.titulo);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          {!pagina ?
          <Eventos ev={eventos} />
        : <ConfirmarPresenca />}
          <button  onClick={this.handleClick} type="button" class="btn btn-primary">Primary</button>
              <p>{}</p>
        </header>
      </div>
    );
  }
}

export default App;
