'use strict'

const guessLeagueController = require('../../controllers/guessLeagueController')
const headerSchema = require('../headersSchemas/defaultHeaderSchema').defaultSessionHeaderSchema
const server = require('../../../configServer')
const schema = require('./schemas')

server.route({
  path: '/guessleague/inviteTo',
  method: 'PATCH',
  config: {
    handler: (request, reply) => {
      guessLeagueController.inviteTo(request, reply)
    },
    validate: {
      payload: schema.inviteGuessLeagueSchema.request,
      headers: headerSchema
    }
  }
})