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
  path: '/login/signUp',
  method: 'POST',
  config: {
    handler: (request, reply) => {
      profileController.signUp(request, reply)
    }
  }
})

server.route({
  path: '/login/logout',
  method: 'DELETE',
  config: {
    handler: (request, reply) => {
      profileController.logout(request, reply)
    }
  }
})

server.route({
  path: '/availability/email',
  method: 'GET',
  config: {
    handler: (request, reply) => {
      profileController.emailAvailability(request, reply)
    }
  }
})

server.route({
  path: '/availability/userName',
  method: 'GET',
  config: {
    handler: (request, reply) => {
      profileController.userNameAvailability(request, reply)
    }
  }
})

server.route({
  path: '/forgotMyPass/sendEmail',
  method: 'POST',
  config: {
    handler: (request, reply) => {
      profileController.sendEmail(request, reply)
    }
  }
})

server.route({
  path: '/forgotMyPass/validateSoftToken',
  method: 'GET',
  config: {
    handler: (request, reply) => {
      profileController.validateSoftToken(request, reply)
    }
  }
})

server.route({
  path: '/forgotMyPass/updateNewPassword',
  method: 'PATCH',
  config: {
    handler: (request, reply) => {
      profileController.updateNewPassword(request, reply)
    }
  }
})