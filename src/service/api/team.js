import { client } from '../axios';

class Team {
  getTeamList(params) {
    return client.get('/teams/teams', { params });
  }
  createTeam(data) {
    return client.post('/teams/teams', data);
  }
  deleteTeam(id) {
    return client.delete(`/teams/teams/${id}/`);
  }
  updateTeam({ id, data }) {
    return client.patch(`/teams/teams/${id}/`, data);
  }
}

export default Team;
