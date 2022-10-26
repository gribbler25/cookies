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
    createdAt: String
  }
  type Subscription {
    savedCookies: [Cookie]
    boxSize: String!
    createdAt: String
    createdBy: String
    total: Int
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    getmMe: User
    getCookie: Cookie
    getCookies: [Cookie]
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addCookie(name: String!, description: String!, image: String!): Cookie
    removeCookie(_id: ID!): Cookie
    addSubscription(savedCookies: [String!], boxSize: String!): User
    deleteSubscription(_id: ID!): User
    addReview(cookieReviewed: String!, reviewText: String!): Cookie
    deleteReview(_id: ID!): Cookie
  }
`;

module.exports = typeDefs;