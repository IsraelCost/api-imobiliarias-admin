import React from 'react';

import { DashboardFooter, Copy } from './styles';

export default class Footer extends React.Component {
  render() {
    return (
      <DashboardFooter>
        <Copy>©Ideia360</Copy>
      </DashboardFooter>
    );
  }
}
