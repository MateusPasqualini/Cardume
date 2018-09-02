import React, { Component} from 'react';
import '../css/cards.css';
import date from './../assets/date.svg';
import point from './../assets/point.svg';
import Moment from 'react-moment';
import Evento from './evento';
import Detalhes from './detalhes';

class Eventos extends React.Component {
    
    constructor(props) {
        super(props);
      }

    render() { 
        return this.props ?(
            <div>
            <h5 className='titleListCard'>Onde você quer doar seu tempo?</h5>
            {this.props.detalhes.map((c, index) => <Evento id={index} onUpdate={this.props.onUpdate} descricao={c.descricao} name={c.titulo} endereco={c.endereco} page={this.props.pagina}/>)}
            </div>
        )
        : null
    } 
}
export default Eventos;