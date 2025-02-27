'use strict'

const guessLineRepository = require('../repositories/guessRepositories/guessLineRepository')

const addUserToGuessLine = (request, reply) => {
  guessLineRepository.addUserToGuessLine(request.payload, request.headers)
    .then((response) => reply(response))
    .catch((err) => reply(err))
}

const setPredictions = (request, reply) => {
  guessLineRepository.setPredictions(request.payload, request.headers)
    .then((response) => reply(response))
    .catch((err) => reply(err))
}

const getGuessLine = (request, reply) => {
  guessLineRepository.getGuessLine(request.query, request.headers)
    .then((response) => reply(response))
    .catch((err) => reply(err))
}

const listUserGuessesLines = (request, reply) => {
  guessLineRepository.listUserGuessesLines(request.query, request.headers)
    .then((response) => reply(response))
    .catch((err) => reply(err))
}

const userAtGuessLine = (request, reply) => {
  guessLineRepository.userAtGuessLine(request.query, request.headers)
    .then((response) => reply(response))
    .catch((err) => reply(err))
}

const listLeaguesWithActiveLines = (request, reply) => {
  guessLineRepository.listLeaguesWithActiveLines(request.headers)
    .then((response) => reply(response))
    .catch((err) => reply(err))
}

const listLinesByLeague = (request, reply) => {
  guessLineRepository.listLinesByLeague(request.query, request.headers)
    .then((response) => reply(response))
    .catch((err) => reply(err))
}

module.exports = {
  addUserToGuessLine,
  setPredictions,
  getGuessLine,
  listUserGuessesLines,
  userAtGuessLine,
  listLeaguesWithActiveLines,
  listLinesByLeague
}