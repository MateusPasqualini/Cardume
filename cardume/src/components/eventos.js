import React, { Component} from 'react';
import '../css/cards.css';
class Eventos extends React.Component {
    
    constructor(props) {
        super(props);
      }
      
    render() { 
        return (
            <div className='listCard'>
            <h5 className='titleListCard'>Onde você quer doar seu tempo?</h5>
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">{this.props.eve.titulo}</h5>
                <p class="card-text">{this.props.eve.description}</p>
            </div>
            </div>
            </div>
        );
    } 
}
export default Eventos;