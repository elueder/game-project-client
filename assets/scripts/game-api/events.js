'use script'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const gameLogicEvents = require('../game-logic/events')

const addHandlers = function () {
  $('#games-index').on('click', onGetGames)
  // create game is linked in game-logic/events.js
  $('#games-show').on('submit', onGetGame)
  $('#games-update').on('submit', onUpdateGame)
}

const onGetGames = function () {
  event.preventDefault()
  console.log('clicked the button!')
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFail)
}

const onCreateGame = function (event) {
  console.log('clicked the button!')
  // event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)

  // data = all info from form fields
  api.createGame(data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFail)
}

const onGetGame = function (event) {
  event.preventDefault()
  console.log('clicked the button!')
  const form = event.target
  const data = getFormFields(form)
  console.log(data.book.id)

  const id = data.book.id
  api.getGame(id)
    .then(ui.getGameSuccess)
    .catch(ui.getGameFail)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  console.log('clicked the button!')
  const data = getFormFields(event.target)
  console.log(data)

  // data = all info from form fields
  api.updateGame(data)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFail)
}

module.exports = {
  addHandlers,
  onCreateGame
}
