import React, { Component } from "react";
import Axios from "axios";
import { AuthContext } from './AuthContext';

export class AuthProviderImpl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            webToken: null
        }
    }
    
    authenticate = (credentials) => {
        return Axios.post('http://localhost:3500/login', credentials).then(response => {
            if (response.data === true) {
                this.setState({
                    isAuthenticated: true,
                    webToken: response.data.token
                })
                return true;
            } else {
                throw new Error("Invalid Credentials");
            }
        })
    }

    signout = () => {
        this.setState({ isAuthenticated: false, webToken: null });
    }

    render = () =>
    <AuthContext.Provider
        value={{
            authenticate: this.authenticate,
            logout: this.signout
        }}>
        {this.props.children}
    </AuthContext.Provider>
}