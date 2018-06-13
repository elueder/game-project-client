'use strict'

const gameEvents = require('./game-logic/game-logic')
const gameApiEvents = require('./game-api/events')

const gameClick = function (event) {
  gameEvents.switchLetter(event)
  gameEvents.spotPlayed(event)
  gameEvents.indexToPush()
  gameEvents.addToArray()
  gameEvents.xAndOInOrder()
  gameEvents.checkForWin()
  gameEvents.stopClick()
  gameApiEvents.onUpdateGame(event)
}

module.exports = {
  gameClick
}
