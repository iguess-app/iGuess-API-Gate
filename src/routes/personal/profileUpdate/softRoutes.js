'use strict'

const profileController = require('../../../controllers/profileController')
const server = require('../../../../configServer')

server.route({
  path: '/profile/updateInfo',
  method: 'PATCH',
  config: {
    handler: (request, reply) => {
      profileController.updateInfo(request, reply)
    }
  }
})

server.route({
  path: '/profile/updatePassword',
  method: 'PATCH',
  config: {
    handler: (request, reply) => {
      profileController.updatePassword(request, reply)
    }
  }
})

server.route({
  path: '/profile/updateFootballSupportedTeams/supportedTeam',
  method: 'PATCH',
  config: {
    handler: (request, reply) => {
      profileController.updateFootballSupportedTeam(request, reply)
    }
  }
})

server.route({
  path: '/profile/updateFootballSupportedTeams/appreciatedTeams',
  method: 'PATCH',
  config: {
    handler: (request, reply) => {
      profileController.updateFootballAppreciatedTeam(request, reply)
    }
  }
})