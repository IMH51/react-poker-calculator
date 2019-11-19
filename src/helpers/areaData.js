const areas = {
    player1: {areaName: "Player 1", cards: [], limit: 2},
    table: {areaName: "Table", cards: [], limit: 3},
    player2: {areaName: "Player 2", cards: [], limit: 2}
  }
  
const areaKeys = Object.keys(areas)

export { areas, areaKeys }