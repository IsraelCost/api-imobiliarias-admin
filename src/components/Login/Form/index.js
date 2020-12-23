import React from "react";
import { Link, withRouter } from "react-router-dom";

import { Form, Field, Input, LoginButton, ShowPass } from "./style.js";

import FormError from "../../Dashboard/FormError";

import { login } from "../../../services/auth";

import api from "../../../services/api";

class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { usernameValue: "", passwordValue: "", error: {}, typeOfInputPassword: 'password' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signInAdministrator = this.signInAdministrator.bind(this);
    this.handleShowPassword = this.handleShowPassword.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const error = {};
    if (!this.state.usernameValue || !this.state.passwordValue) {
      error.message = "Preencha todos os campos";
    }
    this.setState({ error });
    if (error.message) return;
    this.signInAdministrator();
  }

  async signInAdministrator() {
    try {
      const res = await api.post("/administradores/authenticate", {
        username: this.state.usernameValue,
        password: this.state.passwordValue,
      });
      login(res.data.token);
      this.props.history.push("/select-condominio");
    } catch (err) {
      console.error(err);
      const error = {};
      if (err.response.status === 400) {
        error.message = "Usuário e/ou senha inválidos";
      }

      this.setState({ error });
    }
  }

  handleChange(e) {
    e.target.name === "username"
      ? this.setState({ usernameValue: e.target.value })
      : this.setState({ passwordValue: e.target.value });
  }

  handleShowPassword() {
    let typeOfInputPassword = this.state.typeOfInputPassword === 'password' ? 'text': 'password';
    this.setState({ typeOfInputPassword });
  }

  render() {
    const generateError = () => {
      return <FormError content={this.state.error.message} />;
    };

    return (
      <Form method="POST" onSubmit={this.handleSubmit}>
        <Field>
          <Input
            type="text"
            name="username"
            placeholder="Email"
            onChange={this.handleChange}
            value={this.state.usernameValue}
          />
        </Field>
        <Field>
          <Input
            type={ this.state.typeOfInputPassword }
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            value={this.state.passwordValue}
          />
          <ShowPass onClick={ this.handleShowPassword } />
        </Field>
        {generateError()}
        <LoginButton type="submit">Sign In</LoginButton>
      </Form>
    );
  }
}

export default withRouter(FormLogin);
