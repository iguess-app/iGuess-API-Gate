'use Strict';

const SelectTeamService = (app) => {

  const holiRepository = app.src.application.repositories.holiRepository;

  const getTeams = (reqBody) => {
    return holiRepository.getTeams(reqBody);
  }

  const setTeams = () => {
    holiRepository.setTeams();
  }
  
  return {
    getTeams,
    setTeams
  }
}

module.exports = SelectTeamService;
