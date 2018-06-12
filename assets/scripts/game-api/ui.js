'use script'

const store = require('../store')

const getGamesSuccess = function (data) {
  $('#content').html('')
  console.log('AJAX request finished')
  let count = 0
  data.games.forEach(function () {
    count += 1
  })
  console.log('at end count is ', count)
}

const getGamesFail = function (error) {
  console.log(error)

  $('#content').html(`
    <div class="alert alert-warning">We can't count today!</div>
  `)
}

const createGameSuccess = function (data) {
  // $('#content').html('')
  store.game = data.game
  console.log('store.game is ', store.over)
  gameState()
}

const createGameFail = function (error) {
  console.log(error)

  $('#content').html(`
    <div class="alert alert-warning">Server Error.</div>
  `)
}

const getGameSuccess = function (data) {
  $('#content').html('')
  console.log('data.game is ', data.game)
  const gameHtml = (`
    <hr>
      <h4>Game over: ${data.game.over}</h4>
      <p>ID: ${data.game.id}</p>
      `)
  // push book elements to content div
  $('#content').append(gameHtml)
}

const getGameFail = function (error) {
  console.log(error)

  $('#content').html(`
    <div class="alert alert-warning">That ID doesn't exist.</div>
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
