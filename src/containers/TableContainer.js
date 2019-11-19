import React from 'react'
import Card from "../components/Card"
import AreaButton from "../components/AreaButton"

const TableContainer = ({ cards, selectedKey, areaKey, areaName, disable, setSelectedKey, removeCard }) => {
  const selectedClass = selectedKey === areaKey && "selected-area"
  const handleClick = () => setSelectedKey(areaKey)
  return (
    <div className={`table-card-containers ${selectedClass}`}>
      <AreaButton {...{selectedKey, areaKey, areaName, disable, handleClick}}/>
      <div >
        {cards.map(card => {
        return <Card key={card.name} clickHandler={() => removeCard(card, areaKey)} {...{areaName, disable, card}} />
        })}
      </div>
    </div>
  )
}

export default TableContainer