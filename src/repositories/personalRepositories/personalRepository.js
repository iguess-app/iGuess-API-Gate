'use strict'

const coincidents = require('iguess-api-coincidents')
const requestManager = coincidents.Managers.requestManager
const apis = coincidents.Config.apis
const treatError = require('../treatError')

const signIn = (request, headers) => {
  const uri = `${apis.personalUrl}/login/signin`
  return requestManager.post(uri, headers, request)
    .catch((err) => treatError(err))
}

const signUp = (request, headers) => {
  const uri = `${apis.personalUrl}/login/signup`
  return requestManager.post(uri, headers, request)
    .catch((err) => treatError(err))
}

const emailAvailability = (request, headers) => {
  const uri = `${apis.personalUrl}/availability/email`
  return requestManager.get(uri, headers, request)
    .catch((err) => treatError(err))
}

const userNameAvailability = (request, headers) => {
  const uri = `${apis.personalUrl}/availability/userName`
  return requestManager.get(uri, headers, request)
    .catch((err) => treatError(err))
}

const setGuessLeagueNotifications = (request, headers) => {
  const uri = `${apis.personalUrl}/notifications/setGuessLeagueNotifications`
  return requestManager.put(uri, headers, request)
    .catch((err) => treatError(err))
}

const getProfile = (request, headers) => {
  const uri = `${apis.personalUrl}/profiles/getProfile`
  return requestManager.get(uri, headers, request)
    .catch((err) => treatError(err, false))
}

const searchProfile = (request, headers) => {
  const uri = `${apis.personalUrl}/profiles/search`
  return requestManager.get(uri, headers, request)
    .catch((err) => treatError(err, false))
}

const listLeagues = (request, headers) => {
  const uri = `${apis.personalUrl}/teams/listLeagues`
  return requestManager.get(uri, headers, request)
    .catch((err) => treatError(err, false))
}

const listTeamsByLeague = (request, headers) => {
  const uri = `${apis.personalUrl}/teams/listTeamsByLeague`
  return requestManager.get(uri, headers, request)
    .catch((err) => treatError(err, false))
}

const updateInfo = (request, headers) => {
  const uri = `${apis.personalUrl}/profile/updateInfo`
  return requestManager.patch(uri, headers, request)
    .catch((err) => treatError(err, false))
}

const updatePassword = (request, headers) => {
  const uri = `${apis.personalUrl}/profile/updatePassword`
  return requestManager.patch(uri, headers, request)
    .catch((err) => treatError(err, false))
}

const updateFootballSupportedTeam = (request, headers) => {
  const uri = `${apis.personalUrl}/profile/updateFootballSupportedTeams/supportedTeam`
  return requestManager.patch(uri, headers, request)
    .catch((err) => treatError(err, false))
}

const updateFootballAppreciatedTeam = (request, headers) => {
  const uri = `${apis.personalUrl}/profile/updateFootballSupportedTeams/appreciatedTeams`
  return requestManager.patch(uri, headers, request)
    .catch((err) => treatError(err, false))
}

const friendsAdd = (request, headers) => {
  const uri = `${apis.personalUrl}/friends/add`
  return requestManager.post(uri, headers, request)
    .catch((err) => treatError(err, false))
}

const friendsSearch = (request, headers) => {
  const uri = `${apis.personalUrl}/friends/search`
  return requestManager.get(uri, headers, request)
    .catch((err) => treatError(err, false))
}

const friendsList = (request, headers) => {
  const uri = `${apis.personalUrl}/friends/list`
  return requestManager.get(uri, headers, request)
    .catch((err) => treatError(err, false))
}

const areFriends = (request, headers) => {
  const uri = `${apis.personalUrl}/friends/areFriends`
  return requestManager.get(uri, headers, request)
    .catch((err) => treatError(err, false))
}

const friendsUndo = (request, headers) => {
  const uri = `${apis.personalUrl}/friends/undo`
  return requestManager.delete(uri, headers, request)
    .catch((err) => treatError(err, false))
}

const notificationsList = (request, headers) => {
  const uri = `${apis.personalUrl}/notifications/list`
  return requestManager.get(uri, headers, request)
    .catch((err) => treatError(err, false))
}

const notificationsPutSaw = (request, headers) => {
  const uri = `${apis.personalUrl}/notifications/saw`
  return requestManager.put(uri, headers, request)
    .catch((err) => treatError(err, false))
}

const notificationsResponse = (request, headers) => {
  const uri = `${apis.personalUrl}/notifications/response`
  return requestManager.patch(uri, headers, request)
    .catch((err) => treatError(err, false))
}

const tokenVerify = (request, headers) => {
  const uri = `${apis.personalUrl}/token/verify`
  return requestManager.get(uri, headers, request)
    .catch((err) => treatError(err, false))
}

module.exports = {
  signIn,
  signUp,
  emailAvailability,
  userNameAvailability,
  setGuessLeagueNotifications,
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