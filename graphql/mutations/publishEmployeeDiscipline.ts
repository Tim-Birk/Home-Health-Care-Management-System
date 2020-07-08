import gql from "graphql-tag";

export const publishEmployeeDisciplineGraphQL = gql`
  mutation($where: EmployeeDisciplineWhereUniqueInput!) {
    publishEmployeeDiscipline(where: $where) {
      id
    }
  }
`;
