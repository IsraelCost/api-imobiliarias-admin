import React from 'react';

import { Actions } from './styles';

import { IconEdit, IconTrash, IconGallery, IconGlobalUrl, IconImobi } from './styles';

import Modal from '../Modal/index';

import ErrorModal from '../ErrorModal/index';

import GalleryImovelFormModal from '../GalleryImovelFormModal/index';
import ImobiModalForm from '../ImobiModalForm/index';

import api from '../../../services/api';

export default class ActionsListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false, errorModalMessage: '', openGalleryModalForm: false, openImobiFormModal: false };
    this.updateItem = this.updateItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.closeErrorModal = this.closeErrorModal.bind(this);
    this.toggleGalleryFormModal = this.toggleGalleryFormModal.bind(this);
    this.toggleImobiFormModal = this.toggleImobiFormModal.bind(this);
    this.copyMenuUrlToClipboard = this.copyMenuUrlToClipboard.bind(this);
  }

  async updateItem() {
    this.props.openForm('update', this.props.index, this.props.itemId);
  }

  async deleteItem() {
    try {
      await api.delete(`/condominios/${this.props.condominioKey}/${this.props.list}/${this.props.itemId}`);
      this.props.methodToUpdateList();
    } catch (err) {
      console.error(err);
      const errorMessage = err.response.status === 400 ? 'Verifique se os dados foram preenchidos corretamente' : 'Ops... Ocorreu um erro :/';
      this.setState({ error: true, errorModalMessage: errorMessage });
    }
  }

  closeErrorModal() {
    this.setState({ error: false });
  }

  toggleGalleryFormModal() {
    this.setState({ openGalleryModalForm: !this.state.openGalleryModalForm });
  }

  toggleImobiFormModal() {
    this.setState({ openImobiFormModal: !this.state.openImobiFormModal });
  }

  copyMenuUrlToClipboard() {
    const url = `http://18.234.94.15/menu?condominio=${ this.props.condominioKey }&imobiliaria=${ this.props.itemId }`;
    alert(`A url para o menu é: ${url}`);
  }

  render() {
    const generateErrorModal = () => {
      return this.state.error ? (
        <Modal
        componentToRender={ ErrorModal }
        componentProps={{ errorMessage: this.state.errorModalMessage }}
        closeModal={ this.closeErrorModal }
        />
      ) : null;
    };

    const GalleryModalForm = () => {
      return this.state.openGalleryModalForm ? (
        <Modal
          componentToRender={ GalleryImovelFormModal }
          componentProps={{ idImovel: this.props.itemId }}
          closeModal={ this.toggleGalleryFormModal }
        />
      ) : null;
    };

    const GenerateImobiModalForm = () => {
      return this.state.openImobiFormModal ? (
        <Modal 
          componentToRender={ ImobiModalForm }
          componentProps={{ idImovel: this.props.itemId }}
          closeModal={ this.toggleImobiFormModal }
        />
      ) : null;
    };

    return (
      <>
        <Actions list={ this.props.list }>
          <IconGallery list={ this.props.list } onClick={ this.toggleGalleryFormModal } />
          <IconEdit onClick={ this.updateItem } />
          <IconTrash onClick={ this.deleteItem } />
          <IconGlobalUrl list={ this.props.list } onClick={ this.copyMenuUrlToClipboard } />
          <IconImobi list={ this.props.list } onClick={ this.toggleImobiFormModal } />
        </Actions>
        { generateErrorModal() }
        { GalleryModalForm() }
        { GenerateImobiModalForm() }
      </>
    );
  }
}
