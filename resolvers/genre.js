export const Genre = {
  courses: (parent, args, context) => {
    const courses = context.db.courses;
    const genreId = parent.id;
    const { filter } = args;
    const genreProducts = courses.filter((item) => item.genre === genreId);
    let filteredGenre = genreProducts;
    if (filter) {
      if (filter.discount) {
        filteredGenre = filteredGenre.filter(
          (product) => product.discount == filter.discount
        );
      }
    }
    return filteredGenre;
  },
};
