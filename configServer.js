'use strict';

const Hapi = require('hapi');

module.exports = () => {
  const server = new Hapi.Server();
  server.connection({
    port: 9000
  });

  return server;
}