'use strict'

let turn = 0
const switchLetter = function (event) {
  // console.log('event is ', event)
  let letter
  if (turn % 2 === 0) {
    letter = 'X'
  } else {
    letter = 'O'
  }
  $(event.target).text(letter)
  turn += 1
  $(event.target.id).prop('disabled', true)
  // console.log('event.target is ', event.target)
  // console.log('turn number is ', turn)
  return turn
}

const gameIds = [
  'gb1', 'gb2', 'gb3',
  'gb4', 'gb5', 'gb6',
  'gb7', 'gb8', 'gb9'
]

let id

const spotPlayed = function (event) {
  // console.log('event.target.id in spotPlayed is ', event.target.id)
  id = event.target.id
  return event.target.id
}

const findRightIndex = function (element) {
  return element === id
}

let indexSpot

const indexToPush = function () {
  indexSpot = gameIds.findIndex(findRightIndex)
  // console.log('indexSpot is ', indexSpot)
}

let game = ['', '', '', '', '', '', '', '', '']
let xSpots = []
let oSpots = []

const addToArray = function () {
  if (turn % 2 === 1) {
    game.splice(indexSpot, 0, 'X')
    console.log('in addToArray game is', game)
    xSpots.push(indexSpot)
    console.log('xSpots is ', xSpots)
  } else if (turn % 2 === 0) {
    game.splice(indexSpot, 0, 'O')
    console.log('in addToArray game is', game)
    oSpots.push(indexSpot)
    console.log('oSpots is ', oSpots)
  }
  return (game && xSpots && oSpots)
}

const xAndOInOrder = function () {
  xSpots.sort()
  oSpots.sort()
  console.log('in order arrays are ', xSpots, oSpots)
  return (xSpots && oSpots)
}

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

let xWin = false
let oWin = false

let xWins = 0
let oWins = 0

const checkForWin = function (element) {
  for (let i = 0; i < wins.length; i++) {
    if (xSpots.includes(wins[i][0]) && xSpots.includes(wins[i][1]) && xSpots.includes(wins[i][2])) {
      // console.log('x won')
      xWin = true
      xWins += 1
    } else if (oSpots.includes(wins[i][0]) && oSpots.includes(wins[i][1]) && oSpots.includes(wins[i][2])) {
      // console.log('o won')
      oWin = true
      oWins += 1
    }
  }
  console.log('xWins is ', xWins, ' and oWins is ', oWins)
  return (xWin && oWin && xWins && oWins)
}

const stopClick = function () {
  if (xWin === true || oWin === true) {
    $('.game-button').prop('disabled', true)
  }
}

const onNewGame = function (event) {
  $('#gb1').html('').prop('disabled', false)
  $('#gb2').html('').prop('disabled', false)
  $('#gb3').html('').prop('disabled', false)
  $('#gb4').html('').prop('disabled', false)
  $('#gb5').html('').prop('disabled', false)
  $('#gb6').html('').prop('disabled', false)
  $('#gb7').html('').prop('disabled', false)
  $('#gb8').html('').prop('disabled', false)
  $('#gb9').html('').prop('disabled', false)
  // $('.game-button').prop('disabled', false)
  game = ['', '', '', '', '', '', '', '', '']
  xSpots = []
  oSpots = []
  xWin = false
  oWin = false
  turn = 0
  return (game && xSpots && oSpots && xWin && oWin && turn)
}

module.exports = {
  switchLetter,
  spotPlayed,
  indexToPush,
  addToArray,
  xAndOInOrder,
  checkForWin,
  stopClick,
  onNewGame
}
