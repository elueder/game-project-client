'use strict'

const game = []
// Push to array
const addToArray = function (event) {
  $(event.target).push(game)
  console.log('event.target in events is ', event.target)
  console.log('game in events is ', game)
  return game
}

module.exports = {
  addToArray
}
