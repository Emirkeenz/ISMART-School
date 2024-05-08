import Categories from './categories';
import Participants from './participants';
import Subategories from './subcategories';
import Team from './team';
import Auth from './auth';

class ApiService {
  auth = new Auth();
  participants = new Participants();
  team = new Team();
  categories = new Categories();
  subcategories = new Subategories();
}

export default new ApiService();
