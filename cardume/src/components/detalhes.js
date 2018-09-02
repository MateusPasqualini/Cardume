import React, { Component } from 'react';
import GMap from './gmap';

var dateFormat = require('dateformat');

class Detalhes extends React.Component {
    
    constructor(props) {
        super(props);
      }
      
    render() { 
        const { det } = this.props;
        const desc = det.descricao 
        const titulo = det.titulo  
        const inicio = det.inicio 
        const fim = det.fim 
        const adress = det.endereco 
        const duration = det.duration 

        return (
            <div>
                <p>{desc}</p>
                <p>{titulo}</p>
                <p>{dateFormat(inicio, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
                <p>{dateFormat(fim, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
                <p>{adress}</p>
                <div className="g-map">
                    <GMap 
                        containerElement={<div style={{height:100+'%'}}/>}
                        mapElement={<div style={{height:100+'%'}}/>}
                    />
                </div>
                {/* <img src="https://maps.googleapis.com/maps/api/staticmap?center=51.477222,0&zoom=14&size=400x400&key=AIzaSyAcm-qjeL6IiBFUcnjrbdPbzNjqPuW4FcI"/> */}
                <p>{duration}</p>
            </div>
        );
    } 
}
export default Detalhes;