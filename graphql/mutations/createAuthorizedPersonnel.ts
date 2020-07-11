import gql from "graphql-tag";

export const createAuthorizedPersonnelGraphQL = gql`
  mutation($data: AuthorizedPersonnelCreateInput!) {
    createAuthorizedPersonnel(data: $data) {
      id
      firstName
      lastName
      title
      canVerify
      company {
        id
        legalBusinessName
      }
    }
  }
`;
