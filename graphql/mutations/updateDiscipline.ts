import gql from "graphql-tag";

export const updateDisciplineGraphQL = gql`
  mutation($data: DisciplineUpdateInput!, $where: DisciplineWhereUniqueInput!) {
    updateDiscipline(data: $data, where: $where) {
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
