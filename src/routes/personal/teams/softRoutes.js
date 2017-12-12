'use strict'

const profileController = require('../../../controllers/profileController')
const server = require('../../../../configServer')

server.route({
  path: '/teams/listLeagues',
  method: 'GET',
  config: {
    handler: (request, reply) => {
      profileController.listLeagues(request, reply)
    }
  }
})

server.route({
  path: '/teams/listTeamsByLeague',
  method: 'GET',
  config: {
    handler: (request, reply) => {
      profileController.listTeamsByLeague(request, reply)
    }
  }
})