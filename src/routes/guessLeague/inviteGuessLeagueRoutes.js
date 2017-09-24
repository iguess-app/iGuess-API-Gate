'use strict'

const guessLeagueController = require('../../controllers/guessLeagueController')
const headerSchema = require('../coincidentSchemas/defaultHeaderSchema')
const server = require('../../../configServer')
const schema = require('./schemas')

server.route({
  path: '/guessleague/inviteTo',
  method: 'PATCH',
  config: {
    handler: (request, reply) => {
      guessLeagueController.createGuessLeague(request, reply)
    },
    validate: {
      payload: schema.inviteGuessLeagueSchema.request,
      headers: headerSchema
    },
    response: {
      schema: schema.inviteGuessLeagueSchema.response
    }
  }
})