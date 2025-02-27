'use strict'

require('./src/routes')
const plugins = require('./config/plugins/serverPlugins')
const server = require('./configServer')

server.register(plugins, () => {
  server.start((err) => {
    if (err) {
      throw err
    }
  })
})