'use strict'

const guessLeagueController = require('../../controllers/guessLeagueController')
const headerSchema = require('../coincidentSchemas/defaultHeaderSchema')
const server = require('../../../configServer')
const schema = require('./schemas')

server.route({
  path: '/guessleague/create',
  method: 'POST',
  config: {
    handler: (request, reply) => {
      guessLeagueController.createGuessLeague(request, reply)
    },
    validate: {
      payload: schema.createGuessLeagueSchema.request,
      headers: headerSchema
    },
    response: {
      schema: schema.createGuessLeagueSchema.response
    }
  }
})

server.route({
  path: '/guessleague/getGuessLeague',
  method: 'GET',
  config: {
    handler: (request, reply) => {
      guessLeagueController.getGuessLeague(request, reply)
    }
  }
})