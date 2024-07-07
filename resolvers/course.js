export const Course = {
  genre: (parent, args, context) => {
    const genres = context.db.genres;
    return genres.filter((item) => item.id === parent.genre);
  },
};
