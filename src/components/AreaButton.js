import React from 'react'

const AreaButton = props => {
    const buttonText = props.selected === props.area ? `Adding to ${props.area} Cards` : `${props.area} Cards`
    const buttonClass = props.selected === props.area ? "selected-button" : ""
    return (
      <button className={buttonClass} disabled={props.disable} onClick={props.handleClick}>{buttonText}</button>
    )
}

export default AreaButton