import React from 'react'

const OddsDisplay = ({ odds, enable, resetTable, getAndShowOdds}) => {
  const handleClick = odds ? resetTable : getAndShowOdds
  const buttonText = odds ? "Reset Table" : "Calculate Odds" 
  const buttonClass = enable ? "selected-button" : "disable"
  return (
    <div className="odds-container">
      { odds ? (
        <p>To calculate new odds, click Reset to clear the table.</p>
      ) : (
        <p>Once you have selected enough cards, click Calculate to see who has the better chance of winning the hand!</p>
      )}
      <button className={buttonClass} disabled={!enable} onClick={handleClick}>{buttonText}</button>
      <div className="results-container">
        {odds ? (
          <>
          <p>Player 1 Win: {odds.p1}%</p>
          <p>Player 2 Win: {odds.p2}%</p>
          <p>Split Pot: {odds.tie}%</p>
          </>
        ) : (
          <p>Results will appear here...</p>
        )}
      </div>
    </div>
  )
}

export default OddsDisplay