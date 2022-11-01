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
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
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

export const CREATE_COOKIE = gql`
  mutation createCookie(
    $cookieName: String
    $description: String
    $allergens: [String]
    $username: String
  ) {
    createCookie(
      cookieName: $cookieName
      description: $description
      allergens: $allergens
      username: $username
    ) {
      _id
      username
      cookieName
      description
      allergens
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation addReview($cookienameId: String!, $reviewText: String!) {
    addReview(cookienameId: $cookienameId, reviewText: $reviewText) {
      cookieName
      description
      reviews {
        reviewText
        _id
        username
      }
    }
  }
`;

export const DELETE_COOKIE = gql`
  mutation deleteCookie($cookieName: String) {
    deleteCookie(cookieName: $cookieName) {
      _id
      cookieName
      username
    }
  }
`;
