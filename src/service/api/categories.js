import { client } from '../axios';

class Categories {
  getCategoriesListApi() {
    return client.get(`/games/categories/`);
  }
}

export default Categories;
