import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from './services/auth';

import Login from './pages/Login/Login';
import SelectCondominio from './pages/SelectCondominio/SelectCondominio';
import Dashboard from './pages/Dashboard/Dashboard';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route { ...rest } render={ props => {
    return isAuthenticated() ? (
      <Component />
    ) : (
      <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )
  } } />
);

export default class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ Login } exact={ true } />
          <PrivateRoute path="/select-condominio" component={ SelectCondominio } exact={ true } />
          <PrivateRoute path="/dashboard" component={ Dashboard } exact={ true } />
        </Switch>
      </BrowserRouter>
    );
  }
}
