import React from 'react'
import { getAreaString } from "../helpers/areaData"

const AreaButton = ({ selectedArea, areaName, disable, handleClick}) => {
    const buttonText = `${selectedArea === areaName ? "Adding to" : ""} ${getAreaString(areaName)} Cards`
    const buttonClass = selectedArea === areaName ? "selected-button" : "" 
    return (
      <button className={buttonClass} disabled={disable} onClick={handleClick}>{buttonText}</button>
    )
}

export default AreaButton