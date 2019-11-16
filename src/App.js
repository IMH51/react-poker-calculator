import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import CardInstructions from "./components/CardInstructions"
import CommunalContainer from "./containers/CommunalContainer"
import TableContainer from "./containers/TableContainer"
import OddsCalculator from "./components/OddsCalculator"
import cards from "./helpers/cardData"
import calculateOdds from "./helpers/pokerCalculator"
import { areas, areaKeys } from "./helpers/areaData"

const initialState = {
  cards,
  ...areas,
  selectedArea: areaKeys[0],
  odds: null
}

class App extends Component {

  state = initialState

  selectedCards = () => [ ...areaKeys.map(areaName => this.state[areaName].cards) ]

  availableCards = () => this.state.cards.filter(card => !this.selectedCards().flat().includes(card))

  addCard = selectedCard => {
    let currentArea = this.state[this.state.selectedArea]
    if (currentArea.cards.length < currentArea.limit) {
      this.setState({ [this.state.selectedArea]: {
        ...currentArea,
        cards: [...currentArea.cards, selectedCard ]}
      })
    } else {
      alert("You can't add any more cards to this area!")
    }
  }

  removeCard = (selectedCard, areaName) => {
    let currentArea = this.state[areaName]
    this.setState({ [areaName]: {
      ...currentArea,
      cards: currentArea.cards.filter(card => card !== selectedCard)}
    })
  }

  setSelected = selectedArea => this.setState({ selectedArea })

  enableCalcButton = () => this.selectedCards().flat().length === 7

  getAndShowOdds = () => {
    const odds = calculateOdds(...this.selectedCards())
    this.setState({ odds })
  }

  resetTable = () => this.setState(initialState)

  disableApp = () => !!this.state.odds

  render() {
    const communalCards = this.availableCards()
    const enable = this.enableCalcButton()
    const disable = this.disableApp()
    const { addCard, removeCard, setSelected, getAndShowOdds, resetTable } = this
    const { selectedArea, odds } = this.state
    const tableProps = {disable, removeCard, setSelected, selectedArea}
    return (
      <div>
        <Header />
        <CommunalContainer {...{communalCards, disable, addCard}}/>
        <CardInstructions {...{selectedArea}} />
        <div className="table-containers" >
          {areaKeys.map(areaName => <TableContainer key={areaName} cards={this.state[areaName].cards} {...{areaName, ...tableProps}} />)}
        </div>
        <OddsCalculator {...{enable, getAndShowOdds, resetTable, odds}} />
      </div>
    );
  }

}

export default App;
