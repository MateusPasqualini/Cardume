import React, { Component} from 'react';
import '../css/cards.css';
import date from './../assets/date.svg';
import point from './../assets/point.svg';
import Moment from 'react-moment';
import Evento from './evento';

class Eventos extends React.Component {
    
    constructor(props) {
        super(props);
      }

    render() { 
        return this.props ?(
            this.props.detalhes.map(c => <Evento key={c.descricao} name={c.titulo} />)
        )
        : null
    } 
}
export default Eventos;