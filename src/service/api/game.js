import { client } from '../axios';

class Game {
  getAllGameResults(params) {
    return client.get(`/teams/time-results/`, { params });
  }
  startGameByTime(data) {
    return client.post(`/teams/time-results/`, data);
  }
  changeGameValueByTime(id, data) {
    return client.patch(`/teams/time-results/${id}/`, data);
  }

  startGameByRoundRobin(data) {
    return client.post(`/teams/round-robin-match/`, data);
  }

  getAllGameRoundRobinResults(params) {
    return client.get(`/teams/round-robin-match/`, { params });
  }

  getAllSumoFinalists() {
    return client.get(`https://ismart-olympiad-ratings-922a3ab18f63.herokuapp.com/sumo-finalists/`);
  }
}

export default Game;
