import gql from "graphql-tag";

export const publishAuthorizedPersonnelGraphQL = gql`
  mutation($where: AuthorizedPersonnelWhereUniqueInput!) {
    publishAuthorizedPersonnel(where: $where) {
      id
    }
  }
`;
