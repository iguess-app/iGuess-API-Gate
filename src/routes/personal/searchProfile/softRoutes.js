'use strict'

const profileController = require('../../../controllers/profileController')
const server = require('../../../../configServer')

server.route({
  path: '/profiles/getProfile',
  method: 'GET',
  config: {
    handler: (request, reply) => {
      profileController.getProfile(request, reply)
    }
  }
})

server.route({
  path: '/profiles/search',
  method: 'GET',
  config: {
    handler: (request, reply) => {
      profileController.searchProfile(request, reply)
    }
  }
})