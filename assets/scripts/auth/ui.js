'use strict'

const store = require('../store')

const signUpSuccess = function (signUpResponse) {
  console.log('signUpSuccess is ', signUpResponse)
}

const signUpFail = function (signUpResponse) {
  console.log('signUpFail is ', signUpResponse)
}

const signInSuccess = function (signInResponse) {
  console.log('signInResponse is ', signInResponse)
}

const signInFail = function (signInResponse) {
  console.log('signUpFail is ', signInResponse)
}

const signOutSuccess = function (signOutResponse) {
  console.log('signOutSuccess is ', signOutResponse)
}

const signOutFail = function (signOutResponse) {
  console.log('signOutFail is ', signOutResponse)
}

module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  signOutSuccess,
  signOutFail
}
