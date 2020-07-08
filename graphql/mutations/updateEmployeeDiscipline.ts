import gql from "graphql-tag";

export const updateEmployeeDisciplineGraphQL = gql`
  mutation(
    $data: EmployeeDisciplineUpdateInput!
    $where: EmployeeDisciplineWhereUniqueInput!
  ) {
    updateEmployeeDiscipline(data: $data, where: $where) {
      id
      disciplineGroup {
        id
        name
        isAdmin
        allowOverlap
      }
      discipline {
        id
        name
        abbreviation
      }
      startDate
      endDate
    }
  }
`;
