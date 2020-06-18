import gql from "graphql-tag";

export const publishUserCompanyGraphQL = gql`
  mutation(
    $where: UserCompanyWhereUniqueInput!
  ) {
    publishUserCompany(where: $where) {
      id
    }
  }
`;
