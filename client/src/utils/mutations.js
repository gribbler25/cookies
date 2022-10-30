import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!){
    addUser(userName: $username, email: $email, password: $password){
    token
    user{
        _id
        username
        email
         }
    }
}
`;
export const CREATE_ORDER = gql`
mutation createOrder($cookies: String, $total: String) {
  createOrder(cookies: $cookies, total: $total) {
    _id
    cookies
    email
    total
  }
}
`;

export const CREATE_COOKIE =gql`
mutation createCookie($description: String, $allergens: [String], $cookieName: String, $username: String) {
  createCookie(description: $description, allergens: $allergens, cookieName: $cookieName, username: $username) {
    _id
    username
    cookieName
    description
    allergens
  }
}
`;


