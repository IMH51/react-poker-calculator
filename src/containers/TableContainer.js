import React from "react"
import Card from "../components/Card"
import AreaButton from "../components/AreaButton"

const TableContainer = ({
  cards,
  selectedKey,
  areaKey,
  areaName,
  disable,
  setSelectedKey,
  removeCard,
}) => (
  <div
    className={`table-card-containers ${
      selectedKey === areaKey && "selected-area"
    }`}
  >
    <AreaButton
      handleClick={() => setSelectedKey(areaKey)}
      {...{
        selectedKey,
        areaKey,
        areaName,
        disable,
      }}
    />
    <div>
      {cards.map(card => (
        <Card
          key={card.name}
          clickHandler={() => removeCard(card, areaKey)}
          {...{ areaName, disable, card }}
        />
      ))}
    </div>
  </div>
)

export default TableContainer
