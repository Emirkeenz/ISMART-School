import { client } from '../axios';

class Categories {
  const;
  getCategoriesList() {
    return client.get(`/games/categories/`);
  }
  getCategory({ id }) {
    return client.get(`/games/categories/${id}`);
  }
}

export default Categories;
