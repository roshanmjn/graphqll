import gql from "graphql-tag";

const typeDefs = gql`
  extend type Query {
    courses(filter: courseFilter): [Course!]!
    course(id: ID!): Course
  }

  extend type Mutation {
    addGenre(input: AddGenreInput): Genre!
    addCourse(input: AddCourseInput): Course!
  }

  type Course {
    id: String!
    name: String!
    description: String!
    price: Float!
    discount: Boolean!
    genre: [Genre!]!
  }

  input AddCourseInput {
    name: String!
    description: String!
    price: Float!
    discount: Boolean!
    genre: ID!
  }
`;

export default typeDefs;
