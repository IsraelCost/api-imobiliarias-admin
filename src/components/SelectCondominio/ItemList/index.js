import React from "react";

import { Link, withRouter, Redirect } from "react-router-dom";

import { Item, ActionsContainer, IconEdit, IconTrash } from "./styles";

import Modal from "../../Dashboard/Modal/index";
import ErrorModal from "../../Dashboard/ErrorModal/index";

import api from "../../../services/api";
import { Context } from "../../../Context/OptionKeyContext";

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, modalErrorMessage: "", itemSelectedKey: '', redirect: false };
    this.deleteItemOnAPI = this.deleteItemOnAPI.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  async deleteItemOnAPI(e, key) {
    e.preventDefault();
    try {
      await api.delete(`/condominios/${key}`);
      this.props.getData();
    } catch (err) {
      console.error(err);
      this.setState({
        hasError: true,
        modalErrorMessage: "Ops... Ocorreu um erro :/",
      });
    }
  }

  closeModal(value) {
    this.setState({ hasError: value });
  }

  render() {
    const insertModalError = () => {
      return this.state.hasError ? (
        <Modal
          componentToRender={ErrorModal}
          componentProps={{ errorMessage: this.state.modalErrorMessage }}
          closeModal={this.closeModal}
        />
      ) : null;
    };

    return (
      <Context.Consumer>
        {({ optionKey, optionTitle, insertOptionKeyAndTitle }) => (
          <Link to="/dashboard">
          <Item onClick={e => {
            insertOptionKeyAndTitle(this.props.itemKey, this.props.content);
          }}>
            <p>
              {this.props.content} : <span>{this.props.chaveCondominio}</span>
            </p>
            <ActionsContainer>
              <IconEdit
                onClick={(e) => {
                  e.preventDefault();
                  this.props.handleForm(
                    "put",
                    this.props.item,
                    this.props.itemKey
                  );
                }}
              />
              <IconTrash
                onClick={(e) => this.deleteItemOnAPI(e, this.props.itemKey)}
              />
            </ActionsContainer>
            {insertModalError()}
          </Item>
        </Link>
        )}
      </Context.Consumer>
    );
  }
}

export default withRouter(ItemList);
