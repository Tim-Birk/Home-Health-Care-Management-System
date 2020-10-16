import gql from "graphql-tag";

export const publishBranchGraphQL = gql`
  mutation(
    $where: BranchWhereUniqueInput!
  ) {
    publishBranch(where: $where) {
      id
    }
  }
`;
