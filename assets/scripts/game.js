'use strict'

const gameEvents = require('./game-logic/events')

const playerX = 'X'
const playerO = 'O'

let game = [
  '', '', '',
  '', '', '',
  '', '', ''
]

const wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

let turn = 0
const switchLetter = function (event) {
  console.log('event is ', event)
  let letter
  if (turn % 2 === 0) {
    letter = 'X'
  } else {
    letter = 'O'
  }
  $(event.target).text(letter)
  turn += 1
  console.log('event.target is ', event.target)
  console.log('turn number is ', turn)
  gameEvents.addToArray
  return turn
}

module.exports = {
  switchLetter
}
