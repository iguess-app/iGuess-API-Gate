'use strict'

const getGuessLeagueService = require('../services/guessLeague/getGuessLeagueService')()
const createGuessLeagueService = require('../services/guessLeague/createGuessLeagueService')()
const inviteToService = require('../services/guessLeague/inviteToService')()
const guessLeagueRepository = require('../repositories/guessRepositories/guessLeagueRepository')

const createGuessLeague = (request, reply) => {
  createGuessLeagueService(request.payload, request.headers)
    .then((response) => reply(response))
    .catch((err) => reply(err))
}

const getGuessLeague = (request, reply) => {
  getGuessLeagueService(request.query, request.headers)
    .then((teams) => reply(teams))
    .catch((err) => reply(err))
}

const inviteTo = (request, reply) => {
  inviteToService(request.payload, request.headers)
    .then((teams) => reply(teams))
    .catch((err) => reply(err))
}

const listGuessesLeagues = (request, reply) => {
  guessLeagueRepository.listGuessesLeagues(request.query, request.headers)
    .then((teams) => reply(teams))
    .catch((err) => reply(err))
}

const editGuessLeague = (request, reply) => {
  guessLeagueRepository.editGuessLeague(request.payload, request.headers)
    .then((teams) => reply(teams))
    .catch((err) => reply(err))
}

const quitGuessLeague = (request, reply) => {
  guessLeagueRepository.quitGuessLeague(request.payload, request.headers)
    .then((teams) => reply(teams))
    .catch((err) => reply(err))
}

const kickUserFromGuessLeague = (request, reply) => {
  guessLeagueRepository.kickUserFromGuessLeague(request.payload, request.headers)
    .then((teams) => reply(teams))
    .catch((err) => reply(err))
}

const putCaptain = (request, reply) => {
  guessLeagueRepository.putCaptain(request.payload, request.headers)
    .then((teams) => reply(teams))
    .catch((err) => reply(err))
}

const quitCaptain = (request, reply) => {
  guessLeagueRepository.quitCaptain(request.payload, request.headers)
    .then((teams) => reply(teams))
    .catch((err) => reply(err))
}

module.exports = {
  createGuessLeague,
  getGuessLeague,
  inviteTo,
  listGuessesLeagues,
  editGuessLeague,
  quitGuessLeague,
  kickUserFromGuessLeague,
  putCaptain,
  quitCaptain
}