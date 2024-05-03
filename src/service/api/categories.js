import { client } from '../axios';

class Categories {
  const;
  getCategoriesList() {
    return client.get('games/categories');
  }
}

export default Categories;
