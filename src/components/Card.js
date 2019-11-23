import React from 'react'

const Card = ({ card: { name, code}, disable, clickHandler}) => {
  const clickFunction = disable ? undefined : clickHandler
  return (
  <img className="small-card" src={`imgs/cards/${code}.png`} alt={name} onClick={clickFunction} />
  )
}

export default Card