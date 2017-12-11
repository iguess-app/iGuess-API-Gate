'use strict'

const Boom = require('boom')

const coincidents = require('iguess-api-coincidents')
const log = coincidents.Managers.logManager

const errorTypeEnum = {
  connectionRefused: 'ECONNREFUSED'
}

const treatError = (err, mandatoryReturn = true) => {
  log.error(err)
  if (err.error.code === errorTypeEnum.connectionRefused) {
    return Boom.serverUnavailable(err.message)
  }
  if (mandatoryReturn) {
    throw Boom.create(err.error.statusCode, err.error.message, err)
  }

  return Boom.create(err.error.statusCode, err.error.message, err)
}

module.exports = treatError