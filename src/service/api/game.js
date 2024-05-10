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
}

export default Game;
