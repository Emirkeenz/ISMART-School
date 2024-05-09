import { client } from '../axios';

class Subcategories {
  getSubcategoriesList() {
    return client.get(`/games/subcategories/`);
  }
  getSubcategory({ id }) {
    return client.put(`/games/subcategories/${id}`);
  }
}

export default Subcategories;
