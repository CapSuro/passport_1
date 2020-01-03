import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom"
import { connect } from "react-redux";
import { MasterPage } from './MasterPage';
import { LoadData } from './../Redux/ActionCreators';
import { DataTypes } from './../Redux/Types';

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
            <Route path="/passport/:page?"
                render={(routeProps) => <MasterPage {...this.props} {...routeProps} currentPage={routeProps.match.params.page}/>} />
            <Redirect to="/passport" />
        </Switch>
    }
}

export const MasterPageConnector = connect(mapStateToProps, mapDispatchToProps)(ConnectComponent);