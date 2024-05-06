import { client } from '../axios';

class Subategories {
  const;
  getSubcategoriesList() {
    return client.get(`/games/subcategories/`);
  }
  getSubcategory({ id }) {
    return client.put(`/games/subcategories/${id}`);
  }
}

export default Subategories;
