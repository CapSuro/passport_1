import React from 'react';
import { Button } from 'antd';
import './App.css';
import { PassportStore } from './Redux/PassportStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { MasterPageConnector } from './FrontEnd/MasterPageConnector';
import { BackendMasterPageConnector } from './BackEnd/BackendMasterPageConnector';
import { Resident } from './BackEnd/Resident';

function App() {
  return (
    <Provider store={PassportStore}>
      <Router>
        <Switch>
          <Route path="/passport" component={MasterPageConnector} />
          <Route path="/passportadmin" component={BackendMasterPageConnector} />
          <Route path="/resident" component={Resident} />
          <Redirect to="/passport" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
