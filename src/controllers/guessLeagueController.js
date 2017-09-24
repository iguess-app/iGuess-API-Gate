'use strict'

const getGuessLeagueService = require('../services/guessLeague/getGuessLeagueService')()
const createGuessLeagueService = require('../services/guessLeague/createGuessLeagueService')()
const inviteToService = require('../services/guessLeague/inviteToService')()

const createGuessLeague = (request, reply) => {
  createGuessLeagueService.createGuessLeague(request.payload, request.headers)
    .then((teams) => reply(teams))
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

module.exports = {
  createGuessLeague,
  getGuessLeague,
  inviteTo
}