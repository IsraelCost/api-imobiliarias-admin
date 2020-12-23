import React from 'react';

import { ErrorMessage } from './styles';

export default class FormError extends React.Component {
  render() {
    return (
    <ErrorMessage>{ this.props.content }</ErrorMessage>
    );
  }
}
