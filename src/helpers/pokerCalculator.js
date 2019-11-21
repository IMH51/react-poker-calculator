import { CardGroup, OddsCalculator } from 'poker-odds-calculator';

const getString = cards => cards.map(card => card.code).join("")

const getGroup = cards => CardGroup.fromString(getString(cards))

const calculateOdds = (player1, table, player2) => {
  const result = OddsCalculator.calculate([getGroup(player1), getGroup(player2)], getGroup(table))
  const p1 = result.equities[0].getEquity()
  const p2 = result.equities[1].getEquity()
  const tie = 100 - p1 - p2
  return { p1, p2, tie }
}

export default calculateOdds