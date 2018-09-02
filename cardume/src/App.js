import React, { Component } from 'react';
import ConfirmarPresenca from './components/confirmarPresenca';
import Detalhes from './components/detalhes';
import CadastroEvento from './components/cadastroEvento';
import './css/App.css';
import Eventos from './components/eventos'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {page:'', detalhes: []};

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
          <h1 className="App-title">Welcome to React</h1>
          {!pagina ?
          <Detalhes det={detalhes} />
        : <ConfirmarPresenca />}
        <CadastroEvento/>
          {pagina && <button  onClick={this.handleClick} type="button" class="btn btn-primary">Primary</button>}
        </header>
      </div>
    );
  }
}

export default App;
