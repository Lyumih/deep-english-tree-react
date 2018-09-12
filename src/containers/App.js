import React, { Component } from 'react';
import './../App.css';

import Node from './../components/Node'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Node />
        <Node rus="Фрукт" eng="fruct"/>
        <Node rus="Яблоко" eng="apple"/>
      </div>
    );
  }
}

export default App;
