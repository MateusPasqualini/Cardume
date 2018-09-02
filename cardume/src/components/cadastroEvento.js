import React, { Component } from 'react';
import axios from 'axios';
import UserModel from '../model/userModel';

class CadastroEvento  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          descricao: null,
          titulo: null,
          data_inicio: null,
          endereco: null,
          data_fim: null,
          endereco: null,
          moedas: null,
          numero_voluntarios: null,
          telefone: null,
          email: null
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const name = target.name;
    
        this.setState({
          [name]: target.value
        });
        console.log("target" +target.value);
      }

      handleSubmit(e){
       this.setState({email: UserModel.getInstance().getUserID});
        console.log("respopnse")
        axios.post("https://cardume.herokuapp.com/eventos/novoEvento", this.state)
            .then( response => { 
              console.log("sdknaknsdnks" + response);
            })
            .catch(error => {
                console.log(error.response)
            });
      }
    
      render() {
        return (
          <form className='form-group'>
            <br />
            <label>
              Titulo:
              <input
                className='form-control'
                name="titulo"
                type="text"
                value={this.state.titulo}
                onChange={this.handleInputChange} />
            </label><br />
            <label>
                Inicio:
                <input
                className='form-control'
                name="data_inicio"
                type="date"
                value={this.state.data_inicio}
                onChange={this.handleInputChange} />                
            </label><br />
            <label>
                Fim:
                <input
                className='form-control'
                name="data_fim"
                type="date"
                value={this.state.data_fim}
                onChange={this.handleInputChange} />                
            </label><br />
            <label>
                Endereço:
                <input
                className='form-control'
                name="endereco"
                type="text"
                value={this.state.endereco}
                onChange={this.handleInputChange} />                
            </label><br />
            <label>
                Telefone:
                <input
                className='form-control'
                name="telefone"
                type="number"
                value={this.state.telefone}
                onChange={this.handleInputChange} />                
            </label><br />
            <label>
                Número de voluntários:
                <input
                className='form-control'
                name="numero_voluntarios"
                type="number"
                value={this.state.numero_voluntarios}
                onChange={this.handleInputChange} />                
            </label><br />
            <label>
              Moedas:
              <input
                className='form-control'
                name="moedas"
                type="number"
                checked={this.state.moedas}
                onChange={this.handleInputChange} />
            </label><br/>
            <label>
              Descrição:
              <textarea
                className='form-control'
                name="descricao"
                type="text"
                checked={this.state.descricao}
                onChange={this.handleInputChange} />
            </label><br/>
            <button type='submit' onClick={this.handleSubmit} className='btn btn-primary'>Cadastrar</button>
          </form>
        );
      }
    }           
export default CadastroEvento;