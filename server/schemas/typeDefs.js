//import gql tagged template function
const { gql } = require("apollo-server-express");

//typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    userName: String!
    email: String!
    password: String!
    subscription: Boolean
    orders: [Order]
  }

  type Cookie {
    _id: ID
    userName: String
    cookieName: String
    description: String
    allergens: [String]
  }

  type Order {
    _id: ID
    cookies: String
    userName: String
    total: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getMe: User
    getCookie(cookieName: String!): Cookie
    getCookies: [Cookie]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(userName: String!, email: String!, password: String!): Auth
    createOrder(cookies: String , total: String): Order
    createCookie(
      cookieName: String
      description: String
      allergens: [String]
    ): Cookie
    addReview(reviews: [String!]): Cookie
  }
`;

module.exports = typeDefs;
