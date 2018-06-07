'use strict'

const signUpSuccess = function (signUpResponse) {
  console.log('signUpSuccess is ', signUpResponse)
}

const signUpFail = function (signUpResponse) {
  console.log('signUpFail is ', signUpResponse)
}

const signInSuccess = function (signUpResponse) {
  console.log('signUpSuccess is ', signUpResponse)
}

const signInFail = function (signUpResponse) {
  console.log('signUpFail is ', signUpResponse)
}

module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail
}
