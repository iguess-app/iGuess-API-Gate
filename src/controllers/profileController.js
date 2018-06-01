'use strict'

const personalRepository = require('../repositories').personalRepository
const guessLineRepository = require('../repositories/guessRepositories/guessLineRepository')

const signIn = (request, reply) => {
  const payload = request.payload
  const headers = request.headers

  personalRepository.signIn(payload, headers)
    .then((response) => reply(response))
    .catch((err) => reply(err))
}

const signUp = (request, reply) => {
  const payload = request.payload
  const headers = request.headers

  /*personalRepository.signUp(payload, headers)
    .then((response) => reply(response))
    .catch((err) => reply(err)) */

  personalRepository.signUp(payload, headers)
    .then(async (response) => {
      const reqBody = { championshipRef: '5abe573a9fa112a1f1a5e925' }
      request.headers.token = response.token
      await guessLineRepository.addUserToGuessLine(reqBody, request.headers)
      return response
    })
    .then((response) => reply(response))
    .catch((err) => reply(err))
}

const logout = (request, reply) => {
  const payload = request.payload
  const headers = request.headers

  personalRepository.logout(payload, headers)
    .then((response) => reply(response))
    .catch((err) => reply(err))
}

const emailAvailability = (request, reply) => {
  const payload = request.query
  const headers = request.headers

  personalRepository.emailAvailability(payload, headers)
    .then((response) => reply(response))
    .catch((err) => reply(err))
}

const userNameAvailability = (request, reply) => {
  const payload = request.query
  const headers = request.headers

  personalRepository.userNameAvailability(payload, headers)
    .then((response) => reply(response))
    .catch((err) => reply(err))
}

const getProfile = (request, reply) => {
  const query = request.query
  const headers = request.headers

  personalRepository.getProfile(query, headers)
    .then((profile) => reply(profile))
    .catch((err) => reply(err))
}

const searchProfile = (request, reply) => {
  const query = request.query
  const headers = request.headers

  personalRepository.searchProfile(query, headers)
    .then((profile) => reply(profile))
    .catch((err) => reply(err))
}

const listLeagues = (request, reply) => {
  const query = request.query
  const headers = request.headers

  personalRepository.listLeagues(query, headers)
    .then((profile) => reply(profile))
    .catch((err) => reply(err))
}

const listTeamsByLeague = (request, reply) => {
  const query = request.query
  const headers = request.headers

  personalRepository.listTeamsByLeague(query, headers)
    .then((profile) => reply(profile))
    .catch((err) => reply(err))
}

const updateInfo = (request, reply) => {
  const payload = request.payload
  const headers = request.headers

  personalRepository.updateInfo(payload, headers)
    .then((profile) => reply(profile))
    .catch((err) => reply(err))
}

const updatePassword = (request, reply) => {
  const payload = request.payload
  const headers = request.headers

  personalRepository.updatePassword(payload, headers)
    .then((profile) => reply(profile))
    .catch((err) => reply(err))
}

const updateFootballSupportedTeam = (request, reply) => {
  const payload = request.payload
  const headers = request.headers

  personalRepository.updateFootballSupportedTeam(payload, headers)
    .then((profile) => reply(profile))
    .catch((err) => reply(err))
}

const updateFootballAppreciatedTeam = (request, reply) => {
  const payload = request.payload
  const headers = request.headers

  personalRepository.updateFootballAppreciatedTeam(payload, headers)
    .then((profile) => reply(profile))
    .catch((err) => reply(err))
}

const friendsAdd = (request, reply) => {
  const payload = request.payload
  const headers = request.headers

  personalRepository.friendsAdd(payload, headers)
    .then((profile) => reply(profile))
    .catch((err) => reply(err))
}

const friendsSearch = (request, reply) => {
  const query = request.query
  const headers = request.headers

  personalRepository.friendsSearch(query, headers)
    .then((profile) => reply(profile))
    .catch((err) => reply(err))
}

const friendsList = (request, reply) => {
  const query = request.query
  const headers = request.headers

  personalRepository.friendsList(query, headers)
    .then((profile) => reply(profile))
    .catch((err) => reply(err))
}

const areFriends = (request, reply) => {
  const query = request.query
  const headers = request.headers

  personalRepository.areFriends(query, headers)
    .then((profile) => reply(profile))
    .catch((err) => reply(err))
}

const friendsUndo = (request, reply) => {
  const payload = request.payload
  const headers = request.headers

  personalRepository.friendsUndo(payload, headers)
    .then((profile) => reply(profile))
    .catch((err) => reply(err))
}

const notificationsList = (request, reply) => {
  const query = request.query
  const headers = request.headers

  personalRepository.notificationsList(query, headers)
    .then((profile) => reply(profile))
    .catch((err) => reply(err))
}

const notificationsPutSaw = (request, reply) => {
  const payload = request.payload
  const headers = request.headers

  personalRepository.notificationsPutSaw(payload, headers)
    .then((profile) => reply(profile))
    .catch((err) => reply(err))
}

const notificationsResponse = (request, reply) => {
  const payload = request.payload
  const headers = request.headers

  personalRepository.notificationsResponse(payload, headers)
    .then((profile) => reply(profile))
    .catch((err) => reply(err))
}

const tokenVerify = (request, reply) => {
  const query = request.query
  const headers = request.headers

  personalRepository.tokenVerify(query, headers)
    .then((profile) => reply(profile))
    .catch((err) => reply(err))
}

module.exports = {
  signIn,
  signUp,
  logout,
  emailAvailability,
  userNameAvailability,
  getProfile,
  searchProfile,
  listLeagues,
  listTeamsByLeague,
  updateInfo,
  updatePassword,
  updateFootballSupportedTeam,
  updateFootballAppreciatedTeam,
  friendsAdd,
  friendsSearch,
  friendsList,
  areFriends,
  friendsUndo,
  notificationsList,
  notificationsPutSaw,
  notificationsResponse,
  tokenVerify
}