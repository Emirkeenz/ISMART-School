import { client } from '../axios';

class Team {
  getTeamList() {
    return client.get('/team');
  }
  createTeam(data) {
    return client.post('/team', data);
  }
  deleteTeam(id) {
    return client.delete(`/team/${id}`);
  }
  updateTeam({ id, data }) {
    return client.put(`/team/${id}`, data);
  }
}

export default Team;
