import React, { Component } from 'react';
import axios from 'axios';
import UserModel from '../model/userModel';

class PresencaConfirmada  extends React.Component {

    handleClick () {
        const fakeData = {
            "id":"1", //id evento
            "email": UserModel.getInstance().getUserID() //email usuário
        };
          axios.post("https://cardume.herokuapp.com/eventos/checkin", fakeData)
            .then( response => { 
                console.log(response)
                this.setState({ page: '' });
            })
            .catch(error => {
                console.log(error.response)
            });
      }

    render() { 
        return (
            <div className="card cardBig">
                <p className="card-title">Obrigado por nos ajudar, agora você é mais um peixinho!<br/> Nos vemos no próximo evento!</p>
                <button onClick={this.handleClick} type="button" class="btn btn-primary">Chekin</button>
            </div>
        ); 
    } 
}
export default PresencaConfirmada;