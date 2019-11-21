import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import CardInstructions from "./components/CardInstructions"
import CommunalContainer from "./containers/CommunalContainer"
import TableContainer from "./containers/TableContainer"
import OddsDisplay from "./components/OddsDisplay"
import cards from "./helpers/cardData"
import calculateOdds from "./helpers/pokerCalculator"
import { areas, areaKeys } from "./helpers/areaData"

const initialState = {
  cards,
  ...areas,
  selectedKey: areaKeys[0],
  odds: null
}

class App extends Component {

  state = initialState

  selectedCards = () => [ ...areaKeys.map(key => this.state[key].cards) ]

  availableCards = () => this.state.cards.filter(card => !this.selectedCards().flat().includes(card))

  addCard = selectedCard => {
    let currentArea = this.state[this.state.selectedKey]
    if (currentArea.cards.length < currentArea.limit) {
      this.setState({ [this.state.selectedKey]: {
        ...currentArea,
        cards: [...currentArea.cards, selectedCard ]}
      })
    } else {
      alert("You can't add any more cards to this area!")
    }
  }

  removeCard = (selectedCard, areaKey) => {
    let currentArea = this.state[areaKey]
    this.setState({ [areaKey]: {
      ...currentArea,
      cards: currentArea.cards.filter(card => card !== selectedCard)}
    })
  }

  setSelectedKey = selectedKey => this.setState({ selectedKey })

  enableCalcButton = () => this.selectedCards().flat().length === 7

  getAndShowOdds = () => {
    const odds = calculateOdds(...this.selectedCards())
    this.setState({ odds })
  }

  resetTable = () => this.setState(initialState)

  disableApp = () => !!this.state.odds

  renderTableAreas = (keys, props = {}) => {
    return keys.map(key => {
      const { cards, areaName } = this.state[key]
      return <TableContainer areaKey={key} {...{ key, cards, areaName, ...props}} />
    })
  }

  render() {
    const { addCard, 
            removeCard, 
            setSelectedKey, 
            getAndShowOdds, 
            resetTable, 
            renderTableAreas, 
            disableApp, 
            enableCalcButton, 
            availableCards } = this
    const { selectedKey, odds } = this.state
    const { areaName } = this.state[selectedKey]
    const communalCards = availableCards()
    const enable = enableCalcButton()
    const disable = disableApp()
    const tableProps = { disable, removeCard, setSelectedKey, selectedKey }
    const tableAreas = renderTableAreas(areaKeys, tableProps)
    return (
      <div>
        <Header />
        <CommunalContainer {...{communalCards, disable, addCard}}/>
        <CardInstructions {...{areaName}} />
        <div className="table-containers" >
          {tableAreas}
        </div>
        <OddsDisplay {...{enable, getAndShowOdds, resetTable, odds}} />
      </div>
    );
  }

}

export default App;
