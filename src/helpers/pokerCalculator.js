import { CardGroup, OddsCalculator } from "poker-odds-calculator"

const getString = cards => cards.map(card => card.code).join("")

const getGroup = cards => CardGroup.fromString(getString(cards))

const calculateOdds = (player1, table, player2) => {
  const groups = [[getGroup(player1), getGroup(player2)], getGroup(table)]

  const { equities } = OddsCalculator.calculate(...groups)

  const [p1, p2] = equities.map(equity => equity.getEquity())

  const tie = 100 - p1 - p2

  return { p1, p2, tie }
}

export default calculateOdds
