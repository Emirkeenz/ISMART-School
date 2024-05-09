import Participants from './participants';
import Subategories from './subcategories';
import Team from './team';
import Auth from './auth';
import Categories from './categories';
import Game from './game';

class ApiService {
  auth = new Auth();
  participants = new Participants();
  team = new Team();
  subcategories = new Subategories();
  categories = new Categories();
  game = new Game();
}

export default new ApiService();
