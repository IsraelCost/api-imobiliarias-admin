import React from "react";

import Header from "../../components/SelectCondominio/Header/index";
import List from "../../components/SelectCondominio/List/index";
import Footer from '../../components/SelectCondominio/Footer/index';

class SelectCondominio extends React.Component {
  render() {
    return (
      <>
        <Header />
        <List />
        <Footer />
      </>
    );
  }
}

export default SelectCondominio;
