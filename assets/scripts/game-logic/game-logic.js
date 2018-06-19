'use strict'

const store = require('../store')

const game = {
  gameArray: ['', '', '', '', '', '', '', '', ''],
  over: false,
  winner: '',
  xWins: 0,
  oWins: 0
}

let turn = 0
let letter = ''

const switchLetter = function (event) {
  if (turn % 2 === 0) {
    letter = 'X'
  } else {
    letter = 'O'
  }
  $(event.target).text(letter)
  turn += 1
  $(event.target.id).prop('disabled', true)
  store.value = letter
  return (turn && letter)
}

const gameIds = [
  'gb1', 'gb2', 'gb3',
  'gb4', 'gb5', 'gb6',
  'gb7', 'gb8', 'gb9'
]

let id

const spotPlayed = function (event) {
  id = event.target.id
  return event.target.id
}

const findRightIndex = function (element) {
  return element === id
}

let indexSpot = null

const indexToPush = function () {
  indexSpot = gameIds.findIndex(findRightIndex)
  store.index = indexSpot
  return indexSpot
}

store.cell = {
  index: indexSpot,
  value: letter
}

let xSpots = []
let oSpots = []

const addToArray = function () {
  if (turn % 2 === 1) {
    game.gameArray.splice(indexSpot, 1, 'X')
    xSpots.push(indexSpot)
  } else if (turn % 2 === 0) {
    game.gameArray.splice(indexSpot, 1, 'O')
    oSpots.push(indexSpot)
  }
  return (game.gameArray && xSpots && oSpots)
}

const xAndOInOrder = function () {
  xSpots.sort()
  oSpots.sort()
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

const checkForWin = function (element) {
  for (let i = 0; i < wins.length; i++) {
    if (xSpots.includes(wins[i][0]) && xSpots.includes(wins[i][1]) && xSpots.includes(wins[i][2])) {
      xWin = true
      game.xWins += 1
      game.winner = 'X'
    } else if (oSpots.includes(wins[i][0]) && oSpots.includes(wins[i][1]) && oSpots.includes(wins[i][2])) {
      oWin = true
      game.oWins += 1
      game.winner = 'O'
    }
  }
  return (xWin && oWin && game.xWins && game.oWins)
}

const stopClick = function () {
  if (xWin === true || oWin === true || turn === 9) {
    game.over = true
    store.over = true
    $('.game-button').prop('disabled', true)
    if (xWin === true) {
      $('#msg-container').html(`
        <div class="alert alert-success alert-dismissable">
        <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
        X won!!</div>
        `)
    } else if (oWin === true) {
      $('#msg-container').html(`
        <div class="alert alert-success alert-dismissable">
        <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
        O won!!</div>
        `)
    } else if (turn === 9) {
      $('#msg-container').html(`
        <div class="alert alert-success alert-dismissable">
        <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
        Tie game.</div>
        `)
    }
    return game
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
  game.gameArray = ['', '', '', '', '', '', '', '', '']
  xSpots = []
  oSpots = []
  xWin = false
  oWin = false
  turn = 0
  $('#msg-container').html(``)
  // createGameApiConnection.onCreateGame(event)
  return (game.gameArray && xSpots && oSpots && xWin && oWin && turn)
}

module.exports = {
  game,
  switchLetter,
  spotPlayed,
  indexToPush,
  addToArray,
  xAndOInOrder,
  checkForWin,
  stopClick,
  onNewGame,
  indexSpot: indexSpot,
  letter: letter
}
