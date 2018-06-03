'use strict'

const tokenController = require('../../controllers/tokenController')
const server = require('../../../configServer')

server.route({
  path: '/token/verify',
  method: 'GET',
  config: {
    handler: (request, reply) => {
      tokenController.tokenVerify(request, reply)
    }
  }
})