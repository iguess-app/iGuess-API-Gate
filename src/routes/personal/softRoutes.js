'use strict'

const profileController = require('../../controllers/profileController')
const server = require('../../../configServer')

server.route({
  path: '/login/signIn',
  method: 'POST',
  config: {
    handler: (request, reply) => {
      profileController.signIn(request, reply)
    }
  }
})

server.route({
  path: '/profiles/getProfile',
  method: 'GET',
  config: {
    handler: (request, reply) => {
      profileController.getProfile(request, reply)
    }
  }
})