import { CardGroup, OddsCalculator } from 'poker-odds-calculator';

export default (player1, player2, table) => {
  const player1Cards = CardGroup.fromString(player1);
  const player2Cards = CardGroup.fromString(player2);
  const board = CardGroup.fromString(table);

  const result = OddsCalculator.calculate([player1Cards, player2Cards], board);

  return {player1: result.equities[0].getEquity(), player2: result.equities[1].getEquity()}
}