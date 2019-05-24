import React from "react";
import ReactDOM from "react-dom";

import Holder from './components/App/Holder';

import Accordion from "./components/Accordion/Accordion";
import Developer from "./components/Developer/Developer";

import "./styles.css";

const appTitle = "Some rules in life";

const foldings = [
  {
    id: 1,
    title: "Before you pray",
    content: 
      <div>
        <p>Believe</p>
      </div>
  }, {
    id: 2,
    title: "Before speak",
    content: 
      <div>
        <p>Listen</p>
      </div>
  }, {
    id: 3,
    title: "Before you spend",
    content: 
      <div>
        <p>Earn</p>
      </div>
  }, {
    id: 4,
    title: "Before you write",
    content: 
      <div>
        <p>Think</p>
      </div>
  }, {
    id: 5,
    title: "Before you quit",
    content: 
      <div>
        <p>Try</p>
      </div>
  }, {
    id: 6,
    title: "Before die",
    content: 
      <div>
        <p>Live</p>
      </div>
  }
];

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
