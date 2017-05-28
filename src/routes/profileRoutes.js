'use strict';

const Joi = require('joi');

module.exports = (app) => {
  const profileController = app.src.controllers.profileController;
  const server = app.configServer;

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
      },
      validate: {
        query: Joi.object({
          userName: Joi.string().required()
        }),
        headers: Joi.object({
          language: Joi.string().default('en-us')
        }).unknown()
      },
      response: {
        schema: Joi.object().meta({
          className: 'Response'
        })
      }
    }
  })
};