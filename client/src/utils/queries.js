// holds the query GET_ME  and executes the 'me' query
import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me {
    me {
      user
    }
  }
`;
