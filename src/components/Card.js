import React from 'react'

const Card = props => {
  return (
  <img src={`/imgs/cards/${props.card.code}.png`} alt={props.card.name} className={"small-card"} onClick={props.clickHandler} />
  )
}

export default Card