'use strict'

const signUpSuccess = function (signUpResponse) {
  console.log('signUpSuccess is ', signUpResponse)
}

const signUpFail = function (signUpResponse) {
  console.log('signUpFail is ', signUpResponse)
}

module.exports = {
  signUpSuccess,
  signUpFail
}
