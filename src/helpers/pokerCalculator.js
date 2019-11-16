import { CardGroup, OddsCalculator } from 'poker-odds-calculator';

const getString = cards => cards.map(card => card.code).join("")

const getGroup = cards => CardGroup.fromString(getString(cards))

const calculateOdds = (p1, table, p2) => {
  const result = OddsCalculator.calculate([getGroup(p1), getGroup(p2)], getGroup(table))
  const odds1 = result.equities[0].getEquity()
  const odds2 = result.equities[1].getEquity()
  const tie = 100 - odds1 - odds2
  return { odds1, odds2, tie }
}

export default calculateOdds