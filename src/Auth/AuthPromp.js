import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { authWrapper } from "./AuthWrapper";
import { LogginForm } from './LoginForm';

export const AuthPrompt = withRouter(authWrapper(class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: null
        }
    }
    render = () => <LogginForm submitCallback={this.props.authenticate} />
}))