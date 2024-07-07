const courses = [
  {
    id: "book-06",
    name: "TypeScript Basics",
    description: "TypeScript Basics for  beginners",
    price: 599.99,
    discount: false,
    genre: "cat-01",
  },
  {
    id: "book-07",
    name: "GraphQL Basics",
    description: "GraphQL Basics for beginners",
    price: 499.99,
    discount: true,
    genre: "cat-02",
  },
  {
    id: "book-08",
    name: "NextJS Basics",
    description: "NextJS Basics for beginners",
    price: 599.99,
    discount: false,
    genre: "cat-03",
  },
];

const genres = [
  { id: "cat-01", name: "Technical" },
  { id: "cat-02", name: "History" },
  { id: "cat-03", name: "Cattry" },
];

export const db = { courses, genres };
