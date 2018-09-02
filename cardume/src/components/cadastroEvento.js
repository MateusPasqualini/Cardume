import React, { Component } from 'react';



class CadastroEvento  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          description: '',
          titulo: '',
          inicio: '',
          fim: ''
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
          <form>
            <label>
              description:
              <input
                name="Description"
                type="text"
                checked={this.state.description}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              titulo:
              <input
                name="Titulo"
                type="text"
                value={this.state.titulo}
                onChange={this.handleInputChange} />
            </label><br />
            <label>
                inicio:
                <input
                name="Inicio"
                type="text"
                value={this.state.inicio}
                onChange={this.handleInputChange} />                
            </label><br />
            <label>
                fim:
                <input
                name="Fim"
                type="text"
                value={this.state.fim}
                onChange={this.handleInputChange} />                
            </label><br />
          </form>
        );
      }
    }           
export default CadastroEvento;