const areas = {
    player1: {name: "Player 1", cards: [], limit: 2},
    table: {name: "Table", cards: [], limit: 3},
    player2: {name: "Player 2", cards: [], limit: 2}
  }
  
const areaKeys = Object.keys(areas)

const getAreaString = name => `${name[0].toUpperCase()}${name.slice(1,6)} ${name[6] || ""}`

export { areas, areaKeys, getAreaString }