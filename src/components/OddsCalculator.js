import React from 'react'

const OddsCalculator = props => {
  const odds = props.odds1 && props.odds2
  const handleClick = odds ? props.resetTable : props.getAndShowOdds
  const buttonText = odds ? "Reset Table" : "Calculate Odds" 
  const buttonClass = props.enable ? "selected-button" : "disable"
  return (
    <div className="odds-container">
      { odds ? (
        <p>To calculate new odds, click Reset to clear the table.</p>
      ) : (
        <p>Once you have selected enough cards, click Calculate to see who has the better chance of winning the hand!</p>
      )}
      <button className={buttonClass} disabled={!props.enable} onClick={handleClick}>{buttonText}</button>
      <div className="results-container">
        {odds ? (
          <>
          <p>Player 1 Win: {props.odds1}%</p>
          <p>Player 2 Win: {props.odds2}%</p>
          </>
        ) : (
          <p>Results will appear here...</p>
        )}
      </div>
    </div>
  )
}

export default OddsCalculator