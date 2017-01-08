'use strict';

const Joi = require('joi');

module.exports = (app) => {

    const profileController = app.src.application.controllers.profileController;
    const server = app.configServer;

    server.route({
      path: '/getprofile',
      method: 'GET',
      config: {
        handler: (request, reply) => {
          profileController.getProfile(request, reply)
        },
        response: { schema: Joi.bool().meta({ className: 'Response' }) }
      }
    })

};