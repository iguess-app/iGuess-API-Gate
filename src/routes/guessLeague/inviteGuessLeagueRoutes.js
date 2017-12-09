'use strict'

const guessLeagueController = require('../../controllers/guessLeagueController')
const server = require('../../../configServer')

server.route({
  path: '/guessleague/inviteTo',
  method: 'PATCH',
  config: {
    handler: (request, reply) => {
      guessLeagueController.inviteTo(request, reply)
    }
  }
})