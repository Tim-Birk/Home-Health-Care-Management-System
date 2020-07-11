import gql from "graphql-tag";

export const authorizedPersonnelsGraphQL = gql`
  query($where: AuthorizedPersonnelWhereInput) {
    authorizedPersonnels(where: $where) {
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
