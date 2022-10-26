// //import gql tagged template function
// const { gql } = require("apollo-server-express");

// //typeDefs
// const typeDefs = gql`
//   type User {
//     _id: ID
//     username: String
//     email: String
//     reviews: [Review]
//     orders: [Order]
//   }
//   type Cookie {
//     _id: ID
//     name: String!
//     description: String!
//     image: Image!
//     allergens: Array
//     reviews: [Review]
//   }
//   type Review {
//     cookieName: ID!
//     createdBy: ID!
//     reviewText: String!
//     created_at: Date
//   }
//   type Order {
//     savedCookies: [Cookie]
//     orderSize: String!
//     createdAt: Date!
//     createdBy: ID!
//     orderTotal: Number!
//   }
//   type Auth {
//     token: ID!
//     user: User
//   }
//   type Query {
//     me: User
//   }
//   type Mutation {
//     login(email: String!, password: String!): Auth
//     addUser(username: String!, email: String!, password: String!): Auth
//     addCookie(name: String!, description: String!, image: Image!): User
//     removeCookie(_id: ID!): User
//   }
// `;

// module.exports = typeDefs;
