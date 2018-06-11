'use strict'

const store = require('../store')

const getFormFields = require('../../../lib/get-form-fields')
const authApi = require('./api')
const authUi = require('./ui')
// const authApi = require('./api')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data is ', data)
  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpError)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('in signIn data is ', data)
  authApi.signIn(data)
    .then((result) => {
      store.token = result.user.token
    },
    authUi.signInSuccess)
    .catch(authUi.signInError)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('onChangePassword data is ', data)
  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordError)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('onSignOut data is ', data)
  authApi.signOut(data)
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutFail)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
