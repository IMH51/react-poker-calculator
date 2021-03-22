import React, { useState, useRef } from "react"
import Card from "../components/Card"

const CommunalContainer = ({ communalCards, disable, addCard }) => {
  const [leftClass, setLeftClass] = useState("hidden")
  const [rightClass, setRightClass] = useState()
  const [lastScrollPosition, setlastScrollPosition] = useState(0)

  const scrollRef = useRef()

  const handleScroll = ({
    target: { scrollLeft, scrollWidth, offsetWidth, clientLeft },
  }) => {
    const divWidth = scrollWidth + clientLeft * 2 - offsetWidth
    setLeftClass(scrollLeft === 0 && "hidden")
    setRightClass(scrollLeft === divWidth && "hidden")
    setlastScrollPosition(scrollLeft)
  }

  const increaseScroll = () => (scrollRef.current.scrollLeft += 500)

  const decreaseScroll = () => (scrollRef.current.scrollLeft -= 500)

  const disableScroll = e => (e.target.scrollLeft = lastScrollPosition)

  return (
    <div className="scroll-container">
      <div className="arrow-container">
        <p className={`${leftClass} left arrow `}>
          Scroll
          <img
            className="arrow-img"
            alt="left arrow"
            src="imgs/arrow-left.png"
            onClick={decreaseScroll}
          ></img>
        </p>
        <p className={`${rightClass} right arrow`}>
          Scroll
          <img
            className="arrow-img"
            alt="right arrow"
            src="imgs/arrow-right.png"
            onClick={increaseScroll}
          ></img>
        </p>
      </div>
      <div
        ref={scrollRef}
        onScroll={disable ? disableScroll : handleScroll}
        className="communal-container"
      >
        {communalCards.map(card => (
          <Card
            key={card.name}
            clickHandler={() => addCard(card)}
            {...{ disable, card }}
          />
        ))}
      </div>
    </div>
  )
}

export default CommunalContainer
