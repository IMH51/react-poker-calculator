import React from "react"

const AreaButton = ({
  selectedKey,
  areaKey,
  areaName,
  disable,
  handleClick,
}) => (
  <button
    className={selectedKey === areaKey && "selected-button"}
    disabled={disable}
    onClick={handleClick}
  >
    {`${selectedKey === areaKey ? "Adding to" : ""} ${areaName} Cards`}
  </button>
)

export default AreaButton
