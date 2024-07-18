import gql from "graphql-tag";

const typeDefs = gql`
  extend type Query {
    products(filters: ProductFilter): [Product!]!
    product(id: Int!): Product
  }

  enum SortOrder {
    ASC
    DESC
  }

  type Product {
    id: Int
    title: String
    price: Float
    category: String
    description: String
    image: String
    rating: Rating
  }

  type Rating {
    rate: Float
    count: Int
  }

  input ProductFilter {
    category: String
    price: SortOrder
  }
`;

export default typeDefs;
