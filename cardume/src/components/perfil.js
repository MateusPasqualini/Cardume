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
            {this.props.id}
                {UserModel.getInstance().getUserID()}
            </div>
            <div className='card'>
                {UserModel.getInstance().getMoeda()}
            </div>
            <div className='card '>
                {UserModel.getInstance().getCheckins().map(c => Chekins(c))}
            </div>
            </div>
        ); 
    } 
}
export default perfil;