import React from 'react';

import { Container, Box, TitleForm,  Divisor, BtnClose } from './styles';

import Form from '../Form/index';

import Modal from '../Modal/index';

import ErrorModal from '../ErrorModal/index';

export default class FormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fields: [], title: '', list: '', errorToModal: false, displayForm: true, errorModalMessage: '' };

    this.handleCloseForm = this.handleCloseForm.bind(this);
  }

  componentDidMount() {
    this.setState({ fields: this.props.fields, title: this.props.title, list: this.props.list });
  }

  handleCloseForm() {
    this.props.closeModal();
  }

  render() {
    const changeStateErrorModal = (value = false, errorMessage) => {
      this.setState({ errorToModal: value, displayForm: !value, errorModalMessage: errorMessage });
    }

    const createModalError = () => {
        return this.state.errorToModal ? (
          <Modal
          componentToRender={ ErrorModal }
          componentProps={{ errorMessage: this.state.errorModalMessage }}
          closeModal={ changeStateErrorModal }
          />
        ) : null;
    };

    return (
      <Container display={ this.state.displayForm }>
        <Box>
          <BtnClose onClick={ this.handleCloseForm } />
          { createModalError() }
          { this.state.fields.length > 0 && !this.state.errorToModal ? (
            <>
              <TitleForm>{ this.state.title }</TitleForm>
              <Divisor />
              <Form
              fields={ this.state.fields }
              list={ this.state.list }
              method={ this.props.method }
              itemId={ this.props.itemId }
              methodToUpdateList={ this.props.methodToUpdateList }
              closeForm={ changeStateErrorModal }
              closeModal={ this.handleCloseForm }
              condominioKey={ this.props.condominioKey }
              />
            </>
           ) : null }
        </Box>
      </Container>
    );
  }
}
