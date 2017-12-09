'use strict'

const guessLeagueController = require('../../controllers/guessLeagueController')
const server = require('../../../configServer')

server.route({
  path: '/guessleague/createGuessLeague',
  method: 'POST',
  config: {
    handler: (request, reply) => {
      guessLeagueController.createGuessLeague(request, reply)
    }
  }
})