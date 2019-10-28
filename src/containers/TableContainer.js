import React from 'react'
import Card from "../components/Card"
import AreaButton from "../components/AreaButton"

const TableContainer = props => {
  const selected = props.selected === props.area ? "selected-area" : ""
  return (
    <div className={`table-card-containers ${selected}`}>
      <AreaButton disable={props.disable} selected={props.selected} area={props.area} handleClick={() => props.setSelected(props.area)}/>
      <div >
        {props.cards.map(card => <Card disable={props.disable} key={card.name} card={card} area={props.area} clickHandler={() => props.removeCard(card, props.area)}/>)}
      </div>
    </div>
  )
}

export default TableContainer