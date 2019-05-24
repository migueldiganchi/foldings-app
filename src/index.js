import React from "react";
import ReactDOM from "react-dom";

import Holder from './components/App/Holder';

import Accordion from "./components/Accordion/Accordion";
import Developer from "./components/Developer/Developer";

import "./styles.css";

// api
import foldings from "./io/foldings";

const appTitle = "Some rules in life";

const developer = {
  name: "Miguel Diganchi",
  url: "https://migueldiganchi.github.io/"
};

function App() {
  return (
    <Holder title={appTitle}>
        <Accordion foldings={foldings} />
        <Developer developer={developer} />
    </Holder>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
