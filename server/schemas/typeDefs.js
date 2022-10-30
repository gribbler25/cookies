//import gql tagged template function
const { gql } = require("apollo-server-express");
//deleted subscrition field for User
//typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    orders: [Order]
  }

  type Cookie {
    _id: ID
    username: String
    cookieName: String
    description: String
    allergens: [String]
    reviews: [String]
  }
  type Review {
    _id: ID
    reviewText: String
    username: String
  }

  type Order {
    _id: ID
    cookies: String
    email: String
    total: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getMe: User
    getUsers: [User]
    getCookie(cookieName: String!): Cookie
    getCookies: [Cookie]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    createOrder(cookies: String, total: String): Order
    deleteCookie(cookieName: String): Cookie
    createCookie(
      cookieName: String
      description: String
      allergens: [String]
      username: String
      reviews: [String]
    ): Cookie
    addReview(cookieId: ID!, reviewText: String!): Cookie
  }
`;
module.exports = typeDefs;
