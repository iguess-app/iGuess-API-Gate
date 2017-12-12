'use strict'

const profileController = require('../../../controllers/profileController')
const server = require('../../../../configServer')

server.route({
  path: '/notifications/list',
  method: 'GET',
  config: {
    handler: (request, reply) => {
      profileController.notificationsList(request, reply)
    }
  }
})

server.route({
  path: '/notifications/saw',
  method: 'PUT',
  config: {
    handler: (request, reply) => {
      profileController.notificationsPutSaw(request, reply)
    }
  }
})

server.route({
  path: '/notifications/response',
  method: 'PATCH',
  config: {
    handler: (request, reply) => {
      profileController.notificationsResponse(request, reply)
    }
  }
})