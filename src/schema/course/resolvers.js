export const Course = {
  Query: {
    courses: (parent, args, context, info) => {
      let filteredCourses = context.db.courses;
      const { filter } = args;
      if (filter) {
        filteredCourses = filteredCourses.filter(
          (product) => product.discount === filter.discount
        );
      }
      return filteredCourses;
    },
    course: (parent, args, context) => {
      const courses = context.db.courses;
      return courses.find((row) => row.id === args.id);
    },
  },
  Course: {
    genre: (parent, args, context) => {
      const genres = context.db.genres;
      return genres.filter((item) => item.id === parent.genre);
    },
  },

  //mutations below
  Mutation: {
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
  },
};
