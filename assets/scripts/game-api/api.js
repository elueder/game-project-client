const config = require('../config')
const store = require('../store')
// const gameLogicEvents = require('../game-logic/game-logic')

const getGames = function () {
  console.log('apiUrl is ', config.apiUrl)
  console.log('store.token is ', store.token)
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.token
    }
  })
}

const createGame = function (data) {
  console.log('data is ', data)
  // store.gameId = game.id
  // console.log('store.gameId is ', store.gameId)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.token
    }
  })
}

const getGame = function (data) {
  console.log('apiUrl is ', config.apiUrl)
  console.log('store.token is ', store.token)
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/' + data.game.id,
    headers: {
      Authorization: 'Token token=' + store.token
    }
  })
}

const updateGame = function (data) {
  // console.log('store.index is ', store.index)
  // console.log('store.value is ', store.value)
  // console.log('data is ', data)
  // console.log('store.game.id is ', store.game.id)
  // console.log('url is ', `${config.apiUrl}/games/${store.game.id}`)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game.id,
    data: data,
    // add token
    headers: {
      Authorization: 'Token token=' + store.token
    }
  })
}

module.exports = {
  getGames,
  createGame,
  getGame,
  updateGame
}
