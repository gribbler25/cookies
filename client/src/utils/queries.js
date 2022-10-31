import { gql } from '@apollo/client';

export const GET_ME = gql`
    {
        getMe{
            _id
             userName
             email
             orders{
             _id 
             cookies
             email 
             total
             }
         }
     }
`;

export const GET_COOKIE = gql`
  query  getCookie($cookieName: String){
        getCookie(cookieName: $cookieName){
        _id
        username
        cookieName
        description
        allergens
        
     }
    }
`;

export const GET_COOKIES = gql`
{
 getCookies{
    _id
    username
    cookieName
    description
    allergens
    }
}
`;

