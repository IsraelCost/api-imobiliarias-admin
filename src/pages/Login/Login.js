import React from 'react';

import Header from '../../components/Login/Header/index';
import FormLogin from '../../components/Login/Form/index';
import Footer from '../../components/Login/Footer/index';

import { PageLogin, BoxLogin } from './styles.js';

export default class Login extends React.Component {
  render() {
    return (
      <PageLogin>
        <BoxLogin>
          <Header />
          <FormLogin />
        </BoxLogin>
        <Footer />
      </PageLogin>
    );
  }
}
