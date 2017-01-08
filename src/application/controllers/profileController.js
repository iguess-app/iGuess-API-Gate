'use Strict';

module.exports = (app) => {

  const profileService = app.src.application.services.profileService;
  
  const getProfile = (request, reply) => {
    profileService.getProfile(request.payload)
      .then((teams) => {
        reply(teams)
      });
  }

  const someElse = (request, reply) => {
    return true;
  }

  return {
    getProfile,
    someElse
  }
}