import gql from "graphql-tag";

export const disciplinesGraphQL = gql`
  query($where: DisciplineWhereInput) {
    disciplines(where: $where) {
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
