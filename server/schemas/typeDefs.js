//import gql tagged template function
const { gql } = require("apollo-server-express");

//typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    reviews: [Review]
    subscription: [Subscription]
  }
  type Cookie {
    _id: ID
    cookieName: String!
    description: String!
    allergens: [String]
    reviews: [Review]
  }
  type Review {
    cookieReviewed: String!
    createdBy: String
    reviewText: String!
    createdAt: String
  }
  type Subscription {
    savedCookies: [Cookie]
    boxSize: String!
    createdAt: String
    createdBy: String
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
    addUser(username: String!, email: String!, password: String!): Auth
    addCookie(cookieName: String!): Subscription
    removeCookie(cookieName: String!): Subscription
    createCookie(
      cookieName: String
      description: String
      allergens: [String]
    ): Cookie
    addSubscription(savedCookies: [String!], boxSize: String!): User
    deleteSubscription(_id: ID!): User
    addReview(cookieReviewed: String!, reviewText: String!): Cookie
    deleteReview(_id: ID!): Cookie
  }
`;

module.exports = typeDefs;
