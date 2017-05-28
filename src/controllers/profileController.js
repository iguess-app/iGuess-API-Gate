'use Strict';

module.exports = (app) => {

  const profileService = app.src.services.profileService;

  const getProfile = (request, reply) => {
    const query = request.query;
    const headers = request.headers;

    profileService.getProfile(query, headers)
      .then((profile) => reply(profile))
      .catch((err) => reply(err))
  }

  const singIn = (request, reply) => {
    const query = request.query;
    const headers = request.headers;

    profileService.singIn(query, headers)
      .then((teams) => reply(teams))
      .catch((err) => reply(err))
  }

  return {
    getProfile,
    singIn
  }
}