import React from "react";

import { withRouter } from 'react-router-dom';

import { ContainerHeader, Logo, BtnLogout } from "./styles";

import { logout } from '../../../services/auth';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.logoutDashboard = this.logoutDashboard.bind(this);
  }

  async logoutDashboard() {
    try {
      logout();
      this.props.history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <ContainerHeader>
        <Logo>
          <img
            src="https://preview.keenthemes.com/metronic/react/demo2/media/logos/logo-letter-1.png"
            alt="Logo"
          />
        </Logo>
        <BtnLogout onClick={this.logoutDashboard}>
          <button>Sair</button>
        </BtnLogout>
      </ContainerHeader>
    );
  }
}

export default withRouter(Header);
