import React from "react";

import { FormElement, Field, Label, Input, BtnSubmit } from "./styles";

import FormValidator from "../../../services/FormValidator";
import FormError from "../FormError/index";

import api from "../../../services/api";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: this.props.fields,
      inputsValues: new Map(),
      errors: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.postDataOnAPI = this.postDataOnAPI.bind(this);
    this.updateDataOnAPI = this.updateDataOnAPI.bind(this);
  }

  componentDidMount() {
    this.setState({ fields: this.props.fields }, () => {
      const inputsValuesForInitialization = new Map();
      for (let field of this.state.fields) {
        inputsValuesForInitialization.set(field.input.name, field.input.value);
      }
      this.setState({ inputsValues: inputsValuesForInitialization });
    });
    if (this.props.method === "update") {
      const inputsValues = new Map();
      for (let field of this.state.fields) {
        inputsValues.set(field.input.name, field.input.value);
      }
      this.setState({ inputsValues });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const validator = new FormValidator(
      this.state.inputsValues
    );
    validator.validate();
    if (validator.errors.length > 0) {
      this.setState({ errors: validator.errors });
      return;
    }
    const data = {};
    for (let [key, value] of this.state.inputsValues) {
      data[key] = value;
    }
    if (this.props.method === "post") {
      this.postDataOnAPI(data);
    } else if (this.props.method === "update") {
      this.updateDataOnAPI(data, this.props.itemId);
    }
    const inputsValues = new Map();
    for (let [key, value] of this.state.inputsValues) {
      inputsValues.set(key, "");
    }
    this.setState({ inputsValues, errors: [] });
  }

  async postDataOnAPI(data) {
    try {
      console.log();
      await api.post(
        `condominios/${this.props.condominioKey}/${this.props.list}`,
        data
      );
      this.props.methodToUpdateList();
    } catch (err) {
      console.error(err);
      const errorMessage =
        err.response.status === 400
          ? "Verifique se os dados foram preenchidos corretamente"
          : "Ops... Ocorreu um erro :/";
      this.props.closeForm(true, errorMessage);
    }
  }

  async updateDataOnAPI(data, itemId) {
    try {
      await api.put(`condominios/${this.props.condominioKey}/${this.props.list}/${itemId}`, data);
      this.props.closeModal();
      this.props.methodToUpdateList();
    } catch (err) {
      console.error(err);
      const errorMessage =
        err.response.status === 400
          ? "Verifique se os dados foram preenchidos corretamente"
          : "Ops... Ocorreu um erro :/";
      this.props.closeForm(true, errorMessage);
    }
  }

  handleChange(e) {
    const inputsValues = this.state.inputsValues;
    let key = e.target.name;
    inputsValues.set(key, e.target.value);
    this.setState({ inputsValues: inputsValues });
  }

  render() {
    const createErrors = (inputName) => {
      if (this.state.errors.length === 0) return;
      let errorInput = this.state.errors.find(
        (error) => error.nameInput === inputName
      );
      if (!errorInput) return;
      return <FormError content={errorInput.messageError} />;
    };

    return (
            <FormElement
              onSubmit={this.handleSubmit}
              method="POST"
              display={this.props.display}
            >
              {this.state.fields.map((field, index) => {
                return (
                  <Field>
                    <Label htmlFor={field.label.for}>
                      {field.label.content}:
                    </Label>
                    <Input
                      type={field.input.type}
                      value={this.state.inputsValues.get(field.input.name)}
                      name={field.input.name}
                      onChange={this.handleChange}
                    />
                    {createErrors(field.input.name)}
                  </Field>
                );
              })}
              <BtnSubmit type="submit">Enviar</BtnSubmit>
            </FormElement>
    );
  }
}
