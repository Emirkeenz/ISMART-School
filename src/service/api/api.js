import Participants from './participants';
import Team from './team';

class ApiService {
  participants = new Participants();
  team = new Team();
}

export default new ApiService();
