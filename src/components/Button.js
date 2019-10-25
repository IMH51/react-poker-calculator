import React from 'react'

const Button = props => {
    const buttonText = props.selected === props.area ? `Adding to ${props.area} Cards` : `${props.area} Cards`
    return (
      <button onClick={() => props.setSelected(props.area)}>{buttonText}</button>
    )
}

export default Button