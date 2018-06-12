'use strict'

const gameEvents = require('./game-logic/game-logic')
const gameApiEvents = require('./game-api/events')
// const playerX = 'X'
// const playerO = 'O'

const gameClick = function (event) {
  gameEvents.switchLetter(event)
  gameEvents.spotPlayed(event)
  gameEvents.indexToPush()
  gameEvents.addToArray()
  gameEvents.xAndOInOrder()
  gameEvents.checkForWin()
  gameEvents.stopClick()
  gameEvents.checkGameObj()
  gameApiEvents.onUpdateGame(event)
}

module.exports = {
  gameClick
}
