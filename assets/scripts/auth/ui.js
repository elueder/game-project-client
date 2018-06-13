'use strict'

const store = require('../store')

const signUpSuccess = function (signUpResponse) {
  $('#sign-in-user-message').html('')
  signedInState()
  $('#sign-in-user-message').html(`
    <div class="alert alert-success alert-dismissable">
    <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
    Signed in!</div>
    `)
}

const signUpError = function () {
  $('#sign-in-fail').html('')
  $('#sign-in-fail').html(`
    <div class="alert alert-warning alert-dismissable">
    <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
    Couldn't create user.</div>
  `)
}

const signInSuccess = function (signInResponse) {
  store.token = signInResponse.user.token
  signedInState()
  $('#sign-in-user-message').html(`
    <div class="alert alert-success alert-dismissable">
    <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
    Signed in!</div>
    `)
}

const signInError = function () {
  $('#sign-in-fail').html('')
  $('#sign-in-fail').html(`
    <div class="alert alert-warning alert-dismissable">
    <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
    Couldn't sign in.</div>
    `)
}

const signOutSuccess = function (signOutResponse) {
  signedOutState()
  $('#sign-in-user-message').html(`
    <div class="alert alert-success alert-dismissable">
    <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
    Signed out.</div>
    `)
}

const signOutError = function (signOutResponse) {
  $('#sign-in-fail').html(`
    <div class="alert alert-warning alert-dismissable">
    <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
    Couldn't sign out.</div>
    `)
}

const changePasswordSuccess = function () {
  $('#sign-in-user-message').html(`
    <div class="alert alert-success alert-dismissable">
    <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
    Changed password!</div>
    `)
}

const changePasswordError = function () {
  $('#sign-in-fail').html(`
    <div class="alert alert-warning alert-dismissable">
    <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
    Couldn't change password.</div>
    `)
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
