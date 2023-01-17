const { gql } = require("apollo-server");
const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationatlity!
    friends: [User]
    favoriteMovies: [Movie]
  }

  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }

  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: Nationatlity = BRAZIL
  }
  input UpdateUsernameInput {
    id: ID!
    newUsername: String!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUsername(input: UpdateUsernameInput): User
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }

  enum Nationatlity {
    CANADA
    BRAZIL
    INDIA
    GERMANY
    CHILE
  }
`;

module.exports = { typeDefs };
