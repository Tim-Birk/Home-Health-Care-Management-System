import gql from "graphql-tag";

export const authorizedPersonnelGraphQL = gql`
  query($where: AuthorizedPersonnelWhereUniqueInput!) {
    authorizedPersonnel(where: $where) {
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
