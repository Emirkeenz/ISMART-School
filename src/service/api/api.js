import Categories from './categories';
import Participants from './participants';
import Team from './team';

class ApiService {
  participants = new Participants();
  team = new Team();
  categories = new Categories();
}

export default new ApiService();
