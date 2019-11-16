import React from 'react'
import Card from "../components/Card"
import AreaButton from "../components/AreaButton"

const TableContainer = ({ cards, selectedArea, areaName, disable, setSelected, removeCard }) => {
  const selectedClass = selectedArea === areaName && "selected-area"
  const handleClick = () => setSelected(areaName)
  return (
    <div className={`table-card-containers ${selectedClass}`}>
      <AreaButton {...{selectedArea, areaName, disable, handleClick}}/>
      <div >
        {cards.map(card => <Card key={card.name} clickHandler={() => removeCard(card, areaName)} {...{areaName, disable, card}} />)}
      </div>
    </div>
  )
}

export default TableContainer