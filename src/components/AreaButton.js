import React from 'react'
import { getAreaName } from "../helpers/areaData"

const AreaButton = ({ selectedArea, areaName, disable, handleClick}) => {
    const buttonText = `${selectedArea === areaName ? "Adding to" : ""} ${getAreaName(areaName)} Cards`
    const buttonClass = selectedArea === areaName ? "selected-button" : "" 
    return (
      <button className={buttonClass} disabled={disable} onClick={handleClick}>{buttonText}</button>
    )
}

export default AreaButton