import React, { Component } from 'react';
import UserModel from '../model/userModel';
import Chekins from './chekins';

class perfil  extends React.Component {

    render() { 
        return (
            <div className="card cardBig">
                {UserModel.getInstance().getCheckins().map(c => Chekins(c))}
            </div>
        ); 
    } 
}
export default perfil;