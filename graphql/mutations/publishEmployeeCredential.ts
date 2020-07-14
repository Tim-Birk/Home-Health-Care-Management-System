import gql from "graphql-tag";

export const publishEmployeeCredentialGraphQL = gql`
  mutation($where: EmployeeCredentialWhereUniqueInput!) {
    publishEmployeeCredential(where: $where) {
      id
    }
  }
`;
