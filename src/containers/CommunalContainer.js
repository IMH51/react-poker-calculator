import React, { useState } from "react"
import Card from "../components/Card"

const CommunalContainer = ({communalCards, disable, addCard}) => {

  const [leftClass, setLeftClass] = useState("hidden")
  const [rightClass, setRightClass] = useState()
  const [lastScrollPosition, setlastScrollPosition] = useState(0)

  const handleScroll = ({ target: { scrollLeft, scrollWidth, offsetWidth, childElementCount }}) => {
    let divWidth = scrollWidth - offsetWidth
    let cardWidth = divWidth / (childElementCount * 2)
    setLeftClass(!(scrollLeft >= cardWidth) && "hidden")
    setRightClass(scrollLeft >= divWidth - cardWidth && "hidden")
    setlastScrollPosition(scrollLeft)
  }

  const disableScroll = e => e.target.scrollLeft = lastScrollPosition

  const scrollFunction = disable ? disableScroll : handleScroll

  return (
    <div className="scroll-container">
      <div className="arrow-container">
        <p className={`${leftClass} left arrow `}>Scroll<img className="arrow-img" alt="right arrow" src='/imgs/arrow-right.png'></img></p>
        <p className={`${rightClass} right arrow`}>Scroll<img className="arrow-img" alt="left arrow" src='/imgs/arrow-left.png'></img></p>
      </div>
      <div onScroll={scrollFunction} className="communal-container">
        {communalCards.map(card => <Card key={card.name} clickHandler={() => addCard(card)} {...{disable, card}} />)}
      </div>
    </div>
  )
}

export default CommunalContainer