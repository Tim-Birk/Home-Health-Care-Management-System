import gql from "graphql-tag";

export const updateDisciplineGroupGraphQL = gql`
  mutation(
    $data: DisciplineGroupUpdateInput!
    $where: DisciplineGroupWhereUniqueInput!
  ) {
    updateDisciplineGroup(data: $data, where: $where) {
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
