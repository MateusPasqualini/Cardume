import React, { Component } from 'react';
import './css/App.css';
import Eventos from './components/eventos'
import axios from 'axios';
import logo from './cardume.svg';

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
}



  render() {
    const pagina = this.state.page;
    const eventos = this.state.eventos;
    console.log("ev" + eventos.titulo);
    return (
      <div className="App">
        <header className="App-header">
         <img src={logo} alt='logo'/>
         </header>
         {!pagina ?
          <Eventos eve={eventos} />
        : <ConfirmarPresenca />}
          {pagina && <button  onClick={this.handleClick} type="button" class="btn btn-primary">Primary</button>}
      </div>
    );
  }
}

export default App;
