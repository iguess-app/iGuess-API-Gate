'use strict'

const guessLeagueController = require('../../controllers/guessLeagueController')
const server = require('../../../configServer')

server.route({
  path: '/guessleague/getGuessLeague',
  method: 'GET',
  config: {
    handler: (request, reply) => {
      guessLeagueController.getGuessLeague(request, reply)
    }
  }
})