import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import CardInstructions from "./components/CardInstructions"
import CommunalContainer from "./containers/CommunalContainer"
import TableContainer from "./containers/TableContainer"
import OddsCalculator from "./components/OddsCalculator"
import cards from "./helpers/cardData"
import calculateOdds from "./helpers/pokerCalculator"

const initialState = {
  "Player 1": [],
  "Player 2": [],
  "Table": [],
  selected: "Player 1",
  limit: 2,
  odds1: null,
  odds2: null,
  tie: null,
}

class App extends Component {

  state = initialState

  availableCards = () => {
    return cards.filter(card => {
      return !this.state["Player 1"].includes(card) 
      && !this.state["Player 2"].includes(card)
      && !this.state["Table"].includes(card)
    })
  }

  addCard = selectedCard => {
    if (this.state[this.state.selected].length < this.state.limit) {
      this.setState({ [this.state.selected]: [...this.state[this.state.selected], selectedCard ]})
    } else {
      alert("You can't add any more cards to this area!")
    }
  }

  removeCard = (selectedCard, area) => {
    this.setState({ [area]: this.state[area].filter(card => card !== selectedCard)})
  }

  setSelected = area => this.setState({ selected: area, limit: area === "Table" ? 3 : 2 })

  getString = cards => cards.map(card => card.code).join("")

  getOdds = () => {
    return calculateOdds(
    this.getString(this.state["Player 1"]), 
    this.getString(this.state["Player 2"]), 
    this.getString(this.state["Table"])
    )
  }

  fullCards = () => this.state["Player 1"].length + this.state["Player 2"].length + this.state["Table"].length === 7

  getAndShowOdds = () => {
      let odds = this.getOdds()
      this.setState({ odds1: odds.player1, odds2: odds.player2, tie: odds.tie })
  }

  resetTable = () => this.setState(initialState)

  render() {
    const communalCards = this.availableCards()
    const areas = Object.keys(this.state).slice(0,3)
    const enable = this.fullCards()
    return (
      <div>
        <Header />
        <CommunalContainer cards={communalCards} addCard={this.addCard}/>
        <CardInstructions selected={this.state.selected} />
        <div className="table-containers" >
          <TableContainer area={areas[0]} cards={this.state[areas[0]]} removeCard={this.removeCard} setSelected={this.setSelected} selected={this.state.selected}/>
          <TableContainer area={areas[2]} cards={this.state[areas[2]]} removeCard={this.removeCard} setSelected={this.setSelected} selected={this.state.selected}/>
          <TableContainer area={areas[1]} cards={this.state[areas[1]]} removeCard={this.removeCard} setSelected={this.setSelected} selected={this.state.selected}/>
        </div>
        <OddsCalculator enable={enable} getAndShowOdds={this.getAndShowOdds} resetTable={this.resetTable} odds1={this.state.odds1} odds2={this.state.odds2} tie={this.state.tie} />
      </div>
    );
  }

}

export default App;
