import React from 'react'
import { getAreaString } from "../helpers/areaData"

const CardInstructions = ({ selectedArea }) => {
  const name = getAreaString(selectedArea)
  return (
  <>
    <p>Click on a card above to add it to the {name} area. To add one to a different area, select it using the buttons below.</p>
    <p></p>
    <p>To remove a card from an area, simply click on it!</p>
  </>
  )
}

export default CardInstructions