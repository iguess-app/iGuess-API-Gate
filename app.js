'use strict'

const plugins = require('./config/plugins/serverPlugins')
require('./src/routes')

const server = require('./configServer')

server.register(plugins, () => {
  server.start((err) => {
    if (err) {
      throw err;
    }
  })
})