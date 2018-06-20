'use strict'

const gameEvents = require('./game-logic/game-logic')
const gameApiEvents = require('./game-api/events')
const store = require('./store')

const gameClick = function (event) {
  if (store.over === true) {
    return
  } else if (event.target.innerHTML !== '') {
    $('#msg-container').html(`
      <div class="alert alert-warning">Button already clicked. Choose a different square!</div>
    `)
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
