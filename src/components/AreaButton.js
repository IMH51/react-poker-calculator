import React from 'react'

const AreaButton = ({ selectedKey, areaKey, areaName, disable, handleClick}) => {
    const buttonText = `${selectedKey === areaKey ? "Adding to" : ""} ${areaName} Cards`
    const buttonClass = selectedKey === areaKey ? "selected-button" : "" 
    return (
      <button className={buttonClass} disabled={disable} onClick={handleClick}>{buttonText}</button>
    )
}

export default AreaButton