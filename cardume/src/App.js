import React, { Component } from 'react';
import PresencaConfirmada from './components/presencaConfirmada';
import Detalhes from './components/detalhes';
import CadastroEvento from './components/cadastroEvento';
import './css/App.css';
import Eventos from './components/eventos'
import axios from 'axios';
import logo from './cardume.svg';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {page:'', detalhes: []};

    this.handleClick = this.handleClick.bind(this);
    this.handleClickEvento = this.handleClickEvento.bind(this);
  }
  handleClick(e) {
    this.setState({ page: 'confirmP' });
  }

  handleClickEvento(e) {
    this.setState({ page: 'cadastroEven' });
  }
  componentDidMount() {
  let url = 'https://cardume.herokuapp.com/eventos/lista'
   fetch(url).
    then(response => response.json()).then((resp) => {
        console.log(resp);
        this.setState({
          detalhes: resp
        });
      });

}



  render() {
    const pagina = this.state.page;
    const detalhes = this.state.detalhes;
    return (
      <div className="App">
        <header className="App-header">
         <img src={logo} alt='logo'/>
         </header>
         {!pagina ?
          <Eventos eve={detalhes} />
          : pagina ==='confirmP' &&  <PresencaConfirmada />}
        {pagina==='cadastroEven' && <CadastroEvento/>}
          {!pagina && <button  onClick={this.handleClick} type="button" class="btn btn-primary">Confirmar Presença</button>}
          {(pagina==='confirmP') && <button  onClick={this.handleClickEvento} type="button" class="btn btn-primary">Cadastro de Evento</button>}
          {(!pagina && pagina==='cadastroEven') && <button  onClick={this.handleClickEvento} type="button" class="btn btn-primary">Primary</button>}
      </div>
    );
  }
}

export default App; 