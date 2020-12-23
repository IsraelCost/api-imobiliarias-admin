import React from "react";

import {
  Container,
  Box,
  FormElement,
  Field,
  Label,
  Input,
  BtnClose,
  TitleForm,
  Divisor,
  BtnSubmit,
} from "./styles";

import FormError from "../../Dashboard/FormError/index";

import ErrorModal from "../../Dashboard/ErrorModal/index";

import api from "../../../services/api";

export default class FormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nomeCondominioInputValue: "",
      chaveCondominioInputValue: "",
      method: "",
      errors: null,
      displayForm: true,
      itemKeyToUpdate: '',
      item: null,
      openModalError: false,
      errorModalMessage: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ method: this.props.method }, () => {
      if (this.state.method === 'put') {
        this.setState({ item: this.props.item }, () => {
          this.setState({itemKeyToUpdate: this.props.itemKey, nomeCondominioInputValue: this.state.item.nome_condominio, chaveCondominioInputValue: this.state.item.chave_condominio });
        });
      }
    });
  }

  handleChange(e) {
    if (e.target.name === 'nome_condominio') {
      this.setState({ nomeCondominioInputValue: e.target.value });
    }
    if (e.target.name === 'chave_condominio') {
      this.setState({ chaveCondominioInputValue: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.state.nomeCondominioInputValue || !this.state.chaveCondominioInputValue) {
      const errors = {};
      if (!this.state.nomeCondominioInputValue) {
        errors.nome_condominio = { message: "Preencha todos os campos" };
      }

      if (!this.state.chaveCondominioInputValue) {
        errors.chave_condominio = { message: "Preencha todos os campos" };
      }

      this.setState({ errors });
      return;
    }

    this.state.method === "post" ? this.postOnAPI() : this.updateOnAPI();
  }

  async postOnAPI() {
    try {
      await api.post("/condominios", {
        nome_condominio: this.state.nomeCondominioInputValue,
        chave_condominio: this.state.chaveCondominioInputValue,
      });
      this.setState({ nomeCondominioInputValue: "", chaveCondominioInputValue: "", errors: null });
      this.props.getData();
    } catch (err) {
      console.error(err);
      const errorModalMessage = err.response.status === 400 ? 'Verifique se os campos foram preenchidos corretamente' : 'Ops... Ocorreu um erro :/';
      this.setState({ openModalError: true, errorModalMessage });
    }
  }

  async updateOnAPI() {
    try {
      await api.put(`/condominios/${this.state.itemKeyToUpdate}`, {
        nome_condominio: this.state.nomeCondominioInputValue,
        chave_condominio: this.state.chaveCondominioInputValue,
      });
      this.setState({ nomeCondominioInputValue: "", chaveCondominioInputValue: "", errors: null });
      this.props.getData();
      this.props.closeModal();
    } catch (err) {
      console.error(err);
      const errorModalMessage = err.response.status === 400 ? 'Verifique se os campos foram preenchidos corretamente' : 'Ops... Ocorreu um erro :/';
      this.setState({ openModalError: true, errorModalMessage });
    }
  }

  render() {
    const insertErrors = (nameInput) => {
      if (this.state.errors && this.state.errors[nameInput]) {
        const error = this.state.errors[nameInput];
        const message = error.message;
        return (
          <FormError content={ message } />
        );
      } else {
        return null;
      }
    };

    const handleModal = (value = false) => {
      this.setState({ openModalError: value, displayForm: !value });
    };

    const insertModalError = () => {
      return this.state.openModalError ? (
        <ErrorModal errorMessage={ this.state.errorModalMessage } closeModal={ handleModal } />
      ) : null;
    };

    return (
      <>
        <Container display={this.state.displayForm}>
          <Box>
            <BtnClose onClick={this.props.closeModal} />
            <TitleForm>Condomínio</TitleForm>
            <Divisor />
            <FormElement
              onSubmit={this.handleSubmit}
              method={this.state.method}
            >
              <Field>
                <Label htmlFor="nome_condominio">Nome do condomínio:</Label>
                <Input
                  type="text"
                  name="nome_condominio"
                  value={this.state.nomeCondominioInputValue}
                  onChange={this.handleChange}
                />
              {insertErrors('nome_condominio')}
              </Field>
              <Field>
                <Label htmlFor="chave_condominio">Chave do condomínio:</Label>
                <Input
                  type="text"
                  name="chave_condominio"
                  value={this.state.chaveCondominioInputValue}
                  onChange={this.handleChange}
                />
              {insertErrors('chave_condominio')}
              </Field>
              <BtnSubmit type="submit">Enviar</BtnSubmit>
            </FormElement>
          </Box>
        </Container>
        {insertModalError()}
      </>
    );
  }
}
