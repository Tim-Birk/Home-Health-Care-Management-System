import gql from "graphql-tag";

export const createDisciplineGraphQL = gql`
  mutation($data: DisciplineCreateInput!) {
    createDiscipline(data: $data) {
      id
      name
      abbreviation
      securityLevel
      company {
        id
        legalBusinessName
      }
    }
  }
`;
