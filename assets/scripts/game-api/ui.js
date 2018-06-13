'use script'

const store = require('../store')

const getGamesSuccess = function (data) {
  $('#num-user-message').html('')
  $('#content').html('')
  let count = 0
  data.games.forEach(function () {
    count += 1
  })
  $('#num-user-message').html(`
    <div class="alert alert-success alert-dismissable">
    <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
    Number of games played: ${count}</div>
    `)
}

const getGamesFail = function () {
  $('#num-user-message').html('')
  $('#content').html('')
  $('#num-user-message').html(`
    <div class="alert alert-warning alert-dismissable">
    <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
    We can't count today!</div>
  `)
}

const createGameSuccess = function (data) {
  $('#new-game-user-message').html('')
  $('#content').html('')
  store.game = data.game
  $('#new-game-user-message').html(`
    <div class="alert alert-success alert-dismissable">
    <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
    New Game Started!</div>
    `)
  gameState()
}

const createGameFail = function () {
  $('#new-game-user-message').html('')
  $('#content').html('')
  $('#new-game-user-message').html(`
    <div class="alert alert-warning">Server Error.</div>
  `)
}

const getGameSuccess = function (data) {
  $('#content').html('')
  const gameHtml = (`
    <div class="alert alert-success alert-dismissable">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      <h4>Game over: ${data.game.over}</h4>
      <p>ID: ${data.game.id}</p>
    </div>`)
  // push book elements to content div
  $('#content').append(gameHtml)
}

const getGameFail = function () {
  $('#content').html(`
    <div class="alert alert-warning">
    <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
    Couldn't find that ID.</div>
  `)
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
