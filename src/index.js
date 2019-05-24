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

class App extends React.Component {
  state = {
    activeDeveloper: false
  };

  componentDidMount () {
    setTimeout(() => {
      this.setState({activeDeveloper: true});
    }, 600);
  }
  
  render () {
    return (
      <Holder title={appTitle}>
          <Accordion foldings={foldings} />
          <Developer 
            isActive={this.state.activeDeveloper}
            developer={developer} />
      </Holder>
    );
  } 
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
