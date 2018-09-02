import React, { Component } from 'react';
import PresencaConfirmada from './components/presencaConfirmada';
import Detalhes from './components/detalhes';
import CadastroEvento from './components/cadastroEvento';
import './css/App.css';
import Eventos from './components/eventos'
import logo from './cardume.svg';
import back from './assets/back.svg';
import Register from './components/register';
import Perfil from './components/perfil';
import Login from './components/login';
import UserModel from './model/userModel';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {page:'', detalhes:null};

    this.handleClick = this.handleClick.bind(this);
    this.handleClickEvento = this.handleClickEvento.bind(this);
    this.handleClickBack = this.handleClickBack.bind(this);
    this.handleClickDetalhes = this.handleClickDetalhes.bind(this);
    this.handleClickIni = this.handleClickIni.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.perfil = this.perfil.bind(this);
    this.login = this.login.bind(this);
  }
  handleClick(e) {
    this.setState({ page: 'detalhes' });//confirmPresenca
  }

  handleClickEvento(e) {
    this.setState({ page: 'cadastroEven' });
  }

  handlePage(value) {
    this.setState({ page: value });
  }

  handleClickIni(e) {
    this.setState({page: ''});
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

  perfil(e){
    this.setState({page: 'perfil'});
  }

  login(e){
    this.setState({page: 'login'});
  }

  handleRegister(e) {
    this.setState({ page: 'register' });
  }
  componentDidMount() {
  let url = 'https://cardume.herokuapp.com/eventos/lista';
  console.log("aaaa" + url);
   fetch(url).
   //then(response => response.then((resp) => {
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
    {console.log("AAAAAA" + detalhes)};  
    return (
      this.state.detalhes ?
      <div className="App">
        <header className="App-header">
        <img onClick={this.handleClickBack} src={back} alt='logo' className='imgBack'/>
         <img src={logo} alt='logo'/>
         </header>
         {!pagina ?(
           
          <Eventos detalhes={detalhes} nav={this.handleClick.bind(this)}/>
         ): pagina ==='confirmPresenca' &&  <PresencaConfirmada />}
          {pagina==='cadastroEven' && <CadastroEvento/>}
          {pagina==='detalhes' && <Detalhes det={detalhes} page={pagina}/>}
          {pagina==='register' && <Register />}
          {pagina==='perfil' && <Perfil id={UserModel.getInstance().getUserID()}/>}
          {pagina==='login' && <Login id={UserModel.getInstance().getUserID()}/>}
          {!pagina && <button  onClick={this.handleClick} type="button" class="btn btn-primary">Quero saber mais</button>}
          {(pagina==='detalhes') && <button  onClick={this.handleClickDetalhes} type="button" class="btn btn-primary">Quero ajudar!</button>}
          {(pagina==='confirmPresenca') && <button  onClick={this.handleClickIni} type="button" class="btn btn-primary">Ir para a página inicial</button>}
          {!pagina && <button  onClick={this.handleClickEvento} type="button" class="btn btn-primary">Cadastro de evento</button>}
          {!pagina && <button  onClick={this.handleRegister} type="button" class="btn btn-primary">Register</button>}
          {!pagina && <button  onClick={this.perfil} type="button" class="btn btn-primary">Perfil</button>}
          {!pagina && <button  onClick={this.login} type="button" class="btn btn-primary">Login</button>}
      </div>
      :null
    );
  }
}

export default App; 