import React from 'react';

import { Link } from 'react-router-dom';

import Item from './styles';

export default class NavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false, index: this.props.index };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (this.props.index === 1) {
      this.setState({ isActive: true });
    }
  }

  handleClick() {
    this.setState({ isActive: true });
  }

  componentDidUpdate(prevProps) {
    if (this.props.activeIndex === prevProps.activeIndex ) return;
    if (this.state.isActive && this.state.index !== this.props.activeIndex) {
      this.setState({ isActive: false });
    }
  }

  render() {
    return (
      <Item
      isActive={this.state.isActive}
      index={ this.state.index }
      onClick={ () => {
        this.handleClick();
        this.props.onClickFunction(this.state.index);
      } }
      >
        <Link to={ this.props.href }>{ this.props.content }</Link>
      </Item>
    );
  }
}
