import React from 'react';
import { Button } from 'antd';
import './App.css';
import { PassportStore } from './Redux/PassportStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { MasterPageConnector } from './FrontEnd/MasterPageConnector';

function App() {
  return (
    <Provider store={PassportStore}>
      <Router>
        <Switch>
          <Route path="/passport" component={MasterPageConnector} />
          <Redirect to="/passport" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
