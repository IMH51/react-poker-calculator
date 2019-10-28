import { CardGroup, OddsCalculator } from 'poker-odds-calculator';

export default (p1, p2, table) => {
  const player1Cards = CardGroup.fromString(p1);
  const player2Cards = CardGroup.fromString(p2);
  const board = CardGroup.fromString(table);

  const result = OddsCalculator.calculate([player1Cards, player2Cards], board);
  const player1 = result.equities[0].getEquity()
  const player2 = result.equities[1].getEquity()
  const tie = 100 - player1 - player2

  return { player1, player2, tie }
}