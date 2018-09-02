import React, { Component } from 'react';
import '../css/cards.css';
class Eventos extends React.Component {
    
    constructor(props) {
        super(props);
      }
      
    render() { 
        return (
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">{this.props.eve.titulo}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        );
    } 
}
export default Eventos;