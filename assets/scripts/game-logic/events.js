'use strict'

let turn = 0
let text

const alternate = function (cellId) {
  if (turn === 0) {
    cellId.text('X')
    turn = 1
  } else if (turn === 1) {
    cellId.text('O')
    turn = 0
  }
}

const onButtonClick = function () {
  event.preventDefault()
  if (player === 'x') {
    $(this).text('X')
  } else if (player === 'o') {
    $(this).text('O')
  }
}

module.exports = {
  onButtonClick
}
