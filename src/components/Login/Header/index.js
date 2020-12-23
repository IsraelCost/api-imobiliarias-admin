import React from 'react';

import { HeaderLogin } from './styles.js';

export default class Header extends React.Component {
  render() {
    return (
      <HeaderLogin>
        <h3>Login Account</h3>
        <h4>Enter your username and password</h4>
      </HeaderLogin>
    );
  }
}
