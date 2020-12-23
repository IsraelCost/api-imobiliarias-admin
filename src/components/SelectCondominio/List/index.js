import React from "react";

import { Container, ListComponent, BtnAddItem, Title } from "./styles";

import ItemList from "../ItemList/index";
import Form from "../FormModal/index";
import Modal from "../../Dashboard/Modal/index";
import ErrorModal from "../../Dashboard/ErrorModal/index";

import api from "../../../services/api";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      fieldsToForm: [],
      openModalForm: false,
      methodToFormModal: "",
      openModalError: false,
      itemToModal: null,
    };

    this.getData = this.getData.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    try {
      const response = await api.get("/condominios");
      const items = [...response.data];
      this.setState({ items });
    } catch (err) {
      console.error(err);
    }
  }

  handleForm(method = "", item = {}, key = "") {
    this.setState({
      methodToFormModal: method,
      openModalForm: !this.state.openModalForm,
      itemToModal: item,
      itemKey: key,
    });
  }

  render() {
    const handleModal = (value = false) => {
      this.setState({ openModalError: value });
    };

    const insertModalError = () => {
      return this.state.openModalError ? (
        <ErrorModal
          errorMessage="Ops... Ocorreu um erro :/"
          closeModal={handleModal}
        />
      ) : null;
    };

    const modalForm = () => {
      return this.state.openModalForm ? (
        <Modal
          componentToRender={Form}
          componentProps={{
            method: this.state.methodToFormModal,
            getData: this.getData,
            item: this.state.itemToModal,
            itemKey: this.state.itemKey,
          }}
          closeModal={this.handleForm}
        />
      ) : null;
    };

    return (
      <>
        <Container>
          <Title>Condomínios:</Title>
          <ListComponent>
            {this.state.items.map((item) => {
              return item.nome_condominio === "default" ? null : (
                <ItemList
                  content={item.nome_condominio}
                  chaveCondominio={ item.chave_condominio }
                  handleForm={this.handleForm}
                  item={item}
                  itemKey={item.chave_condominio.toString()}
                  getData={this.getData}
                />
              );
            })}
          </ListComponent>
          <BtnAddItem onClick={() => this.handleForm("post")}>
            Adicionar mais items
          </BtnAddItem>
        </Container>
        {modalForm()}
        {insertModalError()}
      </>
    );
  }
}

export default List;
