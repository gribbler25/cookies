import { gql } from "@apollo/client";

export const GET_ME = gql`
  query getMe {
    _id
    username
    email
    orders {
      _id
      cookies
      email
      total
    }
  }
`;

export const GET_COOKIE = gql`
  query getCookie($cookieName: String!) {
    getCookie(cookieName: $cookieName) {
      _id
      cookieName
      description
      allergens
      reviews {
        _id
        reviewText
        username
      }
    }
  }
`;

export const GET_COOKIES = gql`
  query getCookies {
    _id
    username
    cookieName
    description
    allergens
    reviews {
      reviewText
      username
    }
  }
`;

export const GET_USERS = gql`
  query getUsers {
    username
    email
    orders {
      _id
      cookies
      email
      total
    }
  }
`;
