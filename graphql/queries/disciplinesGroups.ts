import gql from "graphql-tag";

export const disciplineGroupsGraphQL = gql`
  query($where: DisciplineGroupWhereInput) {
    disciplineGroups(where: $where) {
      id
      name
      isAdmin
      allowOverlap
      disciplines {
        id
        name
        abbreviation
        securityLevel
      }
    }
  }
`;
