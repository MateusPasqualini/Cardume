import React, { Component } from 'react';
import UserModel from '../model/userModel';
import Chekins from './chekins';
import Moeda from '../assets/moeda.png';
import Cartao from '../assets/cartao.png';
import FotoRosto from '../assets/WhatsApp Image 2018-09-02 at 15.56.16.jpeg';
class perfil  extends React.Component {
constructor(props){
    super(props);
}
    render() { 
        const teste = UserModel.getInstance().getUserID();
        console.log("teste" + teste);
        return (
            <div>
            <div className='card'>
            <div className='card-body'>
               <div className='rosto' ><img src={FotoRosto} className='rosto' ></img>
                    <h5 className='card-title nome'>Letícia</h5></div>
                <div><img src={Moeda}></img></div>
                <p className='card-title moeda'>Você possui 5.000 moedas</p>
            </div>
            </div>

            <div className='card'>
            <div className='card-body'>
                <div><img src={Cartao} className='imagemCartao'></img></div>
            </div>
            </div>
            </div>
        ); 
    } 
}
export default perfil;