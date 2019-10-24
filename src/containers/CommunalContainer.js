import React from "react"
import Card from "../components/Card"

const CommunalContainer = props => {
  return (
    <div className="communal-container">
      {props.cards.map(card => <Card key={card.name} card={card}/>)}
    </div>
  )
}

export default CommunalContainer