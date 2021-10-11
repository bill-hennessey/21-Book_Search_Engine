const { gql } = require("apollo-server-express");
// update
const typeDefs = gql`
  type Query {
    me: User
    user(id: ID!): User
  }

  type Mutation {
    #ready but I question saveBook
    login(email: String!, password: String!): Auth
    addUser(userName: String!, email: String!, password: String!): User
    removeBook(bookId: ID!): User
    saveBook(
      authors: [String]
      description: String!
      title: String!
      bookId: Int
      image: String
      link: String
    ): User
  }

  type Book {
    bookId: ID
    authors: [String]
    description: String
    title: String!
    image: String
    link: String
  }

  #ID?? INT?
  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }
  type Auth {
    token: String!
    user: User!
  }
`;

module.exports = typeDefs;
