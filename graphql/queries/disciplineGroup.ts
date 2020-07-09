import gql from "graphql-tag";

export const disciplineGroupGraphQL = gql`
  query($where: DisciplineGroupWhereUniqueInput!) {
    disciplineGroup(where: $where) {
      id
      name
      isAdmin
      allowOverlap
      disciplines {
        id
        name
        abbreviation
      }
      company {
        id
        legalBusinessName
      }
    }
  }
`;
