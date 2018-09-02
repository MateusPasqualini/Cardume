import React, { Component} from 'react';
import Point from '../assets/point.svg';
import Date from '../assets/date.svg';
import Moment from 'react-moment';
import Detalhes from './detalhes';
import {BrowserRouter as Router, Route, Link}from 'react-router-dom';
import { Redirect } from 'react-router';

function Evento(props) {
  return props ?(
    <div className='listCard' onClick={props.nav}>
    <div class='card'>
    <div class='card-body'>
        <p className='card-title'>{props.key}</p>
        <p className='card-text'>{props.name}</p>
        <p className='card-horario'><img src={Date} alt='date'/> <Moment format="DD/MM/YYYY HH:mm">{props.data_inicio}</Moment> - <Moment format="DD/MM/YYYY HH:mm" date={props.data_fim}/></p>
        <p className='card-endereco'> <img src={Point} alt='point'></img>  {props.endereco}</p>  
        <p>{props.endereco}</p>
    </div>
    </div>
    </div>
  ) : null
}

export default Evento;