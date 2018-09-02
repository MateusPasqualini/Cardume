import React, { Component} from 'react';
import '../css/cards.css';
import date from './../assets/date.svg';
import point from './../assets/point.svg';
import Moment from 'react-moment';

class Eventos extends React.Component {
    
    constructor(props) {
        super(props);
      }

    render() { 
        {console.log(this.props.eve)}
        return (
            <div className='listCard'>
            <h5 className='titleListCard'>Onde você quer doar seu tempo?</h5>
            <div class='card'>
            <div class='card-body'>
                <h5 className='card-title'>{this.props.eve.titulo}</h5>
                <p className='card-text'>{this.props.eve.description}</p>
                <ul>
                <li className='date'> <img src={date} alt='date'/> <Moment format="DD-MM-YYYY HH:mm">{this.props.inicio}</Moment> a <Moment format="DD-MM-YYYY HH:mm" date={this.props.fim}/></li>
                    <li>{this.props.adress}</li>
                </ul>
            </div>
            </div>
            </div>
        );
    } 
}
export default Eventos;