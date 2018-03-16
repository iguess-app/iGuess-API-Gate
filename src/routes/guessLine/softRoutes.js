'use strict'

const guessLineController = require('../../controllers/guessLineController')
const server = require('../../../configServer')

server.route({
  path: '/guessline/addUserToGuessLine',
  method: 'PATCH',
  config: {
    handler: (request, reply) => {
      guessLineController.addUserToGuessLine(request, reply)
    }
  }
})

server.route({
  path: '/guessline/setPredictions',
  method: 'PUT',
  config: {
    handler: (request, reply) => {
      guessLineController.setPredictions(request, reply)
    }
  }
})

server.route({
  path: '/guessline/getGuessLine',
  method: 'GET',
  config: {
    handler: (request, reply) => {
      guessLineController.getGuessLine(request, reply)
    }
  }
})

server.route({
  path: '/guessline/listUserGuessesLines',
  method: 'GET',
  config: {
    handler: (request, reply) => {
      guessLineController.listUserGuessesLines(request, reply)
    }
  }
})

server.route({
  path: '/guessline/userAtGuessLine',
  method: 'GET',
  config: {
    handler: (request, reply) => {
      guessLineController.userAtGuessLine(request, reply)
    }
  }
})

server.route({
  path: '/guessline/listLeaguesWithActiveLines',
  method: 'GET',
  config: {
    handler: (request, reply) => {
      guessLineController.listLeaguesWithActiveLines(request, reply)
    }
  }
})