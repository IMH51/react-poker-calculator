import { CardGroup, OddsCalculator } from 'poker-odds-calculator';

const getOdds = () => {
  const player1Cards = CardGroup.fromString('JhJs');
  const player2Cards = CardGroup.fromString('JdQd');
  const board = CardGroup.fromString('7d9dTs');

  const result = OddsCalculator.calculate([player1Cards, player2Cards], board);

  console.log(`Player #1 - ${player1Cards} - ${result.equities[0].getEquity()}%`);
  console.log(`Player #2 - ${player2Cards} - ${result.equities[1].getEquity()}%`);
}