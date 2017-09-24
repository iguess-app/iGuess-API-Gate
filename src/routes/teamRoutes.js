'use strict';

const Joi = require('joi');

const teamController = require('../controllers/teamController')
const server = require('../../configServer')

server.route({
  path: '/getteams',
  method: 'POST',
  config: {
    handler: (request, reply) => {
      teamController.getTeams(request, reply)
    },
    response: { schema: Joi.object().meta({ className: 'Response' }) }
  }
})

server.route({
  path: '/setteams',
  method: 'POST',
  config: {
    handler: (request, reply) => {

      teamController.setTeams(request, reply)
    }
  }
})