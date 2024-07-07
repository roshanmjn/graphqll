import { v4 as uuid } from "uuid";

export const Mutation = {
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
  addCourse: (parent, args, context) => {
    const { name, description, price, discount, genre } = args?.input;
    const { courses } = context.db;

    const newCourse = {
      id: uuid(),
      name,
      description,
      price,
      discount,
      genre,
    };
    courses.push(newCourse);
    return newCourse;
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
    const index = context.db.genres.findIndex((genre) => genre.id === args.id);
    context.db.genres[index] = { ...context.db.genres[index], ...args.input };
    return context.db.genres[index];
  },
};
