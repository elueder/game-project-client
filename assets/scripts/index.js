'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const gameLogic = require('./game')

const gameEvents = require('./game-logic/game-logic')

const gameApi = require('./game-api/events')
// const newGame = require('./game-logic/new-game')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('.game-button').on('click', gameLogic.gameClick)
  $('#game-create').on('click', gameEvents.onNewGame)
  gameApi.addHandlers()
})
