'use script'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store')
const gameLogicEvents = require('../game-logic/game-logic')

const addHandlers = function () {
  $('#games-index').on('click', onGetGames)
  $('#game-create').on('click', onCreateGame)
  $('#games-show').on('submit', onGetGame)
  // $('.game-button').on('submit', onUpdateGame)
}

const onGetGames = function () {
  event.preventDefault()
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFail)
}

const onCreateGame = function (event) {
  event.preventDefault()
  const data = {}
  api.createGame(data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFail)
  gameLogicEvents.onNewGame()
}

const onGetGame = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.getGame(data)
    .then(ui.getGameSuccess)
    .catch(ui.getGameFail)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  const data = {
    game: {
      cell: {
        index: store.index,
        value: store.value
      },
      over: store.over
    }
  }

  api.updateGame(data)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFail)
}

module.exports = {
  addHandlers,
  onCreateGame,
  onUpdateGame
}
