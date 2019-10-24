import { CardGroup, OddsCalculator } from 'poker-odds-calculator';

export default () => {
  const player1Cards = CardGroup.fromString('JhJs');
  const player2Cards = CardGroup.fromString('JdQd');
  const board = CardGroup.fromString('7d9dTs');

  const result = OddsCalculator.calculate([player1Cards, player2Cards], board);

  return [`Player #1 - ${player1Cards} - ${result.equities[0].getEquity()}%`,
          `Player #2 - ${player2Cards} - ${result.equities[1].getEquity()}%`,
          `Table Cards - ${board}`]
}