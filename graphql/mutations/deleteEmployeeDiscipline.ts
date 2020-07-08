import gql from "graphql-tag";

export const deleteEmployeeDisciplineGraphQL = gql`
  mutation(
    $where: EmployeeDisciplineWhereUniqueInput!
  ) {
    deleteEmployeeDiscipline(where: $where) {
      id
    }
  }
`;
