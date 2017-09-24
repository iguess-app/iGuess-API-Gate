'use strict'

const Joi = require('joi')

const profileController = require('../controllers/profileController')
const server = require('../../configServer')

server.route({
  path: '/profile/singIn',
  method: 'GET',
  config: {
    handler: (request, reply) => {
      profileController.singIn(request, reply)
    },
    response: {
      schema: Joi.bool().meta({
        className: 'Response'
      })
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