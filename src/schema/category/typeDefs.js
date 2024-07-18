import gql from "graphql-tag";

const typeDefs = gql`
  extend type Query {
    categories: [Category!]!
  }

  type Category {
    id: Int
    name: String
    products: [Product!]!
  }
`;

export default typeDefs;
