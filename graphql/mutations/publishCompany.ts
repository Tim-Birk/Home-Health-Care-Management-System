import gql from "graphql-tag";

export const publishCompanyGraphQL = gql`
  mutation(
    $where: CompanyWhereUniqueInput!
  ) {
    publishCompany(where: $where) {
      id
    }
  }
`;
