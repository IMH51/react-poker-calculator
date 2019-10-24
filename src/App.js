import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import CommunalContainer from "./containers/CommunalContainer"
import cards from "./helpers/cardData"

class App extends Component {

  state = {
    player1: {
      card1: null,
      card2: null
    },
    player2: {
      card1: null,
      card2: null,
    },
    table: {
      card1: null,
      card2: null,
      card3: null,
    },
    odds: {
      player1: null,
      player2: null
    }
  }

  render() {
    return (
      <div>
        <Header />
        <CommunalContainer cards={cards} />
      </div>
    );
  }

}

export default App;
