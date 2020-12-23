import React from "react";

import { BtnClose, ContainerModal, ContainerError, AlertIcon } from "./styles";

export default class ErrorModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    this.props.closeModal(true);
  }

  handleCloseModal() {
    this.props.closeModal(false);
  }

  render() {
    return (
      <ContainerModal>
        <ContainerError>
          <BtnClose onClick={ this.handleCloseModal } />
          <AlertIcon />
          <p>{ this.props.errorMessage }</p>
        </ContainerError>
      </ContainerModal>
    );
  }
}
