import React, { Component} from 'react';

function Evento(props) {
  return props ?(
    <div className='listCard'>
    <h5 className='titleListCard'>Onde você quer doar seu tempo?</h5>
    <div class='card'>
    <div class='card-body'>
        <h5 className='card-title'>{props.key}</h5>
        <p className='card-text'>{props.name}</p>
        
    </div>
    </div>
    </div>
  ) : null
}

export default Evento;