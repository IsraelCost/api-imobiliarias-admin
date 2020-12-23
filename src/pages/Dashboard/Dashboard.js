import React, { useEffect } from "react";

import Header from "../../components/Dashboard/Header/index";
import ListView from "../../components/Dashboard/ListView/index";
import Footer from "../../components/Dashboard/Footer/index";

import { Context } from '../../Context/OptionKeyContext';

export default function Dashboard(props) {
  return (
    <Context.Consumer>
      {({optionKey, optionTitle, insertOptionKey}) => {
        return (
          <>
         <Header />
         <ListView condominioKey={ optionKey } titleCondominio={ optionTitle } />
         <Footer />
         </>
        );
      }}
    </Context.Consumer>
  );
}
