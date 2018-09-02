import React, { Component } from 'react';
import PresencaConfirmada from './components/presencaConfirmada';
import Detalhes from './components/detalhes';
import CadastroEvento from './components/cadastroEvento';
import './css/App.css';
import Eventos from './components/eventos'
import logo from './cardume.svg';
import back from './assets/back.svg';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {page:'', detalhes: []};

    this.handleClick = this.handleClick.bind(this);
    this.handleClickEvento = this.handleClickEvento.bind(this);
    this.handleClickBack = this.handleClickBack.bind(this);
    this.handleClickDetalhes = this.handleClickDetalhes.bind(this);
    this.handleClickIni = this.handleClickIni.bind(this);
  }
  handleClick(e) {
    this.setState({ page: 'detalhes' });//confirmPresenca
  }

  handleClickEvento(e) {
    this.setState({ page: 'cadastroEven' });
  }

  handleClickIni(e) {
    this.setState({page: ''})
  }

  handleClickBack(e) {
    let retorno = null;
    if(this.state.page === 'cadastroEven')
      retorno = '#'; //ainda não tenho pra onde voltar
    else if(this.state.page === 'confirmPresenca')
      retorno = 'detalhes';
    else if(this.state.page === 'detalhes')
      retorno = '';
    
    this.setState({page: retorno});
  }

  handleClickDetalhes(e){
    this.setState({ page: 'confirmPresenca' });  
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
        <img onClick={this.handleClickBack} src={back} alt='logo'/>
         <img src={logo} alt='logo'/>
         </header>
         {!pagina ?
          <Eventos eve={detalhes} />
          : pagina ==='confirmPresenca' &&  <PresencaConfirmada />}
          {pagina==='cadastroEven' && <CadastroEvento/>}
          {pagina==='detalhes' && <Detalhes det={detalhes}/>}
          {!pagina && <button  onClick={this.handleClick} type="button" class="btn btn-primary">Quero saber mais</button>}
          {(pagina==='detalhes') && <button  onClick={this.handleClickDetalhes} type="button" class="btn btn-primary">Quero ajudar!</button>}
          {(pagina==='confirmPresenca') && <button  onClick={this.handleClickIni} type="button" class="btn btn-primary">Ir para a página inicial</button>}
          {(!pagina && pagina==='cadastroEven') && <button  onClick={this.handleClickEvento} type="button" class="btn btn-primary">Primary</button>}
          {!pagina && <button  onClick={this.handleClickEvento} type="button" class="btn btn-primary">Cadastro de evento</button>}
      </div>
    );
  }
}

export default App; 