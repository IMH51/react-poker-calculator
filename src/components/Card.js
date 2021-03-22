import React from "react"

const Card = ({ card: { name, code }, disable, clickHandler }) => (
  <img
    className="small-card"
    src={`imgs/cards/${code}.png`}
    alt={name}
    onClick={disable ? undefined : clickHandler}
  />
)

export default Card
