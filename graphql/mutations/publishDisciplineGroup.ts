import gql from "graphql-tag";

export const publishDisciplineGroupGraphQL = gql`
  mutation($where: DisciplineGroupWhereUniqueInput!) {
    publishDisciplineGroup(where: $where) {
      id
    }
  }
`;
