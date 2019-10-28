import React from 'react'

const Card = props => {
  const clickFunction = props.disable ? null : props.clickHandler
  return (
  <img src={`/imgs/cards/${props.card.code}.png`} alt={props.card.name} className={"small-card"} onClick={clickFunction} />
  )
}

export default Card