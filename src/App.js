import React, { useState } from "react";
import GlobalStyles from "./styles/Global.js";

import Routes from "./routes";

import { Context } from "./Context/OptionKeyContext";

export default function App() {
  const [optionKey, setOptionKey] = useState("");
  const [optionTitle, setOptionTitle] = useState("");

  return (
    <Context.Provider value={{ optionKey, optionTitle, insertOptionKeyAndTitle: (key, title) => {
      setOptionKey(key);
      setOptionTitle(title);
      } }}>
      <GlobalStyles />
      <Routes />
    </Context.Provider>
  );
}
