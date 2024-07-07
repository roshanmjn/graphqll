import { v4 as uuid } from "uuid";

export const Genre = {
  Query: {
    genres: (parent, args, context) => {
      return context.db.genres;
    },
  },

  Genre: {
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
  },

  //mutations below
  Mutation: {
    addGenre: (parent, args, context) => {
      const { input } = args;
      const { name } = input;
      const { genres } = context.db;

      const newGenre = {
        id: uuid(),
        name,
      };

      genres.push(newGenre);
      return newGenre;
    },
    deleteGenre: (parent, args, context) => {
      let { genres, courses } = context?.db;
      context.db.genres = context.db.genres.filter(
        (genre) => genre.id !== args.id
      );
      context.db.genres = context.db.genres.filter(
        (genre) => genre.id !== args.id
      );
      courses = courses.map((course) => {
        if (course.genre === args.id) {
          return { ...course, genre: null };
        } else {
          return course;
        }
      });
      return true;
    },

    updateGenre: (parent, args, context) => {
      const index = context.db.genres.findIndex(
        (genre) => genre.id === args.id
      );
      context.db.genres[index] = { ...context.db.genres[index], ...args.input };
      return context.db.genres[index];
    },
  },
};
