import React, { Component } from 'react';
import axios from 'axios';
import UserModel from '../model/userModel';

class PresencaConfirmada  extends React.Component {

    constructor(props) {
        super(props);
      }

    handleClick () {
        const haveUser = UserModel.getInstance.getUserID != '';

        const fakeData = {
            "email": this.state.username,
	        "senha": this.state.password
        };

        if (haveUser) {
            
            axios.post("https://cardume.herokuapp.com/eventos/login", fakeData)
            .then( response => { 
                console.log(response)
                UserModel.getInstance.setUserID(this.state.username)
                this.setState({ page: '' });
            })
            .catch(error => {
                console.log(error.response)
            });
        }
        else {

            axios.post("https://cardume.herokuapp.com/eventos/registerUser", fakeData)
            .then( response => { 
                console.log(response)
                this.setState({ page: '' });
            })
            .catch(error => {
                console.log(error.response)
            });
        }
          
      }

    render() { 
        const haveUser = UserModel.getInstance.getUserID != '';
        return (
            <div className="cardBig">
                <TextInput
                    ref= {(el) => { this.username = el; }}
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
                />
                <TextInput
                    ref= {(pas) => { this.password = pas; }}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                />
                <button onClick={this.handleClick} type="button" class="btn btn-primary">{ haveUser ? Login : Register }</button>
            </div>
        ); 
    } 
}
export default PresencaConfirmada;