import React from 'react';
import ReactDOM from 'react-dom';

const modal = document.getElementById('modal');

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: React.createElement(this.props.componentToRender, { ...this.props.componentProps, closeModal: this.props.closeModal })
    };
  }

  render() {
    return ReactDOM.createPortal(this.state.component, modal);
  }
}
