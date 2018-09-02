import React, { Component } from 'react';



class CadastroEvento  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          description: '',
          titulo: '',
          inicio: '',
          fim: '',
          adress: '',
          duration: null
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    
      render() {
        return (
          <form className='form-group'>
            <label>
              Descrição:
              <input
                className='form-control'
                name="Description"
                type="text"
                checked={this.state.description}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Titulo:
              <input
                className='form-control'
                name="Titulo"
                type="text"
                value={this.state.titulo}
                onChange={this.handleInputChange} />
            </label><br />
            <label>
                Inicio:
                <input
                className='form-control'
                name="Inicio"
                type="text"
                value={this.state.inicio}
                onChange={this.handleInputChange} />                
            </label><br />
            <label>
                Fim:
                <input
                className='form-control'
                name="Fim"
                type="text"
                value={this.state.fim}
                onChange={this.handleInputChange} />                
            </label><br />
            <label>
                Endereço:
                <input
                className='form-control'
                name="Adress"
                type="text"
                value={this.state.adress}
                onChange={this.handleInputChange} />                
            </label><br />
            <label>
                Duração:
                <input
                className='form-control'
                name="Duration"
                type="text"
                value={this.state.duration}
                onChange={this.handleInputChange} />                
            </label><br />
          </form>
        );
      }
    }           
export default CadastroEvento;