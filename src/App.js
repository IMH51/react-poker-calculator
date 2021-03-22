import React, { useState } from "react"
import "./App.css"
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
  odds: null,
}

const App = () => {
  const [state, setState] = useState(initialState)

  const { cards, selectedKey, odds } = state

  const selectedCards = () => [...areaKeys.map(key => state[key].cards)]

  const availableCards = () =>
    cards.filter(card => !selectedCards().flat().includes(card))

  const addCard = selectedCard => {
    let currentArea = state[selectedKey]
    if (currentArea.cards.length < currentArea.limit) {
      return setState({
        ...state,
        [selectedKey]: {
          ...currentArea,
          cards: [...currentArea.cards, selectedCard],
        },
      })
    }
    alert("You can't add any more cards to this area!")
  }

  const removeCard = (selectedCard, areaKey) => {
    let currentArea = state[areaKey]
    setState({
      ...state,
      [areaKey]: {
        ...currentArea,
        cards: currentArea.cards.filter(card => card !== selectedCard),
      },
    })
  }

  const setSelectedKey = selectedKey => setState({ ...state, selectedKey })

  const enableCalcButton = () => selectedCards().flat().length === 7

  const getAndShowOdds = () => {
    const odds = calculateOdds(...selectedCards())
    setState({ ...state, odds })
  }

  const resetTable = () => setState(initialState)

  const disableApp = () => !!odds

  const renderTableAreas = (keys, props = {}) =>
    keys.map(key => {
      const { cards, areaName } = state[key]
      return (
        <TableContainer areaKey={key} {...{ key, cards, areaName, ...props }} />
      )
    })

  const { areaName } = state[selectedKey]

  const communalCards = availableCards()

  const enable = enableCalcButton()

  const disable = disableApp()

  const tableProps = { disable, removeCard, setSelectedKey, selectedKey }

  return (
    <div>
      <Header />
      <CommunalContainer {...{ communalCards, disable, addCard }} />
      <CardInstructions {...{ areaName }} />
      <div className="table-containers">
        {renderTableAreas(areaKeys, tableProps)}
      </div>
      <OddsDisplay {...{ enable, getAndShowOdds, resetTable, odds }} />
    </div>
  )
}

export default App
