import React from 'react'

const Button = props => {
    const slugified = props.area.toLowerCase().replace(" ", "_")
    const buttonClass = `${slugified} ${props.selected === props.area ? "selected-area" : ""}`
    const buttonText = props.selected === props.area ? `Adding to ${props.area} cards` : `${props.area} cards`
    return (
      <button className={buttonClass} onClick={() => props.setSelected(props.areaType)}>{buttonText}</button>
    )
}

export default Button