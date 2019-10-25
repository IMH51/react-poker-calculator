import React from 'react'
import Card from "../components/Card"
import Button from "../components/Button"

const TableContainer = props => {

  const selected = props.selected === props.area ? "selected-area" : ""

  return (
    <div className={`table-card-containers ${selected}`}>
      <Button selected={props.selected} area={props.area} setSelected={props.setSelected}/>
      <div >
        {props.cards.map(card => <Card key={card.name} card={card} area={props.area} clickHandler={() => props.removeCard(card, props.area)}/>)}
      </div>
    </div>
  )
}

export default TableContainer