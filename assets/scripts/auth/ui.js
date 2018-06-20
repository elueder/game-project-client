'use strict'

const store = require('../store')

const signUpSuccess = function (signUpResponse) {
  $('#msg-container').html('')
  $('#msg-container').html(`
    <div class="alert alert-success alert-dismissable">
    <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
    Signed up! Please sign in.</div>
    `)
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-password-form').reset()
}

const signUpError = function () {
  $('#msg-container').html('')
  $('#msg-container').html(`
    <div class="alert alert-warning alert-dismissable">
    <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
    Couldn't create user.</div>
  `)
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-password-form').reset()
}

const signInSuccess = function (signInResponse) {
  store.token = signInResponse.user.token
  signedInState()
  $('#msg-container').html(`
    <div class="alert alert-success alert-dismissable">
    <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
    Signed in!</div>
    `)
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-password-form').reset()
}

const signInError = function () {
  $('#msg-container').html('')
  $('#msg-container').html(`
    <div class="alert alert-warning alert-dismissable">
    <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
    Couldn't sign in.</div>
    `)
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-password-form').reset()
}

const signOutSuccess = function (signOutResponse) {
  signedOutState()
  $('#msg-container').html(`
    <div class="alert alert-success alert-dismissable">
    <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
    Signed out.</div>
    `)
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-password-form').reset()
}

const signOutError = function (signOutResponse) {
  $('#msg-container').html(`
    <div class="alert alert-warning alert-dismissable">
    <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
    Couldn't sign out.</div>
    `)
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-password-form').reset()
}

const changePasswordSuccess = function () {
  $('#msg-container').html(`
    <div class="alert alert-success alert-dismissable">
    <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
    Changed password!</div>
    `)
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-password-form').reset()
}

const changePasswordError = function () {
  $('#msg-container').html(`
    <div class="alert alert-warning alert-dismissable">
    <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
    Couldn't change password.</div>
    `)
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-password-form').reset()
}

const signedOutState = function () {
  $('#sign-up-form, #sign-in-form').removeClass('hidden')
  $('#change-password-form, #sign-out, #game-board, #num-of-games, #new-game, #games-show').addClass('hidden')
}

const signedInState = function () {
  $('#change-password-form, #sign-out, #num-of-games, #new-game, #games-show, #home').removeClass('hidden')
  $('#sign-up-form, #sign-in-form').addClass('hidden')
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  signOutSuccess,
  signOutError,
  changePasswordSuccess,
  changePasswordError,
  signedOutState,
  signedInState
}
