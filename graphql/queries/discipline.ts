import gql from "graphql-tag";

export const disciplineGraphQL = gql`
  query($where: DisciplineWhereUniqueInput!) {
    discipline(where: $where) {
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
