class Categories {
  getCategoriesList() {
    return client.get('/categories');
  }
}

export default Categories;
