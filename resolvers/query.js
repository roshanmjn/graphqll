export const Query = {
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
  genres: (parent, args, context) => {
    return context.db.genres;
  },
};
