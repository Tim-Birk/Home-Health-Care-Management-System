import gql from "graphql-tag";

export const createEmployeeDisciplineGraphQL = gql`
  mutation($data: EmployeeDisciplineCreateInput!) {
    createEmployeeDiscipline(data: $data) {
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
