import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"

class App extends Component {

  state = {
    player1: [],
    player2: [],
    table: [],
    odds: {}
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
  
}

export default App;
