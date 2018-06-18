'use strict'

const gameEvents = require('./game-logic/game-logic')
const gameApiEvents = require('./game-api/events')

const gameClick = function (event) {
  if (event.target.innerHTML !== '') {
    console.log('button already clicked')
  } else {
    gameEvents.switchLetter(event)
    gameEvents.spotPlayed(event)
    gameEvents.indexToPush()
    gameEvents.addToArray()
    gameEvents.xAndOInOrder()
    gameEvents.checkForWin()
    gameEvents.stopClick()
    gameApiEvents.onUpdateGame(event)
  }
}

module.exports = {
  gameClick
}
