import React from 'react';
import { withRouter } from 'react-router-dom';

import { Container, Logo, Nav, BtnLogout } from './styles';

import NavItem from '../NavItem/index';

import { logout } from '../../../services/auth';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navItemActiveIndex: 1
    };

    this.handleClickTabItem = this.handleClickTabItem.bind(this);
    this.logoutDashboard = this.logoutDashboard.bind(this);
  }

  handleClickTabItem(index) {
    this.setState({ navItemActiveIndex: index });
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
      <Container>
        <Logo>
          <img src="https://preview.keenthemes.com/metronic/react/demo2/media/logos/logo-letter-1.png" alt="Logo" />
        </Logo>
        <Nav>
          <ul>
          <NavItem
            content="Dashboard"
            href="/dashboard"
            index={ 1 }
            activeIndex={ this.state.navItemActiveIndex }
            onClickFunction={ this.handleClickTabItem }
            />
            {/* <NavItem
            content="Outro item"
            href="/dashboard"
            index={ 2 }
            activeIndex={ this.state.navItemActiveIndex }
            onClickFunction={ this.handleClickTabItem }
            /> */}
          </ul>
        </Nav>
        <BtnLogout onClick={ this.logoutDashboard }>
          <button>Sair</button>
        </BtnLogout>
      </Container>
    );
  }
}

export default withRouter(Header);
