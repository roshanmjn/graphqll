import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    courses(filter: courseFilter): [Course!]!
    course(id: ID!): Course
    genres: [Genre!]!
  }

  type Course {
    id: String!
    name: String!
    description: String!
    price: Float!
    discount: Boolean!
    genre: [Genre!]!
  }

  type Genre {
    id: String!
    name: String!
    courses(filter: courseFilter): [Course!]!
  }

  input courseFilter {
    discount: Boolean
  }

  type Mutation {
    addGenre(input: AddGenreInput): Genre!
    addCourse(input: AddCourseInput): Course!
    deleteGenre(id: ID!): Boolean!
    updateGenre(id: ID!, input: UpdateGenreInput): Genre!
  }

  input AddGenreInput {
    name: String!
  }
  input AddCourseInput {
    name: String!
    description: String!
    price: Float!
    discount: Boolean!
    genre: ID!
  }
  input UpdateGenreInput {
    name: String!
  }
`;
