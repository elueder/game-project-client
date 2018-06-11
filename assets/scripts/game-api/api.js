const config = require('../config')
const store = require('../store')

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
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.token
    }
  })
}

module.exports = {
  getGames,
  createGame
}
