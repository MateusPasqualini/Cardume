import React, { Component } from 'react';
import axios from 'axios';
import UserModel from '../model/userModel';

class Login extends React.Component {
    constructor() {
        super();

        this.state = { username: '', password: ''};

        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleClick = this.handleClick.bind(this);
      }
    handleChangeUser(event) {
        return this.setState({username: event.target.value});
    }

    handleChangePassword(event) {
        return this.setState({password: event.target.value});
    }

    handleClick (e) {

        const fakeData = {
            "email": this.state.username,
	        "senha": this.state.password
        };

            axios.post("https://cardume.herokuapp.com/eventos/login", fakeData)
            .then( response => { 
                //console.log("Login")
                //console.log(response)
                //console.log(response.data.checkin)
                UserModel.getInstance().setUserID(this.state.username)
                //UserModel.getInstance().setCheckins(response.data.checkin)
                //UserModel.getInstance().setMoeda(response.data.moedas);
                //this.setState({ page: 'cadastroEven' });
            })
            .catch(error => {
                console.log(error.response)
            });
        }

    render() { 
        const user =this.state.username;
        const haveUser = UserModel.getInstance.getUserID != '' && UserModel.getInstance.getUserID != undefined;
        console.log("haveUser" +  haveUser);
        return (
            <div className="cardBig">
            <form onSubmit={this.handleClick}>
            <label>
            E-mail:
            <input type="text" value={user} onChange={this.handleChangeUser} />
            </label>
            <label>
            Senha:
            <input type="text" value={this.state.password} onChange={this.handleChangePassword} />
            </label>
            <input type="submit" value="Submit" />
             </form>
            </div>
        );
    } 
}
export default Login;