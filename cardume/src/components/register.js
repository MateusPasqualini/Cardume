import React, { Component } from 'react';
import axios from 'axios';
import UserModel from '../model/userModel';

class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = { username: '', password: ''};

        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleClick = this.handleClick.bind(this);
      }

    handleChangeUser(event) {
        this.setState({username: event.target.value});
    }


    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }

    handleClick (e) {
        const userMod = UserModel.getInstance().getUserID()
        const haveUser = userMod != undefined && userMod != '';
        console.log("userMode" + userMod);

        const fakeData = {
            "email": this.state.username,
	        "senha": this.state.password
        };



            axios.post("https://cardume.herokuapp.com/eventos/registerUser", fakeData)
            .then( response => { 
                console.log("Register")
                console.log(response)
                UserModel.getInstance().setUserID(this.state.username)
                this.setState({ page: 'cadastroEven' });
            })
            .catch(error => {
                console.log(error.response)
            });
        }

    render() { 
        const haveUser = UserModel.getInstance.getUserID != '' && UserModel.getInstance.getUserID != undefined;
        console.log("haveUser" +  haveUser);
        return (
            <div className="cardBig">
            <form onSubmit={this.handleClick}>
            <label>
            E-mail:
            <input type="text" value={this.state.username} onChange={this.handleChangeUser} />
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
export default Register;