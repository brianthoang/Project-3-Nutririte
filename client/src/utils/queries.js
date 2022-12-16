import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
query me($username: String!) {
  me(username: $username) {
    _id
    username
    email   
  }
  }
`;


export const QUERY_MEALS = gql`
query meals {
  meals {
    _id
    mealText
    mealAuthor
    createdAt
  }
}
`;

export const QUERY_RECIPES = gql`
query recipes {
  recipes {
    _id
    recipeText
    recipeAuthor
    createdAt
  }
}
`;

