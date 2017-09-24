'use strict'

const Boom = require('boom')

const coincidents = require('iguess-api-coincidents')
const log = coincidents.Managers.logManager

const errorTypeEnum = {
  connectionRefused: 'ECONNREFUSED'
}

const treatError = (err) => {
  log.error(err)
  if (err.error.code === errorTypeEnum.connectionRefused) {
    return Boom.serverUnavailable(err.message) 
  }

  return err
}

module.exports = treatError