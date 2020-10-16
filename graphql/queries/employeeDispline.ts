import gql from "graphql-tag";

export const employeeDisciplineGraphQL = gql`
  query($where: EmployeeDisciplineWhereUniqueInput!) {
    employeeDiscipline(where: $where) {
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
