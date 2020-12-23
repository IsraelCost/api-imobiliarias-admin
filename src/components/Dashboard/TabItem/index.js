import React from 'react';

import { Item } from './styles';

export default class TabItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false, index: this.props.index, list: this.props.list, listOpened: this.props.listOpened };
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
    if (this.state.isActive && this.props.index !== this.props.activeIndex) {
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
        this.props.onClickFunction(this.props.index, this.props.list);
      } }>{this.props.content}</Item>
    );
  }
}
