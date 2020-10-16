import gql from "graphql-tag";

export const createDisciplineGroupGraphQL = gql`
  mutation($data: DisciplineGroupCreateInput!) {
    createDisciplineGroup(data: $data) {
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
