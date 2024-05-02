class Participants {
  getParticipantsList() {
    return client.get('/participants');
  }

  createParticipant(data) {
    return client.post('/participants', data);
  }
  deleteParticipant() {
    return client.delete(`/participants/${id}`);
  }
  updateParticipant({ id, data }) {
    return client.put(`/participants/${id}`, data);
  }
}

export default Participants;
