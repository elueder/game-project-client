'use script'

const store = require('../store')

const getGamesSuccess = function (data) {
  $('#msg-container').html('')
  // $('#content').html('')
  let count = 0
  data.games.forEach(function () {
    count += 1
  })
  $('#msg-container').html(`
    <div class="alert alert-success alert-dismissable">
    <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
    Number of games played: ${count}</div>
    `)
  document.getElementById('change-password-form').reset()
}

const getGamesFail = function () {
  $('#msg-container').html('')
  // $('#content').html('')
  $('#msg-container').html(`
    <div class="alert alert-warning alert-dismissable">
    <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
    We can't count today!</div>
  `)
  document.getElementById('change-password-form').reset()
}

const createGameSuccess = function (data) {
  $('#msg-container').html('')
  store.game = data.game
  $('#msg-container').html(`
    <div class="alert alert-success alert-dismissable">
    <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
    New Game Started!</div>
    `)
  document.getElementById('change-password-form').reset()
  gameState()
}

const createGameFail = function () {
  $('#msg-container').html('')
  // $('#content').html('')
  $('#msg-container').html(`
    <div class="alert alert-warning">Server Error.</div>
  `)
  document.getElementById('change-password-form').reset()
}

const getGameSuccess = function (data) {
  $('#msg-container').html('')
  const gameHtml = (`
    <div class="alert alert-success alert-dismissable">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      <h4>Game over: ${data.game.over}</h4>
      <p>ID: ${data.game.id}</p>
    </div>`)
  // push book elements to content div
  $('#msg-container').append(gameHtml)
  document.getElementById('change-password-form').reset()
}

const getGameFail = function () {
  $('#msg-container').html(`
    <div class="alert alert-warning">
    <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
    Couldn't find that ID.</div>
  `)
  document.getElementById('change-password-form').reset()
}

const gameState = function () {
  $('#game-board, #home').removeClass('hidden')
  $('#sign-up-form, #sign-in-form').addClass('hidden')
}

module.exports = {
  getGamesSuccess,
  getGamesFail,
  createGameSuccess,
  createGameFail,
  getGameSuccess,
  getGameFail
}
