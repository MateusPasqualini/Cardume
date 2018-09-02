import React, { Component } from 'react';

var dateFormat = require('dateformat');

class Detalhes extends React.Component {
    
    constructor(props) {
        super(props);
      }
      
    render() { 
        return (
            <div>
                <p>{this.props.det.descricao}</p>
                <p>{this.props.det.titulo}</p>
                <p>{dateFormat(this.props.det.data_inicio, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
                <p>{dateFormat(this.props.det.data_fim, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
                <p>{this.props.det.endereco}</p>
                <p>{this.props.det.duracao}</p>
            </div>
        );
    } 
}
export default Detalhes;