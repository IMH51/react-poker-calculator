import React from 'react'

const Card = props => {
  return (
  <img class="small-card" src={`/imgs/cards/${props.card.code}.png`} alt={props.card.name} className={null} onClick={null} />
  )
}

export default Card