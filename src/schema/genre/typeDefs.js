import gql from "graphql-tag";

const typeDefs = gql`
  extend type Query {
    genres: [Genre!]!
  }

  extend type Mutation {
    addGenre(input: AddGenreInput): Genre!
    deleteGenre(id: ID!): Boolean!
    updateGenre(id: ID!, input: UpdateGenreInput): Genre!
  }

  type Genre {
    id: String!
    name: String!
    courses(filter: courseFilter): [Course!]!
  }

  input AddGenreInput {
    name: String!
  }

  input UpdateGenreInput {
    name: String!
  }

  input courseFilter {
    discount: Boolean
  }
`;

export default typeDefs;
