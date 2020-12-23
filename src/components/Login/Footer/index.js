import React from 'react';

import { FooterLogin } from './style.js';

export default class Footer extends React.Component {
  render() {
    const copy = '©'
    return (
      <FooterLogin>
        <p>{copy}Ideia360</p>
      </FooterLogin>
    );
  }
}
