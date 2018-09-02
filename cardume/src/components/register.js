import React, { Component } from 'react';
import axios from 'axios';
import UserModel from '../model/userModel';
import TextInput from 'react';

class Register  extends React.Component {

    constructor(props) {
        super(props);

        this.state = { username: "", password: ""};

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

    handleClick () {
        const haveUser = UserModel.getInstance.getUserID != undefined;

        console.log("User")
        console.log(UserModel.getInstance.getUserID)
        const fakeData = {
            "email": this.state.username,
	        "senha": this.state.password
        };

        if (haveUser) {
            
            axios.post("https://cardume.herokuapp.com/eventos/login", fakeData)
            .then( response => { 
                console.log("Login")
                console.log(response)
                UserModel.getInstance.setUserID(this.state.username)
                this.setState({ page: 'cadastroEven' });
            })
            .catch(error => {
                console.log(error.response)
            });
        }
        else {

            axios.post("https://cardume.herokuapp.com/eventos/registerUser", fakeData)
            .then( response => { 
                console.log("Register")
                console.log(response)
                UserModel.getInstance.setUserID(this.state.username)
                this.setState({ page: 'cadastroEven' });
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
                 {/* <TextInput
                    ref= {(el) => { this.username = el; }}
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
                /> */}
                {/* <TextInput
                    ref= {(pas) => { this.password = pas; }}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                /> */}
                {/* <button onClick={this.handleClick} type="button" class="btn btn-primary">Login</button> */}
            </div>
        );
    } 
}
export default Register;