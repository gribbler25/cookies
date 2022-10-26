//import gql tagged template function
const { gql } = require("apollo-server-express");

//typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    userName: String!
    email: String!
    password: String!
    reviews: [Review]
    subscription: [Subscription]
  }
  type Cookie {
    _id: ID
    cookieName: String!
    image: String
    description: String!
    allergens: [String]
    reviews: [Review]
  }
  type Review {
    cookieReviewed: String!
    createdBy: String
    reviewText: String!
    createdAt: Date
  }
  type Subscription {
    savedCookies: [Cookie]
    boxSize: String!
    createdAt: Date
    createdBy: String
    total: Number
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    cookie: Cookie
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addCookie(name: String!, description: String!, image: Image!): Cookie
    removeCookie(_id: ID!): Cookie
    addSubscription(savedCookies: Array, boxSize: String!): User
    deleteSubscription(_id: ID!): User
    addReview(cookieReviewed: String!, reviewText: String!): Cookie
    deleteReview(_id: ID!): Cookie
  }
`;

module.exports = typeDefs;
