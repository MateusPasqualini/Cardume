import React, { Component } from 'react';

var dateFormat = require('dateformat');

class Detalhes extends React.Component {
    
    constructor(props) {
        super(props);
      }
      
    render() { 
        return (
            <div>
                <p>{this.props.det.description}</p>
                <p>{this.props.det.titulo}</p>
                <p>{dateFormat(this.props.det.inicio, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
                <p>{dateFormat(this.props.det.fim, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
                <p>{this.props.det.adress}</p>
                <p>{this.props.det.duration}</p>
            </div>
        );
    } 
}
export default Detalhes;