import gql from "graphql-tag";

export const publishEmployeeGraphQL = gql`
  mutation(
    $where: EmployeeWhereUniqueInput!
  ) {
    publishEmployee(where: $where) {
      id
    }
  }
`;