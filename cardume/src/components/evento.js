import React, { Component} from 'react';
import Point from '../assets/point.svg';
import Date from '../assets/date.svg';
import Moment from 'react-moment';
function Evento(props) {
  return props ?(
    <div className='listCard'>
    <div class='card'>
    <div class='card-body'>
        <p className='card-title'>{props.key}</p>
        <p className='card-text'>{props.name}</p>
        <p className='card-horario'><img src={Date} alt='date'/> <Moment format="DD-MM-YYYY HH:mm">{props.data_inicio}</Moment> a <Moment format="DD-MM-YYYY HH:mm" date={props.data_fim}/></p>
        <p className='card-endereco'> <img src={Point} alt='point'></img>  {props.endereco}</p>
        <button  onClick={this.handleClickDetails} type="button" class="btn btn-primary">Saiba Mais</button>
        
    </div>
    </div>
    </div>
  ) : null
}

export default Evento;