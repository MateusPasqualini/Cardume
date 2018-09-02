import React, { Component} from 'react';
import Point from '../assets/point.svg';
import Date from '../assets/date.svg';
import Moment from 'react-moment';
import Detalhes from './detalhes';
import {BrowserRouter as Router, Route, Link}from 'react-router-dom';
import { Redirect } from 'react-router';

class Evento extends React.Component {

  constructor(props) {
    super(props);
  }

  update = (e) => {
    console.log("teste de value " + this.props.id)
    this.props.onUpdate(this.props.id);
    // this.setState({fieldVal: e.target.value});
  }

  render() { 
    return this.props ?(<div className='listCard' onClick={this.update}>
    <div class='card'>
    <div class='card-body'>
        <p className='card-title'>{this.props.key}</p>
        <p className='card-text'>{this.props.name}</p>
        <p className='card-horario'><img src={Date} alt='date'/> <Moment format="DD-MM-YYYY HH:mm">{this.props.data_inicio}</Moment> a <Moment format="DD-MM-YYYY HH:mm" date={this.props.data_fim}/></p>
        <p className='card-endereco'> <img src={Point} alt='point'></img>  {this.props.endereco}</p>
    </div>
    </div>
    </div>) : null;
  }

}

export default Evento;