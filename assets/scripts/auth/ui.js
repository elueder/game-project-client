'use strict'

const store = require('../store')

const signUpSuccess = function (signUpResponse) {
  console.log('signUpSuccess is ', signUpResponse)
  signedInState()
}

const signUpFail = function (signUpResponse) {
  console.log('signUpFail is ', signUpResponse)
}

const signInSuccess = function (signInResponse) {
  console.log('signInResponse is ', signInResponse)
  store.token = signInResponse.user.token
  console.log('store.token is ', store.token)
  signedInState()
}

const signInFail = function (signInResponse) {
  console.log('signUpFail is ', signInResponse)
}

const signOutSuccess = function (signOutResponse) {
  console.log('signOutSuccess is ', signOutResponse)
  signedOutState()
}

const signOutFail = function (signOutResponse) {
  console.log('signOutFail is ', signOutResponse)
}

const signedOutState = function () {
  console.log('signed out')
  $('#sign-up-form, #sign-in-form').removeClass('hidden')
  $('#change-password-form, #sign-out, #game-board, #num-of-games, #new-game, #games-show').addClass('hidden')
}

const signedInState = function () {
  console.log('signed in')
  $('#change-password-form, #sign-out, #num-of-games, #new-game, #games-show, #home').removeClass('hidden')
  $('#sign-up-form, #sign-in-form').addClass('hidden')
}

module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  signOutSuccess,
  signOutFail,
  signedOutState,
  signedInState
}
