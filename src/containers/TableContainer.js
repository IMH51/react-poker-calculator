import React from 'react'
import Card from "../components/Card"
import Button from "../components/Button"

const TableContainer = props => {
  return (
    <div className={props.containerClass}>
      <Button selected={props.selected} area={props.cardsClass} setSelected={props.setSelected}/>
      <div >
        {props.cards.map(card => <Card key={card.name} card={card} area={props.cardsClass} clickHandler={() => props.removeCard(props.card, props.area)}/>)}
      </div>
    </div>
  )
}

export default TableContainer