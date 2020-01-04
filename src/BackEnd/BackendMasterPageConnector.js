import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom"
import { connect } from "react-redux";
import { LoadData } from './../Redux/ActionCreators';
import { DataTypes } from './../Redux/Types';
import { BackendMasterPage } from './BackendMasterPage';

const mapStateToProps = (store) => ({
    ...store
})

const mapDispatchToProps = {
    LoadData
}

class ConnectComponent extends React.Component {
    componentDidMount() {
        this.props.LoadData(DataTypes.PROVINCES);
        this.props.LoadData(DataTypes.DISTRICTS);
        this.props.LoadData(DataTypes.NATIONS);
        this.props.LoadData(DataTypes.RELIGIONS);
    }
    render() {
        return <Switch>
            <Route path="/passportadmin/:page?"
                render={(routeProps) => <BackendMasterPage {...this.props} {...routeProps} currentPage={routeProps.match.params.page} />} />
            <Redirect to="/passportadmin" />
        </Switch>
    }
}

export const BackendMasterPageConnector = connect(mapStateToProps, mapDispatchToProps)(ConnectComponent);