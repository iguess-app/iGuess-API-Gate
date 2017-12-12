'use strict'

const softRoutes = require('./softRoutes')
const searchProfileSoftRoutes = require('./searchProfile/softRoutes')
const teamsSoftRoutes = require('./teams/softRoutes')
const profileUpdateSoftRoutes = require('./profileUpdate/softRoutes')
const friendsSoftRoutes = require('./friends/softRoutes')
const notificationsSoftRoutes = require('./notifications/softRoutes')

module.exports = {
  softRoutes,
  searchProfileSoftRoutes,
  teamsSoftRoutes,
  profileUpdateSoftRoutes,
  friendsSoftRoutes,
  notificationsSoftRoutes
}