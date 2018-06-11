'use strict'

const gameEvents = require('./game-logic/events')

const playerX = 'X'
const playerO = 'O'

const gameClick = function (event) {
  gameEvents.switchLetter(event)
  gameEvents.spotPlayed(event)
  gameEvents.indexToPush()
  gameEvents.addToArray()
  gameEvents.xAndOInOrder()
  gameEvents.checkForWin()
}

module.exports = {
  gameClick
}
