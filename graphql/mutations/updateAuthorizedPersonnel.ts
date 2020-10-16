import gql from "graphql-tag";

export const updateAuthorizedPersonnelGraphQL = gql`
  mutation(
    $data: AuthorizedPersonnelUpdateInput!
    $where: AuthorizedPersonnelWhereUniqueInput!
  ) {
    updateAuthorizedPersonnel(data: $data, where: $where) {
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
