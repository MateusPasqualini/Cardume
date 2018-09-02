import React, { Component } from 'react';
import UserModel from '../model/userModel';
import Chekins from './chekins';

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
            <p>Letícia</p>
            <p>trocas</p>
            </div>
            </div>
        ); 
    } 
}
export default perfil;