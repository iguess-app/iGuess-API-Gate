'use strict'

const profileController = require('../../../controllers/profileController')
const server = require('../../../../configServer')

server.route({
  path: '/friends/add',
  method: 'POST',
  config: {
    handler: (request, reply) => {
      profileController.friendsAdd(request, reply)
    }
  }
})

server.route({
  path: '/friends/search',
  method: 'GET',
  config: {
    handler: (request, reply) => {
      profileController.friendsSearch(request, reply)
    }
  }
})

server.route({
  path: '/friends/list',
  method: 'GET',
  config: {
    handler: (request, reply) => {
      profileController.friendsList(request, reply)
    }
  }
})

server.route({
  path: '/friends/areFriends',
  method: 'GET',
  config: {
    handler: (request, reply) => {
      profileController.areFriends(request, reply)
    }
  }
})

server.route({
  path: '/friends/undo',
  method: 'DELETE',
  config: {
    handler: (request, reply) => {
      profileController.friendsUndo(request, reply)
    }
  }
})