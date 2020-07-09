import gql from "graphql-tag";

export const publishDisciplineGraphQL = gql`
  mutation($where: DisciplineWhereUniqueInput!) {
    publishDiscipline(where: $where) {
      id
    }
  }
`;
